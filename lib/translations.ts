import type { Locale } from "./i18n"

export const translations = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.privacy": "Privacidade",
    "nav.terms": "Termos",
    "nav.back": "Voltar",

    // Homepage
    "home.title": "LOYFUS",
    "home.subtitle": "Plataforma profissional para descoberta e análise de ferramentas de inteligência artificial",
    "home.search.placeholder": "Pesquisar ferramentas de IA...",
    "home.search.button": "Pesquisar",
    "home.search.button.mobile": "Buscar",
    "home.search.loading": "Pesquisando...",
    "home.explore.button": "Explorar",
    "home.categories.title": "Categorias Populares:",
    "home.error.title": "Erro:",
    "home.error.subtitle": "Verifique se o backend está rodando ou configure a variável API_BASE_URL.",

    // Search Results
    "search.results.found": "ferramentas encontradas para",
    "search.results.showing": "Exibindo",
    "search.results.of": "de",
    "search.results.none.title": "Nenhum resultado encontrado",
    "search.results.none.description":
      "Não encontramos ferramentas que correspondam à sua pesquisa. Tente usar termos diferentes ou mais específicos.",
    "search.pagination.previous": "Anterior",
    "search.pagination.next": "Próxima",
    "search.pagination.page": "Página",
    "search.tool.details": "Ver detalhes",
    "search.tool.official": "Site oficial",
    "search.tool.more": "mais",

    // Tool Details
    "tool.visit.official": "Visitar Site Oficial",
    "tool.back.results": "Voltar aos Resultados",
    "tool.exit.title": "Você está saindo do Loyfus",
    "tool.exit.description":
      "Você será redirecionado para o site oficial de {name}. Esta ação abrirá uma nova aba em seu navegador.",
    "tool.exit.cancel": "Cancelar",
    "tool.exit.continue": "Continuar",
    "tool.not.found.title": "Ferramenta não encontrada",
    "tool.not.found.description": "A ferramenta que você está procurando não existe ou foi removida.",
    "tool.back.search": "Voltar à busca",
    "tool.description.title": "Descrição de {name}",
    "tool.description.unavailable": "Descrição não disponível para esta ferramenta.",

    // About Page
    "about.title": "Sobre a Loyfus",
    "about.intro":
      "A Loyfus é uma plataforma profissional dedicada à descoberta e análise de ferramentas de inteligência artificial, criada para simplificar a busca por soluções de IA adequadas às suas necessidades.",
    "about.mission.description":
      "Em um mundo onde a inteligência artificial está transformando rapidamente todos os setores, encontrar a ferramenta certa pode ser desafiador. Nossa missão é conectar usuários às melhores soluções de IA disponíveis, fornecendo informações detalhadas, categorizações precisas e avaliações confiáveis.",
    "about.feature.search.title": "Busca Inteligente",
    "about.feature.search.description": "Algoritmos avançados para encontrar exatamente o que você precisa",
    "about.feature.categorization.title": "Categorização Precisa",
    "about.feature.categorization.description": "Ferramentas organizadas por categoria para facilitar a descoberta",
    "about.feature.community.title": "Comunidade Ativa",
    "about.feature.community.description": "Avaliações e feedback da comunidade para decisões informadas",
    "about.mission.title": "Nossa Missão",
    "about.mission.text1":
      "Democratizar o acesso às ferramentas de inteligência artificial, tornando a descoberta e avaliação de soluções de IA mais simples e eficiente para profissionais, empresas e entusiastas da tecnologia.",
    "about.mission.text2":
      "Acreditamos que a IA deve ser acessível a todos, e nossa plataforma serve como ponte entre a inovação tecnológica e as necessidades práticas do dia a dia.",
    "about.founded": "Fundada em 2025 • Baseada no Brasil",

    // Contact Page
    "contact.title": "Entre em Contato",
    "contact.description":
      "Tem alguma dúvida, sugestão ou feedback sobre a Loyfus? Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo.",
    "contact.email": "Email",
    "contact.support": "Suporte",
    "contact.phone": "Telefone",
    "contact.form.title": "Envie uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.name.placeholder": "Seu nome",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "seu@email.com",
    "contact.form.subject": "Assunto",
    "contact.form.subject.placeholder": "Assunto da mensagem",
    "contact.form.message": "Mensagem",
    "contact.form.message.placeholder": "Sua mensagem...",
    "contact.form.send": "Enviar Mensagem",

    // Privacy Page
    "privacy.title": "Política de Privacidade",
    "privacy.section1.title": "1. Informações que Coletamos",
    "privacy.section1.content":
      "A Loyfus coleta informações limitadas para fornecer nossos serviços de busca de ferramentas de IA. Coletamos dados de uso anônimos, como termos de pesquisa e preferências de navegação, para melhorar a experiência do usuário.",
    "privacy.section2.title": "2. Como Usamos suas Informações",
    "privacy.section2.content": "Utilizamos as informações coletadas para:",
    "privacy.section2.item1": "Fornecer resultados de pesquisa relevantes",
    "privacy.section2.item2": "Melhorar nossos algoritmos de busca",
    "privacy.section2.item3": "Analisar tendências de uso da plataforma",
    "privacy.section2.item4": "Manter a segurança e integridade do serviço",
    "privacy.section3.title": "3. Compartilhamento de Dados",
    "privacy.section3.content":
      "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar dados agregados e anônimos para fins de pesquisa e desenvolvimento.",
    "privacy.section4.title": "4. Cookies e Tecnologias Similares",
    "privacy.section4.content":
      "Utilizamos cookies essenciais para o funcionamento da plataforma, como preferências de tema e configurações de sessão. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.",
    "privacy.section5.title": "5. Seus Direitos",
    "privacy.section5.content":
      "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através da página de contato.",
    "privacy.section6.title": "6. Contato",
    "privacy.section6.content":
      "Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através da nossa página de contato.",
    "privacy.updated": "Última atualização: Junho de 2025",

    // Terms Page
    "terms.title": "Termos de Uso",
    "terms.section1.title": "1. Aceitação dos Termos",
    "terms.section1.content":
      "Ao acessar e usar a plataforma Loyfus, você concorda em cumprir e estar vinculado a estes termos de uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.",
    "terms.section2.title": "2. Descrição do Serviço",
    "terms.section2.content":
      "A Loyfus é uma plataforma de busca e descoberta de ferramentas de inteligência artificial. Fornecemos informações sobre diversas ferramentas de IA, incluindo descrições, categorias e links para os sites oficiais.",
    "terms.section3.title": "3. Uso Aceitável",
    "terms.section3.content":
      "Você concorda em usar a plataforma apenas para fins legais e de acordo com estes termos. É proibido:",
    "terms.section3.item1": "Usar a plataforma para atividades ilegais ou não autorizadas",
    "terms.section3.item2": "Tentar acessar sistemas ou dados não autorizados",
    "terms.section3.item3": "Interferir no funcionamento normal da plataforma",
    "terms.section3.item4": "Reproduzir ou distribuir conteúdo sem autorização",
    "terms.section4.title": "4. Propriedade Intelectual",
    "terms.section4.content":
      "Todo o conteúdo da plataforma Loyfus, incluindo design, texto, gráficos e código, é propriedade da Loyfus ou de seus licenciadores e está protegido por leis de direitos autorais.",
    "terms.section5.title": "5. Limitação de Responsabilidade",
    "terms.section5.content":
      'A Loyfus fornece informações "como estão" e não garante a precisão, completude ou atualidade das informações sobre as ferramentas de IA listadas. Não somos responsáveis por danos decorrentes do uso de ferramentas de terceiros.',
    "terms.section6.title": "6. Modificações dos Termos",
    "terms.section6.content":
      "Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação na plataforma.",
    "terms.section7.title": "7. Contato",
    "terms.section7.content":
      "Para questões sobre estes termos, entre em contato conosco através da nossa página de contato.",
    "terms.updated": "Última atualização: Junho de 2025",

    // Footer
    "footer.copyright": "Loyfus. Plataforma profissional de descoberta de IA.",

    // SEO
    "seo.home.title": "Loyfus - Buscador Inteligente de Ferramentas de IA",
    "seo.home.description":
      "Encontre e explore milhares de ferramentas de Inteligência Artificial com o buscador Loyfus. A plataforma líder para descobrir soluções de IA para todas as suas necessidades.",
    "seo.about.title": "Sobre Nós",
    "seo.about.description":
      "Conheça a Loyfus, a plataforma líder para descoberta e análise de ferramentas de IA. Nossa missão é simplificar sua busca por soluções de inteligência artificial.",
    "seo.contact.title": "Contato",
    "seo.contact.description":
      "Entre em contato com a equipe Loyfus. Envie suas dúvidas, sugestões ou feedback sobre nossa plataforma de busca de ferramentas de IA.",
    "seo.privacy.title": "Política de Privacidade",
    "seo.privacy.description":
      "Entenda como a Loyfus coleta, usa e protege suas informações pessoais. Nossa política de privacidade detalhada.",
    "seo.terms.title": "Termos de Uso",
    "seo.terms.description":
      "Leia os Termos de Uso da plataforma Loyfus. Entenda seus direitos e responsabilidades ao usar nossos serviços de busca de IA.",
    "seo.tool.not.found.title": "Ferramenta não encontrada",
    "seo.tool.not.found.description": "A ferramenta de IA que você está procurando não foi encontrada.",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.back": "Back",

    // Homepage
    "home.title": "LOYFUS",
    "home.subtitle": "Professional platform for discovering and analyzing artificial intelligence tools",
    "home.search.placeholder": "Search AI tools...",
    "home.search.button": "Search",
    "home.search.button.mobile": "Search",
    "home.search.loading": "Searching...",
    "home.explore.button": "Explore",
    "home.categories.title": "Popular Categories:",
    "home.error.title": "Error:",
    "home.error.subtitle": "Check if the backend is running or configure the API_BASE_URL variable.",

    // Search Results
    "search.results.found": "tools found for",
    "search.results.showing": "Showing",
    "search.results.of": "of",
    "search.results.none.title": "No results found",
    "search.results.none.description":
      "We couldn't find tools that match your search. Try using different or more specific terms.",
    "search.pagination.previous": "Previous",
    "search.pagination.next": "Next",
    "search.pagination.page": "Page",
    "search.tool.details": "View details",
    "search.tool.official": "Official site",
    "search.tool.more": "more",

    // Tool Details
    "tool.visit.official": "Visit Official Site",
    "tool.back.results": "Back to Results",
    "tool.exit.title": "You are leaving Loyfus",
    "tool.exit.description":
      "You will be redirected to the official site of {name}. This action will open a new tab in your browser.",
    "tool.exit.cancel": "Cancel",
    "tool.exit.continue": "Continue",
    "tool.not.found.title": "Tool not found",
    "tool.not.found.description": "The tool you are looking for does not exist or has been removed.",
    "tool.back.search": "Back to search",
    "tool.description.title": "Description of {name}",
    "tool.description.unavailable": "Description not available for this tool.",

    // About Page
    "about.title": "About Loyfus",
    "about.intro":
      "Loyfus is a professional platform dedicated to discovering and analyzing artificial intelligence tools, created to simplify the search for AI solutions suited to your needs.",
    "about.mission.description":
      "In a world where artificial intelligence is rapidly transforming all sectors, finding the right tool can be challenging. Our mission is to connect users to the best available AI solutions, providing detailed information, precise categorizations, and reliable evaluations.",
    "about.feature.search.title": "Smart Search",
    "about.feature.search.description": "Advanced algorithms to find exactly what you need",
    "about.feature.categorization.title": "Precise Categorization",
    "about.feature.categorization.description": "Tools organized by category to facilitate discovery",
    "about.feature.community.title": "Active Community",
    "about.feature.community.description": "Community reviews and feedback for informed decisions",
    "about.mission.title": "Our Mission",
    "about.mission.text1":
      "Democratize access to artificial intelligence tools, making the discovery and evaluation of AI solutions simpler and more efficient for professionals, companies, and technology enthusiasts.",
    "about.mission.text2":
      "We believe that AI should be accessible to everyone, and our platform serves as a bridge between technological innovation and practical daily needs.",
    "about.founded": "Founded in 2025 • Based in Brazil",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.description":
      "Have any questions, suggestions, or feedback about Loyfus? We're here to help! Contact us through the channels below.",
    "contact.email": "Email",
    "contact.support": "Support",
    "contact.phone": "Phone",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Message subject",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message...",
    "contact.form.send": "Send Message",

    // Privacy Page
    "privacy.title": "Privacy Policy",
    "privacy.section1.title": "1. Information We Collect",
    "privacy.section1.content":
      "Loyfus collects limited information to provide our AI tool search services. We collect anonymous usage data, such as search terms and browsing preferences, to improve the user experience.",
    "privacy.section2.title": "2. How We Use Your Information",
    "privacy.section2.content": "We use the collected information to:",
    "privacy.section2.item1": "Provide relevant search results",
    "privacy.section2.item2": "Improve our search algorithms",
    "privacy.section2.item3": "Analyze platform usage trends",
    "privacy.section2.item4": "Maintain service security and integrity",
    "privacy.section3.title": "3. Data Sharing",
    "privacy.section3.content":
      "We do not sell, rent, or share your personal information with third parties for commercial purposes. We may share aggregated and anonymous data for research and development purposes.",
    "privacy.section4.title": "4. Cookies and Similar Technologies",
    "privacy.section4.content":
      "We use essential cookies for platform functionality, such as theme preferences and session settings. You can manage your cookie preferences through your browser settings.",
    "privacy.section5.title": "5. Your Rights",
    "privacy.section5.content":
      "You have the right to access, correct, or delete your personal information. To exercise these rights, contact us through the contact page.",
    "privacy.section6.title": "6. Contact",
    "privacy.section6.content": "If you have questions about this privacy policy, contact us through our contact page.",
    "privacy.updated": "Last updated: June 2025",

    // Terms Page
    "terms.title": "Terms of Use",
    "terms.section1.title": "1. Acceptance of Terms",
    "terms.section1.content":
      "By accessing and using the Loyfus platform, you agree to comply with and be bound by these terms of use. If you do not agree with any part of these terms, you should not use our services.",
    "terms.section2.title": "2. Service Description",
    "terms.section2.content":
      "Loyfus is a platform for searching and discovering artificial intelligence tools. We provide information about various AI tools, including descriptions, categories, and links to official sites.",
    "terms.section3.title": "3. Acceptable Use",
    "terms.section3.content":
      "You agree to use the platform only for legal purposes and in accordance with these terms. It is prohibited to:",
    "terms.section3.item1": "Use the platform for illegal or unauthorized activities",
    "terms.section3.item2": "Attempt to access unauthorized systems or data",
    "terms.section3.item3": "Interfere with the normal operation of the platform",
    "terms.section3.item4": "Reproduce or distribute content without authorization",
    "terms.section4.title": "4. Intellectual Property",
    "terms.section4.content":
      "All content on the Loyfus platform, including design, text, graphics, and code, is the property of Loyfus or its licensors and is protected by copyright laws.",
    "terms.section5.title": "5. Limitation of Liability",
    "terms.section5.content":
      'Loyfus provides information "as is" and does not guarantee the accuracy, completeness, or timeliness of information about the listed AI tools. We are not responsible for damages arising from the use of third-party tools.',
    "terms.section6.title": "6. Terms Modifications",
    "terms.section6.content":
      "We reserve the right to modify these terms at any time. Changes will take effect immediately upon publication on the platform.",
    "terms.section7.title": "7. Contact",
    "terms.section7.content": "For questions about these terms, contact us through our contact page.",
    "terms.updated": "Last updated: June 2025",

    // Footer
    "footer.copyright": "Loyfus. Professional AI discovery platform.",

    // SEO
    "seo.home.title": "Loyfus - Smart AI Tools Search Engine",
    "seo.home.description":
      "Find and explore thousands of Artificial Intelligence tools with Loyfus search engine. The leading platform to discover AI solutions for all your needs.",
    "seo.about.title": "About Us",
    "seo.about.description":
      "Learn about Loyfus, the leading platform for AI tool discovery and analysis. Our mission is to simplify your search for artificial intelligence solutions.",
    "seo.contact.title": "Contact",
    "seo.contact.description":
      "Contact the Loyfus team. Send your questions, suggestions, or feedback about our AI tool search platform.",
    "seo.privacy.title": "Privacy Policy",
    "seo.privacy.description":
      "Understand how Loyfus collects, uses, and protects your personal information. Our detailed privacy policy.",
    "seo.terms.title": "Terms of Use",
    "seo.terms.description":
      "Read the Loyfus platform Terms of Use. Understand your rights and responsibilities when using our AI search services.",
    "seo.tool.not.found.title": "Tool not found",
    "seo.tool.not.found.description": "The AI tool you are looking for was not found.",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.privacy": "Privacidad",
    "nav.terms": "Términos",
    "nav.back": "Volver",

    // Homepage
    "home.title": "LOYFUS",
    "home.subtitle": "Plataforma profesional para descubrir y analizar herramientas de inteligencia artificial",
    "home.search.placeholder": "Buscar herramientas de IA...",
    "home.search.button": "Buscar",
    "home.search.button.mobile": "Buscar",
    "home.search.loading": "Buscando...",
    "home.explore.button": "Explorar",
    "home.categories.title": "Categorías Populares:",
    "home.error.title": "Error:",
    "home.error.subtitle": "Verifique si el backend está funcionando o configure la variable API_BASE_URL.",

    // Search Results
    "search.results.found": "herramientas encontradas para",
    "search.results.showing": "Mostrando",
    "search.results.of": "de",
    "search.results.none.title": "No se encontraron resultados",
    "search.results.none.description":
      "No encontramos herramientas que coincidan con su búsqueda. Intente usar términos diferentes o más específicos.",
    "search.pagination.previous": "Anterior",
    "search.pagination.next": "Siguiente",
    "search.pagination.page": "Página",
    "search.tool.details": "Ver detalles",
    "search.tool.official": "Sitio oficial",
    "search.tool.more": "más",

    // Tool Details
    "tool.visit.official": "Visitar Sitio Oficial",
    "tool.back.results": "Volver a Resultados",
    "tool.exit.title": "Está saliendo de Loyfus",
    "tool.exit.description":
      "Será redirigido al sitio oficial de {name}. Esta acción abrirá una nueva pestaña en su navegador.",
    "tool.exit.cancel": "Cancelar",
    "tool.exit.continue": "Continuar",
    "tool.not.found.title": "Herramienta no encontrada",
    "tool.not.found.description": "La herramienta que está buscando no existe o ha sido eliminada.",
    "tool.back.search": "Volver a la búsqueda",
    "tool.description.title": "Descripción de {name}",
    "tool.description.unavailable": "Descripción no disponible para esta herramienta.",

    // About Page
    "about.title": "Acerca de Loyfus",
    "about.intro":
      "Loyfus es una plataforma profesional dedicada al descubrimiento y análisis de herramientas de inteligencia artificial, creada para simplificar la búsqueda de soluciones de IA adecuadas a sus necesidades.",
    "about.mission.description":
      "En un mundo donde la inteligencia artificial está transformando rápidamente todos los sectores, encontrar la herramienta correcta puede ser desafiante. Nuestra misión es conectar a los usuarios con las mejores soluciones de IA disponibles, proporcionando información detallada, categorizaciones precisas y evaluaciones confiables.",
    "about.feature.search.title": "Búsqueda Inteligente",
    "about.feature.search.description": "Algoritmos avanzados para encontrar exactamente lo que necesita",
    "about.feature.categorization.title": "Categorización Precisa",
    "about.feature.categorization.description":
      "Herramientas organizadas por categoría para facilitar el descubrimiento",
    "about.feature.community.title": "Comunidad Activa",
    "about.feature.community.description": "Reseñas y comentarios de la comunidad para decisiones informadas",
    "about.mission.title": "Nuestra Misión",
    "about.mission.text1":
      "Democratizar el acceso a las herramientas de inteligencia artificial, haciendo que el descubrimiento y evaluación de soluciones de IA sea más simple y eficiente para profesionales, empresas y entusiastas de la tecnología.",
    "about.mission.text2":
      "Creemos que la IA debe ser accesible para todos, y nuestra plataforma sirve como puente entre la innovación tecnológica y las necesidades prácticas del día a día.",
    "about.founded": "Fundada en 2025 • Con sede en Brasil",

    // Contact Page
    "contact.title": "Póngase en Contacto",
    "contact.description":
      "¿Tiene alguna pregunta, sugerencia o comentario sobre Loyfus? ¡Estamos aquí para ayudar! Contáctenos a través de los canales a continuación.",
    "contact.email": "Email",
    "contact.support": "Soporte",
    "contact.phone": "Teléfono",
    "contact.form.title": "Enviar un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Su nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "su@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "Asunto del mensaje",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Su mensaje...",
    "contact.form.send": "Enviar Mensaje",

    // Privacy Page
    "privacy.title": "Política de Privacidad",
    "privacy.section1.title": "1. Información que Recopilamos",
    "privacy.section1.content":
      "Loyfus recopila información limitada para proporcionar nuestros servicios de búsqueda de herramientas de IA. Recopilamos datos de uso anónimos, como términos de búsqueda y preferencias de navegación, para mejorar la experiencia del usuario.",
    "privacy.section2.title": "2. Cómo Usamos su Información",
    "privacy.section2.content": "Utilizamos la información recopilada para:",
    "privacy.section2.item1": "Proporcionar resultados de búsqueda relevantes",
    "privacy.section2.item2": "Mejorar nuestros algoritmos de búsqueda",
    "privacy.section2.item3": "Analizar tendencias de uso de la plataforma",
    "privacy.section2.item4": "Mantener la seguridad e integridad del servicio",
    "privacy.section3.title": "3. Compartir Datos",
    "privacy.section3.content":
      "No vendemos, alquilamos o compartimos su información personal con terceros con fines comerciales. Podemos compartir datos agregados y anónimos con fines de investigación y desarrollo.",
    "privacy.section4.title": "4. Cookies y Tecnologías Similares",
    "privacy.section4.content":
      "Utilizamos cookies esenciales para el funcionamiento de la plataforma, como preferencias de tema y configuraciones de sesión. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.",
    "privacy.section5.title": "5. Sus Derechos",
    "privacy.section5.content":
      "Tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, contáctenos a través de la página de contacto.",
    "privacy.section6.title": "6. Contacto",
    "privacy.section6.content":
      "Si tiene preguntas sobre esta política de privacidad, contáctenos a través de nuestra página de contacto.",
    "privacy.updated": "Última actualización: Junio de 2025",

    // Terms Page
    "terms.title": "Términos de Uso",
    "terms.section1.title": "1. Aceptación de los Términos",
    "terms.section1.content":
      "Al acceder y usar la plataforma Loyfus, acepta cumplir y estar sujeto a estos términos de uso. Si no está de acuerdo con cualquier parte de estos términos, no debe usar nuestros servicios.",
    "terms.section2.title": "2. Descripción del Servicio",
    "terms.section2.content":
      "Loyfus es una plataforma para buscar y descubrir herramientas de inteligencia artificial. Proporcionamos información sobre diversas herramientas de IA, incluyendo descripciones, categorías y enlaces a sitios oficiales.",
    "terms.section3.title": "3. Uso Aceptable",
    "terms.section3.content":
      "Acepta usar la plataforma solo para fines legales y de acuerdo con estos términos. Está prohibido:",
    "terms.section3.item1": "Usar la plataforma para actividades ilegales o no autorizadas",
    "terms.section3.item2": "Intentar acceder a sistemas o datos no autorizados",
    "terms.section3.item3": "Interferir con el funcionamiento normal de la plataforma",
    "terms.section3.item4": "Reproducir o distribuir contenido sin autorización",
    "terms.section4.title": "4. Propiedad Intelectual",
    "terms.section4.content":
      "Todo el contenido de la plataforma Loyfus, incluyendo diseño, texto, gráficos y código, es propiedad de Loyfus o sus licenciantes y está protegido por las leyes de derechos de autor.",
    "terms.section5.title": "5. Limitación de Responsabilidad",
    "terms.section5.content":
      'Loyfus proporciona información "tal como está" y no garantiza la precisión, integridad o actualidad de la información sobre las herramientas de IA listadas. No somos responsables de los daños derivados del uso de herramientas de terceros.',
    "terms.section6.title": "6. Modificaciones de los Términos",
    "terms.section6.content":
      "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de la publicación en la plataforma.",
    "terms.section7.title": "7. Contacto",
    "terms.section7.content":
      "Para preguntas sobre estos términos, contáctenos a través de nuestra página de contacto.",
    "terms.updated": "Última actualización: Junio de 2025",

    // Footer
    "footer.copyright": "Loyfus. Plataforma profesional de descubrimiento de IA.",

    // SEO
    "seo.home.title": "Loyfus - Buscador Inteligente de Herramientas de IA",
    "seo.home.description":
      "Encuentra y explora miles de herramientas de Inteligencia Artificial con el buscador Loyfus. La plataforma líder para descubrir soluciones de IA para todas sus necesidades.",
    "seo.about.title": "Acerca de Nosotros",
    "seo.about.description":
      "Conozca Loyfus, la plataforma líder para el descubrimiento y análisis de herramientas de IA. Nuestra misión es simplificar su búsqueda de soluciones de inteligencia artificial.",
    "seo.contact.title": "Contacto",
    "seo.contact.description":
      "Contacte al equipo de Loyfus. Envíe sus preguntas, sugerencias o comentarios sobre nuestra plataforma de búsqueda de herramientas de IA.",
    "seo.privacy.title": "Política de Privacidad",
    "seo.privacy.description":
      "Entienda cómo Loyfus recopila, usa y protege su información personal. Nuestra política de privacidad detallada.",
    "seo.terms.title": "Términos de Uso",
    "seo.terms.description":
      "Lea los Términos de Uso de la plataforma Loyfus. Entienda sus derechos y responsabilidades al usar nuestros servicios de búsqueda de IA.",
    "seo.tool.not.found.title": "Herramienta no encontrada",
    "seo.tool.not.found.description": "La herramienta de IA que está buscando no fue encontrada.",
  },
} as const

export function t(key: string, locale: Locale, params?: Record<string, string>): string {
  const translation = translations[locale]
  let text = (translation as any)[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value)
    })
  }

  return text
}
