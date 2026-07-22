'use strict';

const I18N = {
  pt: {
    brand_eye: 'CV Generator',
    brand_title: 'Editor de Currículo Profissional',
    brand_sub: 'Edite os campos à esquerda e veja a pré-visualização em tempo real. Use os botões abaixo para gerar PDF ou exportar seus dados.',
    btn_clear: 'Limpar Tudo',
    btn_reset: 'Restaurar',
    btn_import: 'Importar JSON',
    btn_export: 'Exportar JSON',
    btn_pdf: 'Download PDF',
    import_error: 'Erro ao importar arquivo. Verifique se é um JSON válido.',
    import_success: 'Dados importados com sucesso!',
    panel_edit_title: 'Campos Editáveis',
    panel_edit_sub: 'Edite seu currículo em tempo real',
    badge_live: 'Ao Vivo',
    toggles_title: 'Seções Visíveis no PDF',
    toggle_contact: 'Contato',
    toggle_stack: 'Stack',
    toggle_experience: 'Experiência',
    toggle_education: 'Formação',
    toggle_skills: 'Habilidades Técnicas',
    toggle_languages: 'Idiomas',
    toggle_certs: 'Certificações',
    toggle_highlights: 'Destaques',
    toggle_projects: 'Projetos',
    sec_personal: 'Informações Pessoais',
    sec_contact: 'Contato',
    sec_stack: 'Stack de Tecnologias',
    sec_experience: 'Experiência Profissional',
    sec_education: 'Formação',
    sec_skills: 'Habilidades Técnicas',
    sec_languages: 'Idiomas',
    sec_certs: 'Certificações e Cursos',
    sec_highlights: 'Destaques',
    sec_projects: 'Projetos',
    lbl_name: 'Nome Completo',
    lbl_role: 'Profissão / Título',
    lbl_summary: 'Resumo Profissional (1-2 linhas)',
    lbl_email: 'E-mail',
    lbl_phone: 'Telefone (opcional)',
    lbl_location: 'Localização',
    lbl_stack: 'Tecnologias (separadas por vírgula)',
    help_stack: 'Separe com vírgulas. Tecnologias conhecidas aparecem como destaque',
    lbl_company1_name: 'Empresa 1 - Nome',
    lbl_company1_meta: 'Empresa 1 - Local e Tipo',
    lbl_c1_title: 'Cargo 1 (mais recente)',
    lbl_c1_date: 'Datas do Cargo 1',
    lbl_c1_bullets: 'Realizações do Cargo 1 (uma por linha)',
    lbl_c2_title: 'Cargo 2 (anterior)',
    lbl_c2_company: 'Empresa do Cargo 2',
    lbl_c2_meta: 'Cargo 2 - Local e Tipo',
    lbl_c2_date: 'Datas do Cargo 2',
    lbl_c2_bullets: 'Realizações do Cargo 2 (uma por linha)',
    lbl_c3_title: 'Empresa/cargo anterior (opcional)',
    lbl_c3_company: 'Nome da empresa | local',
    lbl_c3_date: 'Datas do cargo anterior',
    lbl_c3_bullets: 'Realizações do cargo anterior',
    lbl_edu_title: 'Curso/Certificação',
    lbl_edu_meta: 'Instituição',
    lbl_edu_desc: 'Descrição',
    lbl_langs: 'Idiomas (formato: "Nome · Nível", um por linha)',
    help_langs: 'Formato: "Português · Nativo" — cada um em uma linha',
    help_proj_tech: 'Separe com vírgulas',
    lbl_certs: 'Certificações (uma por linha)',
    help_certs: 'Use uma linha para cada certificado ou curso relevante',
    lbl_highlights: 'Destaques Principais (um por linha)',
    lbl_proj_desc: 'Descrição',
    lbl_proj_link: 'Link (URL)',
    lbl_proj_tech: 'Tecnologias',
    lbl_proj_title: 'Título do Projeto',
    panel_preview_title: 'Pré-visualização do CV',
    panel_preview_sub: 'Pré-visualização em tempo real do PDF',
    badge_a4: 'A4 Pronto',
    cv_email: 'E-mail',
    cv_phone: 'Tel',
    cv_location: 'Localização',
    cv_skills: 'Habilidades Técnicas',
    cv_languages: 'Idiomas',
    cv_highlights: 'Destaques',
    cv_projects: 'Projetos',
    cv_experience: 'Experiência',
    cv_education: 'Formação',
    cv_certs: 'Certificações e Cursos',
    lbl_linkedin: 'LinkedIn (usuário)',
    lbl_github: 'GitHub (usuário)',
    lbl_link1_label: 'Link Extra 1 - Label',
    lbl_link1_url: 'Link Extra 1 - URL',
    lbl_link2_label: 'Link Extra 2 - Label',
    lbl_link2_url: 'Link Extra 2 - URL',
    lbl_sk1_label: 'Categoria 1 - Label',
    lbl_sk1_skills: 'Categoria 1 - Habilidades',
    lbl_sk2_label: 'Categoria 2 - Label',
    lbl_sk2_skills: 'Categoria 2 - Habilidades',
    lbl_sk3_label: 'Categoria 3 - Label',
    lbl_sk3_skills: 'Categoria 3 - Habilidades',
    lbl_sk4_label: 'Categoria 4 - Label',
    lbl_sk4_skills: 'Categoria 4 - Habilidades',
    cv_linkedin: 'LinkedIn',
    cv_github: 'GitHub',
    confirm_clear: 'Limpar todos os campos? Essa ação não pode ser desfeita.',
    confirm_reset: 'Tem certeza que deseja restaurar todos os valores padrão?',
    popup_blocked: 'Pop-up bloqueado. Permita pop-ups para gerar o PDF.'
  },
  en: {
    brand_eye: 'CV Generator',
    brand_title: 'Professional Resume Editor',
    brand_sub: 'Edit the fields on the left and see a real-time preview. Use the buttons below to generate a PDF or export your data.',
    btn_clear: 'Clear All',
    btn_reset: 'Reset',
    btn_import: 'Import JSON',
    btn_export: 'Export JSON',
    btn_pdf: 'Download PDF',
    import_error: 'Error importing file. Please check if it is valid JSON.',
    import_success: 'Data imported successfully!',
    panel_edit_title: 'Editable Fields',
    panel_edit_sub: 'Edit your resume in real-time',
    badge_live: 'Live Preview',
    lbl_linkedin: 'LinkedIn (user)',
    lbl_github: 'GitHub (user)',
    lbl_link1_label: 'Extra Link 1 - Label',
    lbl_link1_url: 'Extra Link 1 - URL',
    lbl_link2_label: 'Extra Link 2 - Label',
    lbl_link2_url: 'Extra Link 2 - URL',
    lbl_sk1_label: 'Category 1 - Label',
    lbl_sk1_skills: 'Category 1 - Skills',
    lbl_sk2_label: 'Category 2 - Label',
    lbl_sk2_skills: 'Category 2 - Skills',
    lbl_sk3_label: 'Category 3 - Label',
    lbl_sk3_skills: 'Category 3 - Skills',
    lbl_sk4_label: 'Category 4 - Label',
    lbl_sk4_skills: 'Category 4 - Skills',
    cv_linkedin: 'LinkedIn',
    cv_github: 'GitHub',
    toggles_title: 'Visible Sections in PDF',
    toggle_contact: 'Contact',
    toggle_stack: 'Stack',
    toggle_experience: 'Experience',
    toggle_education: 'Education',
    toggle_skills: 'Technical Skills',
    toggle_languages: 'Languages',
    toggle_certs: 'Certifications',
    toggle_highlights: 'Highlights',
    toggle_projects: 'Projects',
    sec_personal: 'Personal Information',
    sec_contact: 'Contact',
    sec_stack: 'Technology Stack',
    sec_experience: 'Professional Experience',
    sec_education: 'Education',
    sec_skills: 'Technical Skills',
    sec_languages: 'Languages',
    sec_certs: 'Certifications & Courses',
    sec_highlights: 'Highlights',
    sec_projects: 'Projects',
    lbl_name: 'Full Name',
    lbl_role: 'Profession / Title',
    lbl_summary: 'Professional Summary (1-2 lines)',
    lbl_email: 'Email',
    lbl_phone: 'Phone (optional)',
    lbl_location: 'Location',
    lbl_stack: 'Technologies (comma-separated)',
    help_stack: 'Separate with commas. Known technologies are highlighted',
    lbl_company1_name: 'Company 1 - Name',
    lbl_company1_meta: 'Company 1 - Location & Type',
    lbl_c1_title: 'Position 1 (most recent)',
    lbl_c1_date: 'Position 1 dates',
    lbl_c1_bullets: 'Position 1 accomplishments (one per line)',
    lbl_c2_title: 'Position 2 (previous)',
    lbl_c2_company: 'Position 2 Company',
    lbl_c2_meta: 'Position 2 - Location & Type',
    lbl_c2_date: 'Position 2 dates',
    lbl_c2_bullets: 'Position 2 accomplishments (one per line)',
    lbl_c3_title: 'Previous company/position (optional)',
    lbl_c3_company: 'Company name | location',
    lbl_c3_date: 'Previous position dates',
    lbl_c3_bullets: 'Previous position accomplishments',
    lbl_edu_title: 'Course/Certification',
    lbl_edu_meta: 'Institution',
    lbl_edu_desc: 'Description',
    lbl_langs: 'Languages (format: "Name · Level", one per line)',
    help_langs: 'Format: "Portuguese · Native" — each on a line',
    help_proj_tech: 'Separate with commas',
    lbl_certs: 'Certifications (one per line)',
    help_certs: 'Use one line for each certificate or relevant course',
    lbl_highlights: 'Key Highlights (one per line)',
    lbl_proj_desc: 'Description',
    lbl_proj_link: 'Link (URL)',
    lbl_proj_tech: 'Technologies',
    lbl_proj_title: 'Project Title',
    panel_preview_title: 'CV Preview',
    panel_preview_sub: 'Real-time PDF preview',
    badge_a4: 'A4 Format',
    cv_email: 'Email',
    cv_phone: 'Phone',
    cv_location: 'Location',
    cv_skills: 'Technical Skills',
    cv_languages: 'Languages',
    cv_highlights: 'Highlights',
    cv_projects: 'Projects',
    cv_experience: 'Experience',
    cv_education: 'Education',
    cv_certs: 'Certifications & Courses',
    confirm_clear: 'Clear all fields? This cannot be undone.',
    confirm_reset: 'Are you sure you want to reset all values to default?',
    popup_blocked: 'Pop-up blocked. Allow pop-ups to generate the PDF.'
  },
  es: {
    brand_eye: 'CV Generator',
    brand_title: 'Editor de Currículum Profesional',
    brand_sub: 'Edite los campos a la izquierda y vea una vista previa en tiempo real. Use los botones abajo para generar un PDF o exportar sus datos.',
    btn_clear: 'Limpiar Todo',
    btn_reset: 'Restaurar',
    btn_import: 'Importar JSON',
    btn_export: 'Exportar JSON',
    btn_pdf: 'Descargar PDF',
    import_error: 'Error al importar archivo. Verifique si es un JSON válido.',
    import_success: '¡Datos importados con éxito!',
    panel_edit_title: 'Campos Editables',
    panel_edit_sub: 'Edite su currículum en tiempo real',
    badge_live: 'En Vivo',
    toggles_title: 'Secciones Visibles en el PDF',
    toggle_contact: 'Contacto',
    toggle_stack: 'Stack',
    toggle_experience: 'Experiencia',
    toggle_education: 'Formación',
    toggle_skills: 'Habilidades Técnicas',
    toggle_languages: 'Idiomas',
    toggle_certs: 'Certificaciones',
    toggle_highlights: 'Destacados',
    toggle_projects: 'Proyectos',
    sec_personal: 'Información Personal',
    sec_contact: 'Contacto',
    sec_stack: 'Stack de Tecnologías',
    sec_experience: 'Experiencia Profesional',
    sec_education: 'Formación',
    sec_skills: 'Habilidades Técnicas',
    sec_languages: 'Idiomas',
    sec_certs: 'Certificaciones y Cursos',
    sec_highlights: 'Destacados',
    sec_projects: 'Proyectos',
    lbl_name: 'Nombre Completo',
    lbl_role: 'Profesión / Título',
    lbl_summary: 'Resumen Profesional (1-2 líneas)',
    lbl_email: 'Correo Electrónico',
    lbl_phone: 'Teléfono (opcional)',
    lbl_location: 'Ubicación',
    lbl_stack: 'Tecnologías (separadas por coma)',
    help_stack: 'Separe con comas. Las tecnologías conocidas aparecen como destacadas',
    lbl_company1_name: 'Empresa 1 - Nombre',
    lbl_company1_meta: 'Empresa 1 - Ubicación y Tipo',
    lbl_c1_title: 'Cargo 1 (más reciente)',
    lbl_c1_date: 'Fechas del Cargo 1',
    lbl_c1_bullets: 'Logros del Cargo 1 (uno por línea)',
    lbl_c2_title: 'Cargo 2 (anterior)',
    lbl_c2_company: 'Empresa del Cargo 2',
    lbl_c2_meta: 'Cargo 2 - Ubicación y Tipo',
    lbl_c2_date: 'Fechas del Cargo 2',
    lbl_c2_bullets: 'Logros del Cargo 2 (uno por línea)',
    lbl_c3_title: 'Empresa/cargo anterior (opcional)',
    lbl_c3_company: 'Nombre de la empresa | ubicación',
    lbl_c3_date: 'Fechas del cargo anterior',
    lbl_c3_bullets: 'Logros del cargo anterior',
    lbl_edu_title: 'Curso/Certificación',
    lbl_edu_meta: 'Institución',
    lbl_edu_desc: 'Descripción',
    lbl_langs: 'Idiomas (formato: "Nombre · Nivel", uno por línea)',
    help_langs: 'Formato: "Portugués · Nativo" — cada uno en una línea',
    help_proj_tech: 'Separe con comas',
    lbl_certs: 'Certificaciones (una por línea)',
    help_certs: 'Use una línea para cada certificado o curso relevante',
    lbl_highlights: 'Destacados Principales (uno por línea)',
    lbl_proj_desc: 'Descripción',
    lbl_proj_link: 'Enlace (URL)',
    lbl_proj_tech: 'Tecnologías',
    lbl_proj_title: 'Título del Proyecto',
    panel_preview_title: 'Vista Previa del CV',
    panel_preview_sub: 'Vista previa en tiempo real del PDF',
    badge_a4: 'Formato A4',
    cv_email: 'Correo',
    cv_phone: 'Tel',
    cv_location: 'Ubicación',
    cv_skills: 'Habilidades Técnicas',
    cv_languages: 'Idiomas',
    cv_highlights: 'Destacados',
    cv_projects: 'Proyectos',
    cv_experience: 'Experiencia',
    cv_education: 'Formación',
    cv_certs: 'Certificaciones y Cursos',
    lbl_linkedin: 'LinkedIn (usuario)',
    lbl_github: 'GitHub (usuario)',
    lbl_link1_label: 'Enlace Extra 1 - Etiqueta',
    lbl_link1_url: 'Enlace Extra 1 - URL',
    lbl_link2_label: 'Enlace Extra 2 - Etiqueta',
    lbl_link2_url: 'Enlace Extra 2 - URL',
    lbl_sk1_label: 'Categoría 1 - Etiqueta',
    lbl_sk1_skills: 'Categoría 1 - Habilidades',
    lbl_sk2_label: 'Categoría 2 - Etiqueta',
    lbl_sk2_skills: 'Categoría 2 - Habilidades',
    lbl_sk3_label: 'Categoría 3 - Etiqueta',
    lbl_sk3_skills: 'Categoría 3 - Habilidades',
    lbl_sk4_label: 'Categoría 4 - Etiqueta',
    lbl_sk4_skills: 'Categoría 4 - Habilidades',
    cv_linkedin: 'LinkedIn',
    cv_github: 'GitHub',
    confirm_clear: '¿Limpiar todos los campos? Esta acción no se puede deshacer.',
    confirm_reset: '¿Está seguro de que desea restaurar todos los valores predeterminados?',
    popup_blocked: 'Pop-up bloqueado. Permita pop-ups para generar el PDF.'
  }
};

var THEMES = ['indigo', 'emerald', 'rose', 'amber', 'slate'];
var currentTheme = 'indigo';

function setTheme(theme) {
  if (THEMES.indexOf(theme) === -1) return;
  currentTheme = theme;
  localStorage.setItem('cv-theme', theme);
  document.getElementById('paper').setAttribute('data-theme', theme);
  var sel = document.getElementById('theme-select');
  if (sel) sel.value = theme;
}

let currentLang = 'pt';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.pt[key]) || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang === 'es' ? 'es' : 'en';
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('cv-lang', lang);
  applyI18n();
}

const SECTION_MAP = {
  'toggle-contato': '#p-contato',
  'toggle-stack': '#p-stack',
  'toggle-exp': '#p-exp',
  'toggle-edu': '#p-edu',
  'toggle-skills': '#p-skills',
  'toggle-langs': '#p-langs-section',
  'toggle-certs': '#p-certs',
  'toggle-proj': '#p-proj',
  'toggle-highlights': '#p-highlights'
};

const updateConfig = {
  'f-name': { type: 'name' },
  'f-role': { type: 'role', wrapper: 'p-role' },
  'f-stack': { type: 'stack', wrapper: 'p-stack' },
  'f-summary': { type: 'text', target: 'p-summary', wrapper: 'p-summary' },
  'f-email': { type: 'email', wrapper: 'email-cr' },
  'f-phone': { type: 'phone', wrapper: 'phone-cr' },
  'f-linkedin': { type: 'linkedin', link: 'p-linkedin-a', span: 'p-linkedin', wrapper: 'linkedin-cr' },
  'f-github': { type: 'github', link: 'p-github-a', span: 'p-github', wrapper: 'github-cr' },
  'f-link1-label': { type: 'label', target: 'p-link1-label' },
  'f-link1': { type: 'customlink', link: 'p-link1-a', span: 'p-link1', wrapper: 'link1-cr' },
  'f-link2-label': { type: 'label', target: 'p-link2-label' },
  'f-link2': { type: 'customlink', link: 'p-link2-a', span: 'p-link2', wrapper: 'link2-cr' },
  'f-location': { type: 'text', target: 'p-location', wrapper: 'location-cr' },
  'f-company1-name': { type: 'text', target: 'p-company1-name' },
  'f-company1-meta': { type: 'text', target: 'p-company1-meta' },
  'f-c1-title': { type: 'text', target: 'p-c1-title', wrapper: 'exp1-block' },
  'f-c1-date': { type: 'text', target: 'p-c1-date' },
  'f-c1-bullets': { type: 'bullets', target: 'p-c1-bullets' },
  'f-c2-title': { type: 'text', target: 'p-c2-title', wrapper: 'exp2-block' },
  'f-c2-company': { type: 'text', target: 'p-c2-company' },
  'f-c2-meta': { type: 'text', target: 'p-c2-meta' },
  'f-c2-date': { type: 'text', target: 'p-c2-date' },
  'f-c2-bullets': { type: 'bullets', target: 'p-c2-bullets' },
  'f-c3-title': { type: 'text', target: 'p-c3-title', wrapper: 'exp3-block' },
  'f-c3-company': { type: 'text', target: 'p-c3-company' },
  'f-c3-date': { type: 'text', target: 'p-c3-date' },
  'f-c3-bullets': { type: 'bullets', target: 'p-c3-bullets' },
  'f-edu-title': { type: 'text', target: 'p-edu-title' },
  'f-edu-meta': { type: 'text', target: 'p-edu-meta' },
  'f-edu-desc': { type: 'text', target: 'p-edu-desc' },
  'f-sk1-label': { type: 'label', target: 'p-sk1-label' },
  'f-sk1': { type: 'tags', target: 'p-sk1', wrappers: ['sk1-group', 'sk1-spacer'] },
  'f-sk2-label': { type: 'label', target: 'p-sk2-label' },
  'f-sk2': { type: 'tags', target: 'p-sk2', wrappers: ['sk2-group', 'sk2-spacer'] },
  'f-sk3-label': { type: 'label', target: 'p-sk3-label' },
  'f-sk3': { type: 'tags', target: 'p-sk3', wrappers: ['sk3-group', 'sk3-spacer'] },
  'f-sk4-label': { type: 'label', target: 'p-sk4-label' },
  'f-sk4': { type: 'tags', target: 'p-sk4', wrappers: ['sk4-group'] },
  'f-langs': { type: 'langs', target: 'p-langs' },
  'f-certs': { type: 'certs', target: 'p-certs-list' },
  'f-highlights': { type: 'highlights', target: 'p-highlights-list' },
  'f-proj1-title': { type: 'text', target: 'p-proj1-title', wrapper: 'p-proj1' },
  'f-proj1-desc': { type: 'text', target: 'p-proj1-desc' },
  'f-proj1-link': { type: 'projlink', target: 'p-proj1-link' },
  'f-proj1-tech': { type: 'tags', target: 'p-proj1-tech' },
  'f-proj2-title': { type: 'text', target: 'p-proj2-title', wrapper: 'p-proj2' },
  'f-proj2-desc': { type: 'text', target: 'p-proj2-desc' },
  'f-proj2-link': { type: 'projlink', target: 'p-proj2-link' },
  'f-proj2-tech': { type: 'tags', target: 'p-proj2-tech' },
  'f-proj3-title': { type: 'text', target: 'p-proj3-title', wrapper: 'p-proj3' },
  'f-proj3-desc': { type: 'text', target: 'p-proj3-desc' },
  'f-proj3-link': { type: 'projlink', target: 'p-proj3-link' },
  'f-proj3-tech': { type: 'tags', target: 'p-proj3-tech' }
};

const HOT_TECHNOLOGIES = ['Python', 'Flask', 'FastAPI', 'Node', 'Go', 'Rust', 'TypeScript', 'Java', 'Kotlin', 'React', 'Vue', 'GraphQL', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka', 'Terraform', 'Ansible', 'CI/CD', 'GitHub Actions', 'Playwright', 'Cypress'];

let originalValues = {};
let saveDraftTimeout;

function debouncedSaveDraft() {
  clearTimeout(saveDraftTimeout);
  saveDraftTimeout = setTimeout(function() { saveDraft(); }, 500);
}

function parseLines(str) {
  return String(str).split(/\n+/).map(function(l) { return l.trim(); }).filter(Boolean);
}

function parseTags(str) {
  return String(str).split(/,|\n/).map(function(s) { return s.trim(); }).filter(Boolean);
}

function createEl(tag, className, text) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

var fieldHandlers = {
  name: function(config, value) {
    var parts = value.split(/\s+/);
    var first = parts[0] || '';
    var rest = parts.slice(1).join(' ');
    var el = document.getElementById('p-name-display');
    if (el) {
      el.textContent = '';
      el.appendChild(document.createTextNode(first));
      if (rest) {
        el.appendChild(document.createTextNode(' '));
        var em = document.createElement('em');
        em.textContent = rest;
        el.appendChild(em);
      }
    }
  },
  role: function(config, value) {
    var el = document.getElementById('p-role');
    if (el) {
      el.textContent = '';
      var segments = value.split('·');
      segments.forEach(function(s, i) {
        s = s.trim();
        if (i > 0) el.appendChild(document.createTextNode(' · '));
        if (i === segments.length - 1 && segments.length > 1) {
          var strong = document.createElement('strong');
          strong.textContent = s;
          el.appendChild(strong);
        } else {
          el.appendChild(document.createTextNode(s));
        }
      });
    }
  },
  stack: function(config, value) {
    var el = document.getElementById('p-stack');
    if (el) {
      el.textContent = '';
      parseTags(value).forEach(function(tag) {
        var isHot = HOT_TECHNOLOGIES.indexOf(tag) !== -1;
        el.appendChild(createEl('span', 'cv-stack-chip' + (isHot ? ' hot' : ''), tag));
      });
    }
  },
  text: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) el.textContent = value;
  },
  email: function(config, value) {
    var linkEl = document.getElementById('p-email-a');
    var spanEl = document.getElementById('p-email');
    if (linkEl) linkEl.href = 'mailto:' + value;
    if (spanEl) spanEl.textContent = value;
  },
  phone: function(config, value) {
    var el = document.getElementById('p-phone');
    if (el) el.textContent = value;
  },
  linkedin: function(config, value) {
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = value ? 'https://linkedin.com/in/' + value : '';
    if (spanEl) spanEl.textContent = value;
  },
  github: function(config, value) {
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = value ? 'https://github.com/' + value : '';
    if (spanEl) spanEl.textContent = value;
  },
  label: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) el.textContent = value;
  },
  customlink: function(config, value) {
    var href = value;
    if (href && !/^https?:\/\//i.test(href)) {
      href = 'https://' + value;
    }
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = href || '';
    if (spanEl) spanEl.textContent = value.replace(/^https?:\/\//i, '');
  },
  bullets: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.textContent = line;
        el.appendChild(li);
      });
    }
  },
  tags: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseTags(value).forEach(function(tag) {
        el.appendChild(createEl('span', 'cv-tag', tag));
      });
    }
  },
  langs: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var parts = line.split('·').map(function(p) { return p.trim(); });
        var li = document.createElement('li');
        li.appendChild(createEl('span', 'cv-lang-name', parts[0] || line));
        if (parts[1]) li.appendChild(createEl('span', 'cv-lang-level', parts[1]));
        el.appendChild(li);
      });
    }
  },
  certs: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.appendChild(createEl('span', 'cv-lang-name', line));
        el.appendChild(li);
      });
    }
  },
  highlights: function(config, value) {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.appendChild(createEl('span', 'cv-highlight-text', line));
        el.appendChild(li);
      });
    }
  },
  projlink: function(config, value) {
    var el = document.getElementById(config.target);
    if (!el) return;
    if (value) {
      var href = value;
      if (!/^https?:\/\//i.test(href)) href = 'https://' + href;
      el.href = href;
      el.textContent = value.replace(/^https?:\/\//i, '').replace(/\/$/, '');
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  }
};

function updateField(fieldId) {
  var config = updateConfig[fieldId];
  if (!config) return;
  var input = document.getElementById(fieldId);
  if (!input) return;
  var value = input.value.trim();
  var handler = fieldHandlers[config.type];
  if (handler) handler(config, value);
  if (config.wrapper) {
    var wrapperEl = document.getElementById(config.wrapper);
    if (wrapperEl) wrapperEl.style.display = value ? '' : 'none';
  }
  if (config.wrappers) {
    var display = value ? '' : 'none';
    config.wrappers.forEach(function(id) {
      var w = document.getElementById(id);
      if (w) w.style.display = display;
    });
  }
}

function saveDraft() {
  var data = {};
  Object.keys(updateConfig).forEach(function(fieldId) {
    var el = document.getElementById(fieldId);
    if (el) data[fieldId] = el.value;
  });
  try { localStorage.setItem('cv-draft', JSON.stringify(data)); } catch (e) {}
}

function loadDraft() {
  var draft = localStorage.getItem('cv-draft');
  if (draft) {
    try {
      var data = JSON.parse(draft);
      Object.keys(data).forEach(function(fieldId) {
        var el = document.getElementById(fieldId);
        if (el) {
          el.value = data[fieldId];
          updateField(fieldId);
        }
      });
    } catch (e) {
      localStorage.removeItem('cv-draft');
    }
  }
}

function saveSectionPreferences() {
  var prefs = {};
  document.querySelectorAll('.section-toggle').forEach(function(toggle) {
    prefs[toggle.id] = toggle.checked;
  });
  try { localStorage.setItem('cv-section-prefs', JSON.stringify(prefs)); } catch (e) {}
}

function loadSectionPreferences() {
  var prefs = localStorage.getItem('cv-section-prefs');
  if (prefs) {
    try {
      var data = JSON.parse(prefs);
      Object.keys(data).forEach(function(toggleId) {
        var toggle = document.getElementById(toggleId);
        if (toggle) toggle.checked = data[toggleId];
      });
    } catch (e) {}
  }
}

function updatePreviewVisibility() {
  var paper = document.getElementById('paper');
  if (!paper) return;

  Object.entries(SECTION_MAP).forEach(function(entry) {
    var toggleId = entry[0];
    var sectionSelector = entry[1];
    var toggle = document.getElementById(toggleId);
    var section = paper.querySelector(sectionSelector);
    if (toggle && section) {
      section.style.display = toggle.checked ? '' : 'none';
    }
  });
}

async function downloadPDF() {
  var nameInput = document.getElementById('f-name');
  var fileName = nameInput ? nameInput.value.trim().replace(/\s+/g, '-') : 'Resume';

  var paperEl = document.getElementById('paper');
  if (!paperEl) return;

  var paperClone = paperEl.cloneNode(true);

  paperClone.removeAttribute('style');
  paperClone.querySelectorAll('[style]').forEach(function(el) {
    el.removeAttribute('style');
  });

  Object.keys(updateConfig).forEach(function(fieldId) {
    var cfg = updateConfig[fieldId];
    if (!cfg.wrapper && !cfg.wrappers) return;
    var input = document.getElementById(fieldId);
    var value = input ? input.value.trim() : '';
    var display = value ? '' : 'none';
    if (cfg.wrapper) {
      var w = paperClone.querySelector('#' + cfg.wrapper);
      if (w) w.style.display = display;
    }
    if (cfg.wrappers) {
      cfg.wrappers.forEach(function(id) {
        var w = paperClone.querySelector('#' + id);
        if (w) w.style.display = display;
      });
    }
  });

  Object.entries(SECTION_MAP).forEach(function(entry) {
    var toggleId = entry[0];
    var sectionSelector = entry[1];
    var toggle = document.getElementById(toggleId);
    if (toggle && !toggle.checked) {
      var section = paperClone.querySelector(sectionSelector);
      if (section) section.remove();
    }
  });

  saveSectionPreferences();

  var fontImport = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');";

  var allThemesFallback = ':root{--cv-accent:#4f46e5;--cv-accent-dark:#3730a3;--cv-accent-soft:#eef2ff;--cv-accent-mid:rgba(79,70,229,0.16);--cv-accent-border:#e0e7ff;--cv-link:#a5b4fc;--cv-tag-color:#3730a3;--cv-tag-border:rgba(79,70,229,0.14)}[data-theme=emerald]{--cv-accent:#059669;--cv-accent-dark:#047857;--cv-accent-soft:#d1fae5;--cv-accent-mid:rgba(5,150,105,0.16);--cv-accent-border:#a7f3d0;--cv-link:#6ee7b7;--cv-tag-color:#047857;--cv-tag-border:rgba(5,150,105,0.14)}[data-theme=rose]{--cv-accent:#e11d48;--cv-accent-dark:#be123c;--cv-accent-soft:#ffe4e6;--cv-accent-mid:rgba(225,29,72,0.16);--cv-accent-border:#fecdd3;--cv-link:#fda4af;--cv-tag-color:#be123c;--cv-tag-border:rgba(225,29,72,0.14)}[data-theme=amber]{--cv-accent:#d97706;--cv-accent-dark:#b45309;--cv-accent-soft:#fef3c7;--cv-accent-mid:rgba(217,119,6,0.16);--cv-accent-border:#fde68a;--cv-link:#fcd34d;--cv-tag-color:#b45309;--cv-tag-border:rgba(217,119,6,0.14)}[data-theme=slate]{--cv-accent:#475569;--cv-accent-dark:#334155;--cv-accent-soft:#f1f5f9;--cv-accent-mid:rgba(71,85,105,0.16);--cv-accent-border:#cbd5e1;--cv-link:#94a3b8;--cv-tag-color:#334155;--cv-tag-border:rgba(71,85,105,0.14)}';

  var stylesCss = '';
  var printCss = '';
  try {
    var linkEl = document.querySelector('link[rel="stylesheet"][href*="styles"]');
    var resp = await fetch(linkEl ? linkEl.href : 'assets/css/styles.css');
    if (resp.ok) stylesCss = await resp.text();
    var printLinkEl = document.querySelector('link[rel="stylesheet"][href*="print"]');
    var resp2 = await fetch(printLinkEl ? printLinkEl.href : 'assets/css/print.css');
    if (resp2.ok) printCss = await resp2.text();
  } catch (e) {}
  if (!stylesCss) stylesCss = allThemesFallback;
  if (!printCss) printCss = '@page{size:A4 portrait;margin:0}*,*::before,*::after{box-sizing:border-box!important;margin:0!important;padding:0!important}html,body{background:#fff!important;width:210mm!important;height:auto!important;font-size:9pt!important;line-height:1.55!important;font-family:"Plus Jakarta Sans",system-ui,sans-serif!important}.paper{width:210mm!important;max-width:210mm!important;margin:0!important;padding:0!important;border-radius:0!important;box-shadow:none!important}.cv-head{padding:14px 16px 0 16px!important;background:linear-gradient(135deg,#0b1120 0,#131b2e 60%,#1a1f3d 100%)!important}.cv-body{display:block!important}.cv-side{float:left!important;width:33.333%!important;background:#fafbfd!important;padding:14px!important;border-right:1px solid #ebeef3!important}.cv-main{display:block!important;margin:0 0 0 33.333%!important;padding:12px 16px 14px!important;overflow:hidden!important}.cv-sec,.cv-edu,.cv-exp-standalone,.cv-proj{break-inside:avoid!important;page-break-inside:avoid!important}.cv-proj{padding:8px 10px!important;background:#f8f9fb!important;border:1px solid #ebeef3!important;border-radius:6px!important;margin:0 0 8px 0!important}.cv-proj-head{display:flex!important;justify-content:space-between!important;gap:8px!important;margin:0 0 4px 0!important}.cv-proj-title{font-size:8pt!important;font-weight:780!important;color:#0b1120!important}.cv-proj-link{font-size:6.5pt!important;color:#a5b4fc!important;word-break:break-all!important;white-space:normal!important;overflow:visible!important}.cv-proj-desc{font-size:7.2pt!important;color:#4b5563!important;line-height:1.5!important;margin:0 0 6px 0!important}.cv-proj .cv-tags{gap:3px!important}.cv-proj .cv-tag{font-size:6.2pt!important;padding:2px 6px!important}';
  var css = fontImport + '\n' + stylesCss + '\n' + printCss;

  var html = '<!DOCTYPE html><html lang="' + currentLang + '"><head><meta charset="UTF-8"><meta name="viewport" content="width=1200"><title>' + fileName + ' — CV</title><style>' + css + '</style></head><body>' + paperClone.outerHTML + '</body></html>';

  var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var win = window.open(url, '_blank');
  if (win) {
    var revoked = false;
    var revokeOnce = function() {
      if (!revoked) { revoked = true; URL.revokeObjectURL(url); }
    };
    win.addEventListener('load', function() {
      setTimeout(function() {
        try { win.focus(); } catch (e) {}
        win.print();
        revokeOnce();
      }, 800);
    });
    setTimeout(revokeOnce, 10000);
  } else {
    URL.revokeObjectURL(url);
    alert(t('popup_blocked'));
  }
}

function captureOriginalValues() {
  Object.keys(updateConfig).forEach(function(fieldId) {
    var el = document.getElementById(fieldId);
    if (el) originalValues[fieldId] = el.value;
  });
}



function init() {
  var savedLang = localStorage.getItem('cv-lang');
  if (savedLang && I18N[savedLang]) {
    currentLang = savedLang;
  }

  var langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function() { setLang(langSelect.value); });
  }

  var savedTheme = localStorage.getItem('cv-theme');
  if (savedTheme && THEMES.indexOf(savedTheme) !== -1) {
    currentTheme = savedTheme;
  }

  var themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.value = currentTheme;
    themeSelect.addEventListener('change', function() { setTheme(themeSelect.value); });
  }
  setTheme(currentTheme);

  applyI18n();
  captureOriginalValues();
  loadDraft();
  loadSectionPreferences();
  updatePreviewVisibility();

  Object.keys(updateConfig).forEach(function(fieldId) {
    var el = document.getElementById(fieldId);
    if (el) {
      el.addEventListener('input', function() {
        updateField(fieldId);
        debouncedSaveDraft();
      });
      updateField(fieldId);
    }
  });

  document.querySelectorAll('.section-toggle').forEach(function(toggle) {
    toggle.addEventListener('change', function() {
      saveSectionPreferences();
      updatePreviewVisibility();
    });
  });

  var clearBtn = document.getElementById('clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      if (confirm(t('confirm_clear'))) {
        Object.keys(updateConfig).forEach(function(fieldId) {
          var el = document.getElementById(fieldId);
          if (el) el.value = '';
        });
        Object.keys(updateConfig).forEach(function(fieldId) { updateField(fieldId); });
        debouncedSaveDraft();
      }
    });
  }

  var resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      if (confirm(t('confirm_reset'))) {
        localStorage.removeItem('cv-draft');
        localStorage.removeItem('cv-section-prefs');
        Object.keys(updateConfig).forEach(function(fieldId) {
          var el = document.getElementById(fieldId);
          if (el && originalValues[fieldId] !== undefined) {
            el.value = originalValues[fieldId];
            updateField(fieldId);
          }
        });
      }
    });
  }

  var importBtn = document.getElementById('import-btn');
  var importFile = document.getElementById('import-file');
  if (importBtn && importFile) {
    importBtn.addEventListener('click', function() {
      importFile.value = '';
      importFile.click();
    });
    importFile.addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(evt) {
        try {
          var data = JSON.parse(evt.target.result);
          Object.keys(data).forEach(function(fieldId) {
            var el = document.getElementById(fieldId);
            if (el && updateConfig[fieldId]) {
              el.value = data[fieldId];
              updateField(fieldId);
            }
          });
          debouncedSaveDraft();
          alert(t('import_success'));
        } catch (err) {
          alert(t('import_error'));
        }
      };
      reader.readAsText(file);
      importFile.value = '';
    });
  }

  var exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      var data = {};
      Object.keys(updateConfig).forEach(function(fieldId) {
        var el = document.getElementById(fieldId);
        if (el) data[fieldId] = el.value;
      });
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'cv-data.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  var downloadBtn = document.getElementById('download-pdf-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadPDF);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
