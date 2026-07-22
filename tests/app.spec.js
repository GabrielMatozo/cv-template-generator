import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('#paper');
});

test('carrega com valores padrão', async ({ page }) => {
  await expect(page.locator('#f-name')).toHaveValue('Gabriel Matozo');
  await expect(page.locator('#paper .cv-name')).toContainText('Gabriel');
  await expect(page.locator('#f-role')).toHaveValue('Analista de Riscos em Cibersegurança');
  await expect(page.locator('#paper .cv-role')).toContainText('Cibersegurança');
});

test('edita nome e reflete no preview', async ({ page }) => {
  await page.fill('#f-name', 'João Silva');
  await expect(page.locator('#paper .cv-name')).toContainText('João');
  await expect(page.locator('#paper .cv-name em')).toContainText('Silva');
});

test('edita email e reflete no preview', async ({ page }) => {
  await page.fill('#f-email', 'joao@teste.com');
  await expect(page.locator('#p-email')).toHaveText('joao@teste.com');
  await expect(page.locator('#p-email-a')).toHaveAttribute('href', 'mailto:joao@teste.com');
});

test('edita resumo profissional', async ({ page }) => {
  await page.fill('#f-summary', 'Profissional experiente em segurança.');
  await expect(page.locator('#p-summary')).toHaveText('Profissional experiente em segurança.');
});

test('edita bullets de experiência', async ({ page }) => {
  await page.fill('#f-c1-bullets', 'Bullet 1\nBullet 2');
  const items = page.locator('#p-c1-bullets li');
  await expect(items).toHaveCount(2);
  await expect(items.nth(0)).toHaveText('Bullet 1');
  await expect(items.nth(1)).toHaveText('Bullet 2');
});

test('edita stack de tecnologias', async ({ page }) => {
  await page.fill('#f-stack', 'Python, Go, Rust');
  const chips = page.locator('#p-stack .cv-stack-chip');
  await expect(chips).toHaveCount(3);
  await expect(chips.nth(0)).toHaveText('Python');
});

test('seções toggleáveis escondem/mostram preview', async ({ page }) => {
  await expect(page.locator('#p-exp')).toBeVisible();
  await page.uncheck('#toggle-exp');
  await expect(page.locator('#p-exp')).toBeHidden();
  await page.check('#toggle-exp');
  await expect(page.locator('#p-exp')).toBeVisible();
});

test('seções toggleáveis persistem após reload', async ({ page }) => {
  await page.uncheck('#toggle-skills');
  await page.uncheck('#toggle-langs');
  await page.reload();
  await page.waitForSelector('#paper');
  await expect(page.locator('#p-skills')).toBeHidden();
  await expect(page.locator('#p-langs-section')).toBeHidden();
});

test('troca de idioma para inglês', async ({ page }) => {
  await page.selectOption('#lang-select', 'en');
  await expect(page.locator('[data-i18n="btn_pdf"]')).toHaveText('Download PDF');
  await expect(page.locator('[data-i18n="panel_edit_title"]')).toHaveText('Editable Fields');
});

test('troca de idioma para espanhol', async ({ page }) => {
  await page.selectOption('#lang-select', 'es');
  await expect(page.locator('[data-i18n="btn_pdf"]')).toHaveText('Descargar PDF');
  await expect(page.locator('[data-i18n="panel_edit_title"]')).toHaveText('Campos Editables');
});

test('idioma persiste após reload', async ({ page }) => {
  await page.selectOption('#lang-select', 'en');
  await page.reload();
  await page.waitForSelector('#paper');
  await expect(page.locator('[data-i18n="btn_pdf"]')).toHaveText('Download PDF');
});

test('troca de tema aplica data-theme no paper', async ({ page }) => {
  await page.selectOption('#theme-select', 'emerald');
  await expect(page.locator('#paper')).toHaveAttribute('data-theme', 'emerald');
  await page.selectOption('#theme-select', 'rose');
  await expect(page.locator('#paper')).toHaveAttribute('data-theme', 'rose');
});

test('tema persiste após reload', async ({ page }) => {
  await page.selectOption('#theme-select', 'slate');
  await page.reload();
  await page.waitForSelector('#paper');
  await expect(page.locator('#paper')).toHaveAttribute('data-theme', 'slate');
});

test('exporta JSON com dados atuais', async ({ page }) => {
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 5000 }),
    page.click('#export-btn'),
  ]);
  expect(download.suggestedFilename()).toBe('cv-data.json');
});

test('limpar tudo zera campos e preview', async ({ page }) => {
  page.on('dialog', d => d.accept());
  await page.click('#clear-btn');
  await expect(page.locator('#f-name')).toHaveValue('');
  await expect(page.locator('#paper .cv-name')).toHaveText('');
});

test('restaurar volta valores padrão', async ({ page }) => {
  await page.fill('#f-name', 'Teste');
  page.on('dialog', d => d.accept());
  await page.click('#reset-btn');
  await expect(page.locator('#f-name')).toHaveValue('Gabriel Matozo');
});

test('importa JSON via input file', async ({ page }) => {
  const data = { 'f-name': 'Importado', 'f-email': 'importado@teste.com' };
  const blob = await page.evaluate(async (d) => {
    const b = new Blob([JSON.stringify(d)], { type: 'application/json' });
    return URL.createObjectURL(b);
  }, data);
  const fileInput = page.locator('#import-file');
  await fileInput.setInputFiles({ name: 'data.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(data)) });
  await expect(page.locator('#f-name')).toHaveValue('Importado');
  await expect(page.locator('#f-email')).toHaveValue('importado@teste.com');
});

test('auto-save salva draft no localStorage', async ({ page }) => {
  await page.fill('#f-name', 'Auto Saved');
  await page.waitForTimeout(800);
  const draft = await page.evaluate(() => localStorage.getItem('cv-draft'));
  expect(draft).toContain('Auto Saved');
});

test('projetos seção aparece no preview quando toggle ativo', async ({ page }) => {
  await page.check('#toggle-proj');
  await expect(page.locator('#p-proj')).toBeVisible();
  await page.fill('#f-proj1-title', 'Meu Projeto');
  await expect(page.locator('#p-proj1-title')).toHaveText('Meu Projeto');
  await page.fill('#f-proj1-link', 'https://github.com/teste');
  await expect(page.locator('#p-proj1-link')).toHaveText('github.com/teste');
  await expect(page.locator('#p-proj1-link')).toHaveAttribute('href', 'https://github.com/teste');
});

test('projetos se some quando toggle desativado', async ({ page }) => {
  await page.uncheck('#toggle-proj');
  await expect(page.locator('#p-proj')).toBeHidden();
});

test('projlink normaliza URL sem protocolo', async ({ page }) => {
  await page.fill('#f-proj1-link', 'github.com/teste');
  await expect(page.locator('#p-proj1-link')).toHaveAttribute('href', 'https://github.com/teste');
});

test('projlink some quando vazio', async ({ page }) => {
  await page.fill('#f-proj1-link', '');
  await expect(page.locator('#p-proj1-link')).toBeHidden();
});

test('stack chips com hot tech tem classe hot', async ({ page }) => {
  await page.fill('#f-stack', 'Python, CSS');
  const chips = page.locator('#p-stack .cv-stack-chip');
  await expect(chips.nth(0)).toHaveClass(/hot/);
  await expect(chips.nth(1)).not.toHaveClass(/hot/);
});

test('campos de contato somem quando vazios', async ({ page }) => {
  await page.fill('#f-phone', '');
  await expect(page.locator('#phone-cr')).toBeHidden();
  await page.fill('#f-phone', '11999999999');
  await expect(page.locator('#phone-cr')).toBeVisible();
});

test('seção de certificações aceita multiline', async ({ page }) => {
  await page.fill('#f-certs', 'Cert 1\nCert 2\nCert 3');
  const items = page.locator('#p-certs-list li');
  await expect(items).toHaveCount(3);
  await expect(items.nth(0)).toContainText('Cert 1');
});

test('seção de idiomas parseia formato Nome · Nível', async ({ page }) => {
  await page.fill('#f-langs', 'Inglês · Avançado\nFrancês · Básico');
  const items = page.locator('#p-langs li');
  await expect(items).toHaveCount(2);
  await expect(items.nth(0).locator('.cv-lang-name')).toHaveText('Inglês');
  await expect(items.nth(0).locator('.cv-lang-level')).toHaveText('Avançado');
});
