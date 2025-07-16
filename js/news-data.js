// Base de datos de noticias - Corvus MexiLeaks
// Todas las noticias del sitio organizadas por fecha

const newsDatabase = [
  // Enero 2025 - Noticias más recientes
  {
    id: 'caso-001-sobornos-municipales',
    title: 'Red de Sobornos Municipales Expuesta en Documentos Filtrados',
    excerpt: 'Una investigación de seis meses revela cómo funcionarios municipales recibían sobornos millonarios a cambio de adjudicar contratos públicos a empresas específicas. Los documentos incluyen transferencias bancarias, audios comprometedores y testimonios protegidos.',
    content: 'Investigación completa sobre la red de corrupción municipal...',
    category: 'corrupcion-justicia',
    categoryLabel: 'Corrupción y Justicia',
    date: '2025-01-16T14:30:00Z',
    author: 'Equipo de Investigación Corvus',
    featured: true,
    tags: ['corrupción', 'contratos públicos', 'sobornos', 'municipios'],
    link: 'noticias/2025/caso-001/index.html',
    image: '🏛️'
  },
  {
    id: 'energia-soberania-nacional',
    title: 'Decisiones Energéticas Fortalecen la Independencia Nacional',
    excerpt: 'Análisis de las políticas energéticas recientes y su impacto en la soberanía nacional. Cómo las decisiones estratégicas protegen los recursos naturales de México de intereses extranjeros.',
    content: 'Análisis profundo de la política energética nacional...',
    category: 'soberania',
    categoryLabel: 'Soberanía',
    date: '2025-01-15T10:15:00Z',
    author: 'Ana Rodríguez',
    featured: false,
    tags: ['energía', 'soberanía', 'recursos naturales'],
    link: '#',
    image: '⚡'
  },
  {
    id: 'influencia-extranjera-comercio',
    title: 'Influencia Extranjera en Decisiones Comerciales Mexicanas',
    excerpt: 'Investigación sobre cómo intereses foráneos buscan influir en las decisiones comerciales de México y las estrategias para mantener la autonomía nacional en negociaciones internacionales.',
    content: 'Análisis geopolítico de las presiones comerciales...',
    category: 'internacional-geopolitica',
    categoryLabel: 'Internacional y Geopolítica',
    date: '2025-01-14T16:45:00Z',
    author: 'Carlos Mendoza',
    featured: false,
    tags: ['comercio internacional', 'soberanía económica', 'geopolítica'],
    link: '#',
    image: '🌍'
  },
  {
    id: 'lavado-dinero-sistema-financiero',
    title: 'Redes de Lavado de Dinero en el Sistema Financiero Mexicano',
    excerpt: 'Investigación revela cómo organizaciones criminales utilizan el sistema financiero para lavar dinero procedente del narcotráfico, involucrando bancos y casas de cambio.',
    content: 'Investigación sobre las redes de lavado de dinero...',
    category: 'crimen-organizado',
    categoryLabel: 'Crimen Organizado',
    date: '2025-01-13T09:20:00Z',
    author: 'María González',
    featured: false,
    tags: ['lavado de dinero', 'narcotráfico', 'sistema financiero'],
    link: '#',
    image: '💰'
  },
  {
    id: 'impunidad-casos-alto-perfil',
    title: 'Impunidad en Casos de Corrupción de Alto Perfil',
    excerpt: 'Análisis sobre cómo la impunidad afecta casos de corrupción de alto perfil y las reformas necesarias para fortalecer el sistema de justicia mexicano.',
    content: 'Análisis del sistema de justicia y la impunidad...',
    category: 'corrupcion-justicia',
    categoryLabel: 'Corrupción y Justicia',
    date: '2025-01-12T13:10:00Z',
    author: 'Roberto Silva',
    featured: false,
    tags: ['impunidad', 'sistema de justicia', 'reformas'],
    link: '#',
    image: '⚖️'
  },
  {
    id: 'recursos-estrategicos-proteccion',
    title: 'Protección de Recursos Estratégicos Nacionales',
    excerpt: 'Investigación sobre medidas para proteger recursos estratégicos de intereses extranjeros y garantizar su aprovechamiento en beneficio del pueblo mexicano.',
    content: 'Análisis de la protección de recursos estratégicos...',
    category: 'soberania',
    categoryLabel: 'Soberanía',
    date: '2025-01-11T11:30:00Z',
    author: 'Elena Vargas',
    featured: false,
    tags: ['recursos estratégicos', 'soberanía', 'protección nacional'],
    link: '#',
    image: '🛡️'
  },
  {
    id: 'vinculos-autoridades-crimen',
    title: 'Vínculos entre Autoridades y Organizaciones Criminales',
    excerpt: 'Casos documentados donde funcionarios públicos han establecido vínculos con organizaciones criminales, comprometiendo la seguridad nacional.',
    content: 'Investigación sobre vínculos entre autoridades y crimen...',
    category: 'crimen-organizado',
    categoryLabel: 'Crimen Organizado',
    date: '2025-01-10T15:45:00Z',
    author: 'Diego Morales',
    featured: false,
    tags: ['corrupción policial', 'crimen organizado', 'seguridad nacional'],
    link: '#',
    image: '🔗'
  },
  {
    id: 'relaciones-diplomaticas-equilibrio',
    title: 'Relaciones Diplomáticas y Equilibrio Regional',
    excerpt: 'Cómo México mantiene relaciones diplomáticas equilibradas en un contexto geopolítico complejo, preservando sus intereses nacionales.',
    content: 'Análisis de la diplomacia mexicana...',
    category: 'internacional-geopolitica',
    categoryLabel: 'Internacional y Geopolítica',
    date: '2025-01-09T08:15:00Z',
    author: 'Patricia Ruiz',
    featured: false,
    tags: ['diplomacia', 'relaciones internacionales', 'equilibrio regional'],
    link: '#',
    image: '🤝'
  },
  {
    id: 'desvio-recursos-programas-sociales',
    title: 'Desvío de Recursos en Programas Sociales',
    excerpt: 'Investigación sobre irregularidades en la administración de programas sociales y cómo recursos destinados a sectores vulnerables fueron desviados.',
    content: 'Investigación sobre desvío de recursos sociales...',
    category: 'corrupcion-justicia',
    categoryLabel: 'Corrupción y Justicia',
    date: '2025-01-08T12:00:00Z',
    author: 'Luis Hernández',
    featured: false,
    tags: ['programas sociales', 'desvío de recursos', 'corrupción'],
    link: '#',
    image: '💸'
  },
  {
    id: 'autodeterminacion-decisiones-comerciales',
    title: 'Defensa de la Autodeterminación en Decisiones Comerciales',
    excerpt: 'Análisis de cómo México mantiene su capacidad de decisión en acuerdos comerciales internacionales sin comprometer su soberanía económica.',
    content: 'Análisis de la autodeterminación comercial...',
    category: 'soberania',
    categoryLabel: 'Soberanía',
    date: '2025-01-07T14:20:00Z',
    author: 'Carmen López',
    featured: false,
    tags: ['autodeterminación', 'comercio internacional', 'soberanía económica'],
    link: '#',
    image: '🛡️'
  },
  {
    id: 'impacto-crimen-seguridad-nacional',
    title: 'Impacto del Crimen Organizado en la Seguridad Nacional',
    excerpt: 'Análisis sobre cómo las actividades del crimen organizado afectan la seguridad nacional y las estrategias necesarias para combatir esta amenaza.',
    content: 'Análisis del impacto del crimen en la seguridad...',
    category: 'crimen-organizado',
    categoryLabel: 'Crimen Organizado',
    date: '2025-01-06T10:30:00Z',
    author: 'Fernando Castro',
    featured: false,
    tags: ['seguridad nacional', 'crimen organizado', 'estrategias de combate'],
    link: '#',
    image: '🚨'
  },
  {
    id: 'tratados-comerciales-soberania',
    title: 'Tratados Comerciales y Soberanía Económica',
    excerpt: 'Análisis de cómo los tratados comerciales internacionales afectan la soberanía económica de México y las estrategias para proteger los intereses nacionales.',
    content: 'Análisis de tratados comerciales y soberanía...',
    category: 'internacional-geopolitica',
    categoryLabel: 'Internacional y Geopolítica',
    date: '2025-01-05T16:10:00Z',
    author: 'Alejandra Jiménez',
    featured: false,
    tags: ['tratados comerciales', 'soberanía económica', 'intereses nacionales'],
    link: '#',
    image: '📊'
  }
];

// Funciones utilitarias para manejo de noticias
const NewsManager = {
  // Obtener todas las noticias ordenadas por fecha (más reciente primero)
  getAllNews: function() {
    return newsDatabase.sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  // Obtener noticias por categoría
  getNewsByCategory: function(category) {
    return newsDatabase
      .filter(news => news.category === category)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  // Obtener la noticia más reciente
  getLatestNews: function() {
    const sortedNews = this.getAllNews();
    return sortedNews.length > 0 ? sortedNews[0] : null;
  },

  // Obtener la noticia más reciente por categoría
  getLatestNewsByCategory: function(category) {
    const categoryNews = this.getNewsByCategory(category);
    return categoryNews.length > 0 ? categoryNews[0] : null;
  },

  // Obtener noticias destacadas
  getFeaturedNews: function() {
    return newsDatabase
      .filter(news => news.featured)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  // Formatear fecha para mostrar
  formatDate: function(dateString) {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'America/Mexico_City'
    };
    return date.toLocaleDateString('es-MX', options);
  },

  // Formatear fecha y hora
  formatDateTime: function(dateString) {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Mexico_City'
    };
    return date.toLocaleDateString('es-MX', options);
  },

  // Obtener color por categoría
  getCategoryColor: function(category) {
    const colors = {
      'soberania': '#00cc66',
      'corrupcion-justicia': '#ff9500',
      'internacional-geopolitica': '#007acc',
      'crimen-organizado': '#cc0000'
    };
    return colors[category] || '#666666';
  },

  // Obtener estadísticas
  getStats: function() {
    const total = newsDatabase.length;
    const categories = {};
    
    newsDatabase.forEach(news => {
      categories[news.category] = (categories[news.category] || 0) + 1;
    });

    return {
      total,
      categories,
      lastUpdate: this.getLatestNews()?.date
    };
  }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.NewsManager = NewsManager;
  window.newsDatabase = newsDatabase;
}