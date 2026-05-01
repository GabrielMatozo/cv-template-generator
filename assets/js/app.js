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
    toggle_experience: 'Experiência',
    toggle_education: 'Formação',
    toggle_skills: 'Habilidades Técnicas',
    toggle_languages: 'Idiomas',
    toggle_certs: 'Certificações',
    toggle_highlights: 'Destaques',
    sec_personal: 'Informações Pessoais',
    sec_contact: 'Contato',
    sec_stack: 'Stack de Tecnologias',
    sec_experience: 'Experiência Profissional',
    sec_education: 'Formação',
    sec_skills: 'Habilidades Técnicas',
    sec_languages: 'Idiomas',
    sec_certs: 'Certificações e Cursos',
    sec_highlights: 'Destaques',
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
    lbl_c2_meta: 'Metadados do Cargo 2 (local, tipo)',
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
    lbl_certs: 'Certificações (uma por linha)',
    help_certs: 'Use uma linha para cada certificado ou curso relevante',
    lbl_highlights: 'Destaques Principais (um por linha)',
    panel_preview_title: 'Pré-visualização do CV',
    panel_preview_sub: 'Pré-visualização em tempo real do PDF',
    badge_a4: 'A4 Pronto',
    cv_email: 'E-mail',
    cv_phone: 'Tel',
    cv_location: 'Localização',
    cv_skills: 'Habilidades Técnicas',
    cv_languages: 'Idiomas',
    cv_highlights: 'Destaques',
    cv_experience: 'Experiência',
    cv_education: 'Formação',
    cv_certs: 'Certificações e Cursos',
    confirm_clear: 'Limpar todos os campos? Esta ação não pode ser desfeita.',
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
    import_error: 'Error importing file. Please check if it is a valid JSON.',
    import_success: 'Data imported successfully!',
    panel_edit_title: 'Editable Fields',
    panel_edit_sub: 'Edit your resume in real-time',
    badge_live: 'Live Preview',
    toggles_title: 'Visible Sections in PDF',
    toggle_contact: 'Contact',
    toggle_experience: 'Experience',
    toggle_education: 'Education',
    toggle_skills: 'Technical Skills',
    toggle_languages: 'Languages',
    toggle_certs: 'Certifications',
    toggle_highlights: 'Highlights',
    sec_personal: 'Personal Information',
    sec_contact: 'Contact',
    sec_stack: 'Technology Stack',
    sec_experience: 'Professional Experience',
    sec_education: 'Education',
    sec_skills: 'Technical Skills',
    sec_languages: 'Languages',
    sec_certs: 'Certifications & Courses',
    sec_highlights: 'Highlights',
    lbl_name: 'Full Name',
    lbl_role: 'Profession / Title',
    lbl_summary: 'Professional Summary (1-2 lines)',
    lbl_email: 'Email',
    lbl_phone: 'Phone (optional)',
    lbl_location: 'Location',
    lbl_stack: 'Technologies (comma-separated)',
    help_stack: 'Separate with commas. Known technologies appear as highlighted',
    lbl_company1_name: 'Company 1 - Name',
    lbl_company1_meta: 'Company 1 - Location & Type',
    lbl_c1_title: 'Position 1 (most recent)',
    lbl_c1_date: 'Position 1 dates',
    lbl_c1_bullets: 'Position 1 accomplishments (one per line)',
    lbl_c2_title: 'Position 2 (previous)',
    lbl_c2_company: 'Position 2 Company',
    lbl_c2_meta: 'Position 2 metadata (location, type)',
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
    lbl_certs: 'Certifications (one per line)',
    help_certs: 'Use one line for each certificate or relevant course',
    lbl_highlights: 'Key Highlights (one per line)',
    panel_preview_title: 'CV Preview',
    panel_preview_sub: 'Real-time PDF preview',
    badge_a4: 'A4 Ready',
    cv_email: 'Email',
    cv_phone: 'Phone',
    cv_location: 'Location',
    cv_skills: 'Technical Skills',
    cv_languages: 'Languages',
    cv_highlights: 'Highlights',
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
    toggle_experience: 'Experiencia',
    toggle_education: 'Formación',
    toggle_skills: 'Habilidades Técnicas',
    toggle_languages: 'Idiomas',
    toggle_certs: 'Certificaciones',
    toggle_highlights: 'Destacados',
    sec_personal: 'Información Personal',
    sec_contact: 'Contacto',
    sec_stack: 'Stack de Tecnologías',
    sec_experience: 'Experiencia Profesional',
    sec_education: 'Formación',
    sec_skills: 'Habilidades Técnicas',
    sec_languages: 'Idiomas',
    sec_certs: 'Certificaciones y Cursos',
    sec_highlights: 'Destacados',
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
    lbl_c2_meta: 'Metadatos del Cargo 2 (ubicación, tipo)',
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
    lbl_certs: 'Certificaciones (una por línea)',
    help_certs: 'Use una línea para cada certificado o curso relevante',
    lbl_highlights: 'Destacados Principales (uno por línea)',
    panel_preview_title: 'Vista Previa del CV',
    panel_preview_sub: 'Vista previa en tiempo real del PDF',
    badge_a4: 'A4 Listo',
    cv_email: 'Correo',
    cv_phone: 'Tel',
    cv_location: 'Ubicación',
    cv_skills: 'Habilidades Técnicas',
    cv_languages: 'Idiomas',
    cv_highlights: 'Destacados',
    cv_experience: 'Experiencia',
    cv_education: 'Formación',
    cv_certs: 'Certificaciones y Cursos',
    confirm_clear: '¿Limpiar todos los campos? Esta acción no se puede deshacer.',
    confirm_reset: '¿Está seguro de que desea restaurar todos los valores predeterminados?',
    popup_blocked: 'Pop-up bloqueado. Permita pop-ups para generar el PDF.'
  }
};

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
  'toggle-exp': '#p-exp',
  'toggle-edu': '#p-edu',
  'toggle-skills': '#p-skills',
  'toggle-langs': '#p-langs-section',
  'toggle-certs': '#p-certs',
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
  'f-highlights': { type: 'highlights', target: 'p-highlights-list' }
};

const HOT_TECHNOLOGIES = ['Python', 'Flask', 'FastAPI', 'Node', 'Go', 'Rust', 'TypeScript', 'Java', 'Kotlin', 'React', 'Vue'];

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

function updateField(fieldId) {
  var config = updateConfig[fieldId];
  if (!config) return;

  var input = document.getElementById(fieldId);
  if (!input) return;

  var value = input.value.trim();

  if (config.type === 'name') {
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
  } else if (config.type === 'role') {
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
  } else if (config.type === 'stack') {
    var el = document.getElementById('p-stack');
    if (el) {
      el.textContent = '';
      parseTags(value).forEach(function(tag) {
        var isHot = HOT_TECHNOLOGIES.indexOf(tag) !== -1;
        var chip = createEl('span', 'cv-stack-chip' + (isHot ? ' hot' : ''), tag);
        el.appendChild(chip);
      });
    }
  } else if (config.type === 'text') {
    var el = document.getElementById(config.target);
    if (el) el.textContent = value;
  } else if (config.type === 'email') {
    var linkEl = document.getElementById('p-email-a');
    var spanEl = document.getElementById('p-email');
    if (linkEl) linkEl.href = 'mailto:' + value;
    if (spanEl) spanEl.textContent = value;
  } else if (config.type === 'phone') {
    var el = document.getElementById('p-phone');
    if (el) el.textContent = value;
  } else if (config.type === 'linkedin') {
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = value ? 'https://linkedin.com/in/' + value : '';
    if (spanEl) spanEl.textContent = value;
  } else if (config.type === 'github') {
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = value ? 'https://github.com/' + value : '';
    if (spanEl) spanEl.textContent = value;
  } else if (config.type === 'label') {
    var el = document.getElementById(config.target);
    if (el) el.textContent = value;
  } else if (config.type === 'customlink') {
    var href = value;
    if (href && !/^https?:\/\//i.test(href)) {
      href = 'https://' + value;
    }
    var linkEl = document.getElementById(config.link);
    var spanEl = document.getElementById(config.span);
    if (linkEl) linkEl.href = href || '';
    if (spanEl) spanEl.textContent = value.replace(/^https?:\/\//i, '');
  } else if (config.type === 'bullets') {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.textContent = line;
        el.appendChild(li);
      });
    }
  } else if (config.type === 'tags') {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseTags(value).forEach(function(tag) {
        el.appendChild(createEl('span', 'cv-tag', tag));
      });
    }
  } else if (config.type === 'langs') {
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
  } else if (config.type === 'certs') {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.appendChild(createEl('span', 'cv-lang-name', line));
        el.appendChild(li);
      });
    }
  } else if (config.type === 'highlights') {
    var el = document.getElementById(config.target);
    if (el) {
      el.textContent = '';
      parseLines(value).forEach(function(line) {
        var li = document.createElement('li');
        li.appendChild(createEl('span', 'cv-highlight-text', line));
        el.appendChild(li);
      });
    }
  }

  if (config.wrapper) {
    var wrapperEl = document.getElementById(config.wrapper);
    if (wrapperEl) {
      wrapperEl.style.display = value ? '' : 'none';
    }
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
  
  paperClone.querySelectorAll('[style*="display: none"], [style*="display:none"]').forEach(function(el) {
    el.remove();
  });
  
  paperClone.removeAttribute('style');
  paperClone.querySelectorAll('[style]').forEach(function(el) {
    el.removeAttribute('style');
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

  var css = [
    "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');",
    '@page { size: A4 portrait; margin: 0; }',
    '*, *::before, *::after { box-sizing: border-box !important; margin: 0 !important; padding: 0 !important; }',
    'html, body, article, header, aside, main, section, div, p, h1, h2, ul, li { margin: 0 !important; padding: 0 !important; }',
    'html, body { background: #fff !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; font-family: "Plus Jakarta Sans", system-ui, sans-serif !important; font-size: 9pt !important; line-height: 1.55 !important; width: 210mm !important; min-height: 0 !important; height: auto !important; }',
    'article, header, aside, main, section { display: block !important; min-height: 0 !important; }',
    'a { text-decoration: none !important; color: inherit !important; }',
    '.paper { margin: 0 !important; padding: 0 !important; border-radius: 0 !important; box-shadow: none !important; width: 210mm !important; max-width: 210mm !important; font-size: 9pt !important; overflow: visible !important; background: #fff !important; display: block !important; min-height: 0 !important; break-inside: auto !important; page-break-inside: auto !important; }',
    '.cv-head { padding: 14px 16px 0 16px !important; background: linear-gradient(135deg, #0b1120 0%, #131b2e 60%, #1a1f3d 100%) !important; display: block !important; overflow: hidden !important; }',
    '.cv-head::before { content: none !important; display: none !important; }',
    '.cv-head-top { display: grid !important; grid-template-columns: 1fr auto !important; gap: 16px !important; padding: 0 !important; align-items: start !important; margin-bottom: 8px !important; position: relative !important; }',
    '.cv-name { font-size: 28pt !important; font-weight: 800 !important; letter-spacing: -0.065em !important; line-height: 0.95 !important; color: #fff !important; text-align: left !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-name em { font-style: normal !important; font-weight: 300 !important; color: rgba(255,255,255,.5) !important; letter-spacing: -0.04em !important; }',
    '.cv-role { margin: 6px 0 0 0 !important; padding: 0 !important; font-size: 7pt !important; font-weight: 600 !important; letter-spacing: 0.11em !important; text-transform: uppercase !important; color: rgba(255,255,255,.45) !important; text-align: left !important; }',
    '.cv-role strong { color: #a5b4fc !important; font-weight: 700 !important; }',
    '.cv-stack { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin: 8px 0 0 0 !important; padding: 0 !important; justify-content: flex-start !important; }',
    '.cv-stack-chip { background: rgba(255,255,255,.07) !important; border: 1px solid rgba(255,255,255,.12) !important; border-radius: 6px !important; padding: 3px 10px !important; font-size: 7pt !important; font-weight: 600 !important; color: rgba(255,255,255,.65) !important; font-family: "JetBrains Mono", monospace !important; letter-spacing: 0.02em !important; margin: 0 !important; }',
    '.cv-stack-chip.hot { background: rgba(165,180,252,.12) !important; border-color: rgba(165,180,252,.28) !important; color: #a5b4fc !important; }',
    '.cv-contacts { display: grid !important; gap: 5px !important; text-align: right !important; align-self: flex-start !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-cr { font-size: 7.2pt !important; color: rgba(255,255,255,.5) !important; display: flex !important; align-items: center !important; justify-content: flex-end !important; gap: 9px !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-cr-label { font-weight: 720 !important; color: rgba(255,255,255,.78) !important; min-width: 55px !important; text-align: right !important; font-size: 6.8pt !important; }',
    '.cv-cr a { color: #a5b4fc !important; word-break: break-word !important; }',
    '.cv-summary-strip { background: rgba(255,255,255,.04) !important; border-top: 1px solid rgba(255,255,255,.07) !important; padding: 7px 16px !important; margin: 8px 0 0 0 !important; font-size: 8.4pt !important; color: rgba(255,255,255,.6) !important; line-height: 1.6 !important; }',
    '.cv-body { display: block !important; width: 100% !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; }',
    '.cv-body::after { content: "" !important; display: block !important; clear: both !important; }',
    '.cv-side { float: left !important; width: 33.333% !important; background: #fafbfd !important; color: #111827 !important; padding: 14px !important; margin: 0 !important; border-right: 1px solid #ebeef3 !important; box-sizing: border-box !important; }',
    '.cv-main { display: block !important; margin: 0 0 0 33.333% !important; padding: 12px 16px 14px !important; box-sizing: border-box !important; overflow: hidden !important; }',
    '.cv-sec { margin: 0 0 10px 0 !important; padding: 0 !important; break-inside: avoid !important; page-break-inside: avoid !important; }',
    '.cv-sec:last-child { margin-bottom: 0 !important; }',
    '.cv-sec-title { font-size: 6.4pt !important; font-weight: 820 !important; letter-spacing: 0.22em !important; text-transform: uppercase !important; color: #4f46e5 !important; margin: 0 0 8px 0 !important; padding: 0 0 5px 0 !important; border-bottom: 1.8px solid #e0e7ff !important; }',
    '.cv-skill-group { margin: 0 0 6px 0 !important; padding: 0 !important; }',
    '.cv-skill-group:last-child { margin-bottom: 0 !important; }',
    '.cv-skill-label { font-size: 6.2pt !important; font-weight: 720 !important; letter-spacing: 0.11em !important; text-transform: uppercase !important; color: #6b7280 !important; margin: 0 0 6px 0 !important; padding: 0 !important; }',
    '.cv-tags { display: flex !important; flex-wrap: wrap !important; gap: 4px !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-tag { background: #eef2ff !important; color: #3730a3 !important; border: 1px solid rgba(79,70,229,.16) !important; border-radius: 5px !important; padding: 3px 8px !important; margin: 0 !important; font-size: 6.8pt !important; font-weight: 650 !important; }',
    '.cv-lang-list { list-style: none !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-lang-list li { font-size: 7.8pt !important; color: #374151 !important; padding: 3px 0 !important; margin: 0 !important; border-bottom: 1px solid #f0f2f5 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; gap: 8px !important; }',
    '.cv-lang-list li:last-child { border-bottom: none !important; }',
    '.cv-lang-name { font-weight: 650 !important; color: #111827 !important; }',
    '.cv-lang-level { font-size: 6.8pt !important; color: #6b7280 !important; font-weight: 520 !important; }',
    '.cv-highlights-list { list-style: none !important; display: flex !important; flex-direction: column !important; gap: 5px !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-highlights-list li { font-size: 7.6pt !important; color: #374151 !important; padding: 6px 9px !important; margin: 0 !important; background: #fafbfc !important; border-left: 3px solid #4f46e5 !important; border-radius: 3px !important; box-shadow: 0 1px 2px rgba(0,0,0,.06) !important; line-height: 1.45 !important; }',
    '.cv-highlights-list li:nth-child(1) { border-left-color: #4f46e5 !important; }',
    '.cv-highlights-list li:nth-child(2) { border-left-color: #06b6d4 !important; }',
    '.cv-highlights-list li:nth-child(3) { border-left-color: #10b981 !important; }',
    '.cv-highlights-list li:nth-child(4) { border-left-color: #f59e0b !important; }',
    '.cv-highlights-list li:nth-child(5) { border-left-color: #ef4444 !important; }',
    '.cv-highlight-text { font-weight: 600 !important; color: #111827 !important; display: block !important; }',
    '.cv-exp-head { display: flex !important; justify-content: space-between !important; align-items: flex-start !important; gap: 12px !important; margin: 0 0 6px 0 !important; padding: 0 !important; }',
    '.cv-exp-title { font-size: 9.2pt !important; font-weight: 820 !important; color: #0b1120 !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-exp-date { font-size: 6.2pt !important; font-weight: 650 !important; color: #4f46e5 !important; white-space: nowrap !important; font-family: "JetBrains Mono", monospace !important; background: #eef2ff !important; border: 1px solid rgba(79,70,229,.16) !important; padding: 3px 7px !important; margin: 0 !important; border-radius: 5px !important; flex-shrink: 0 !important; }',
    '.cv-exp-company { font-size: 7.2pt !important; color: #6b7280 !important; margin: 0 0 6px 0 !important; padding: 0 !important; font-weight: 540 !important; }',
    '.cv-exp-bullets { padding: 0 0 0 14px !important; margin: 0 !important; color: #4b5563 !important; font-size: 7.8pt !important; line-height: 1.55 !important; list-style: disc !important; }',
    '.cv-exp-bullets li { margin: 0 0 2px 0 !important; padding: 0 !important; }',
    '.cv-exp-bullets li b { color: #111827 !important; font-weight: 720 !important; }',
    '.cv-exp-standalone { margin: 0 0 9px 0 !important; padding: 0 0 9px 11px !important; border-bottom: 1px solid #f0f2f5 !important; border-left: 2.5px solid #e0e7ff !important; position: relative !important; }',
    '.cv-exp-standalone:last-child { margin-bottom: 0 !important; padding-bottom: 0 !important; border-bottom: none !important; }',
    '.cv-exp-standalone::before { content: "" !important; position: absolute !important; left: -4px !important; top: 7px !important; width: 6px !important; height: 6px !important; background: #4f46e5 !important; border-radius: 50% !important; border: 1.8px solid #fff !important; box-shadow: 0 0 0 1.2px #4f46e5 !important; }',
    '.cv-edu { background: #f8f9fb !important; border: 1px solid #e9edf3 !important; border-radius: 8px !important; padding: 11px 14px !important; margin: 0 !important; }',
    '.cv-edu-course { font-size: 9.2pt !important; font-weight: 820 !important; color: #0b1120 !important; margin: 0 !important; padding: 0 !important; }',
    '.cv-edu-inst { font-size: 7.2pt !important; color: #6b7280 !important; margin: 3px 0 0 0 !important; padding: 0 !important; font-weight: 540 !important; }',
    '.cv-edu-desc { font-size: 7.6pt !important; color: #6b7280 !important; margin: 5px 0 0 0 !important; padding: 0 !important; line-height: 1.6 !important; }',
    '.spacer-sm { height: 4px !important; margin: 0 !important; padding: 0 !important; }',
    '@media print { @page { size: A4 portrait; margin: 0; } html, body { width: 210mm !important; height: auto !important; margin: 0 !important; padding: 0 !important; } .paper { width: 210mm !important; } .cv-body { display: block !important; } .cv-side { float: left !important; width: 33.333% !important; } .cv-main { display: block !important; margin-left: 33.333% !important; overflow: hidden !important; } .cv-sec, .cv-edu, .cv-exp-standalone, .cv-highlights-list li, .cv-lang-list li { break-inside: avoid !important; page-break-inside: avoid !important; } }'
  ].join('\n');

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
