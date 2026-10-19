export type Service = { id: string; title: string; category: string; description: string; price: number; free?: boolean; tags: string[] }
export type Project = { id: string; title: string; sector: string; category: string; description: string; problem: string; solution: string; stack: string[]; status: string; accent: string }

export const services: Service[] = [
  { id: 'web-build', title: 'Sitios web desde cero', category: 'Web & e-commerce', description: 'Una base web clara, rápida y lista para evolucionar.', price: 1, tags: ['React', 'Next.js', 'UX'] },
  { id: 'ready-store', title: 'Tienda propia lista para arrancar', category: 'Web & e-commerce', description: 'Una tienda personalizable que puede empezar a funcionar ya mismo, con catálogo, búsqueda y filtros de productos; ideal para compartir y embeber desde Instagram.', price: 1, tags: ['Tienda propia', 'Instagram', 'Catálogo'] },
  { id: 'shopify', title: 'Shopify: tema y funcionalidades', category: 'Web & e-commerce', description: 'Implementación, personalización e integraciones para comercio.', price: 1, tags: ['Shopify', 'Liquid', 'APIs'] },
  { id: 'wordpress', title: 'WordPress: reparar y evolucionar', category: 'Web & e-commerce', description: 'Diagnóstico y desarrollo sobre sitios existentes.', price: 1, tags: ['WordPress', 'WooCommerce'] },
  { id: 'backend', title: 'Backend y APIs', category: 'Backend & arquitectura', description: 'Servicios con Node, Java, PHP, Python o Go, según el problema.', price: 1, tags: ['REST', 'GraphQL', 'SQL'] },
  { id: 'architecture', title: 'Revisión de arquitectura', category: 'Backend & arquitectura', description: 'Una mirada de ingeniería a decisiones, deuda y próximos pasos.', price: 1, tags: ['Sistemas', 'Datos', 'Seguridad'] },
  { id: 'rescue', title: 'VIBE CODE RESCUE', category: 'Rescate con IA', description: 'La IA construyó algo. Ahora hagamos que alguien pueda mantenerlo.', price: 1, tags: ['Auditoría', 'Refactor', 'Producción'] },
  { id: 'mobile', title: 'Aplicaciones móviles', category: 'Mobile', description: 'Desarrollo móvil con React Native, Flutter, Android o iOS.', price: 1, tags: ['Flutter', 'React Native', 'iOS'] },
  { id: 'business', title: 'Software especializado', category: 'Sistemas empresariales', description: 'Agendamiento, reservas, dashboards, automatización e integraciones.', price: 1, tags: ['DIAN', 'WhatsApp', 'Dashboards'] },
  { id: 'e-invoicing', title: 'Facturación electrónica e integración DIAN', category: 'Sistemas empresariales', description: 'Implementación e integración de soluciones de facturación electrónica para procesos empresariales.', price: 1, tags: ['Facturación electrónica', 'DIAN', 'Integraciones'] },
  { id: 'freelance', title: 'Apoyo a equipos y entregas', category: 'Freelance', description: 'Code review, bugs urgentes, modernización y decisiones técnicas.', price: 1, tags: ['Legacy', 'Review', 'Mentoría'] },
  { id: 'travel-pets', title: 'Viajar internacionalmente con mascotas', category: 'Free help', description: 'Orientación basada en experiencia. No es trámite oficial ni garantía.', price: 0, free: true, tags: ['Orientación'] },
  { id: 'job-search', title: 'Buscar empleo online', category: 'Free help', description: 'Ideas prácticas para explorar plataformas de trabajo.', price: 0, free: true, tags: ['Empleo'] },
  { id: 'cv-review', title: 'Revisión orientativa de CV', category: 'Free help', description: 'Observaciones para mejorar tu hoja de vida.', price: 0, free: true, tags: ['CV', 'Orientación'] },
]

export const projects: Project[] = [
  { id: 'commerce-systems', title: 'Commerce systems', sector: 'E-commerce', category: 'E-commerce', description: 'Construcción y evolución de experiencias de comercio digital.', problem: 'Conectar una experiencia comercial con procesos reales.', solution: 'Frontend, catálogo, integraciones y operación pensados como sistema.', stack: ['React', 'Shopify', 'APIs'], status: 'Portafolio — detalle disponible bajo conversación', accent: 'red' },
  { id: 'enterprise-backends', title: 'Enterprise backends', sector: 'Software empresarial', category: 'Backend', description: 'Servicios y APIs para operaciones que no caben en un mockup.', problem: 'Dar estructura, trazabilidad y mantenibilidad a procesos internos.', solution: 'Arquitectura de servicios, datos y contratos API claros.', stack: ['Java', 'Spring Boot', 'SQL'], status: 'Experiencia documentada', accent: 'green' },
  { id: 'vibe-rescue', title: 'Vibe code rescue', sector: 'IA y automatización', category: 'IA y automatización', description: 'Del prototipo generado al software que se puede explicar.', problem: 'Código rápido, decisiones opacas y una producción frágil.', solution: 'Auditoría, refactor, backend real y preparación para operar.', stack: ['LLMs', 'React', 'Docker'], status: 'Línea de servicio activa', accent: 'dark' },
  { id: 'creative-interfaces', title: 'Interfaces con criterio', sector: 'Diseño', category: 'Diseño', description: 'Productos donde la claridad visual también es parte de la ingeniería.', problem: 'Interfaces funcionales que no explican el producto.', solution: 'Jerarquía editorial, prototipado y componentes consistentes.', stack: ['UX', 'CSS', 'Design systems'], status: 'Proyectos seleccionados', accent: 'yellow' },
]

export const experience = [
  ['13+ años', 'Ingeniería de software', 'Full stack, arquitectura y resolución de problemas reales.'],
  ['Walmart Centroamérica / ImageMaker', 'Software empresarial', 'Experiencia documentada en equipos y productos de escala.'],
  ['SuperGIROS · Bancolombia / IAS', 'Sistemas e integraciones', 'Entornos donde los datos, los procesos y la estabilidad importan.'],
  ['Carvajal · Coomeva', 'Desarrollo profesional', 'Trabajo con plataformas, backend y necesidades de negocio.'],
  ['Visual Master · Iteria', 'Producto y creatividad', 'Interfaces, soluciones digitales y colaboración multidisciplinaria.'],
  ['Talentos y Tecnologías', 'Evolución continua', 'Aprender lo nuevo sin olvidar cómo funciona lo fundamental.'],
]

export const toolbox = { Backend: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Express', 'Go', 'Python', 'Django', 'PHP', 'Laravel', 'C# / .NET'], Frontend: ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript', 'HTML5', 'CSS3'], Mobile: ['Flutter', 'React Native', 'Android', 'iOS'], 'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'GitLab'], Datos: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'DynamoDB'], 'IA & automation': ['LLMs', 'ChatGPT', 'Claude', 'n8n', 'MCP', 'Agentes de IA'], 'E-commerce': ['Shopify', 'WordPress', 'WooCommerce', 'VTEX', 'Soluciones propias'] }

export type BlogPost = { title: string; category: string; intro: string; sections: { heading: string; body: string }[]; tags: string[] }

export const blogDrafts: BlogPost[] = [
  { title: 'La IA no reemplaza a quien entiende el software.', category: 'Ingeniería de software', intro: 'La inteligencia artificial puede escribir código muy rápido. La pregunta importante es quién entiende lo que acaba de escribir y qué pasa cuando deja de funcionar.', sections: [
    { heading: 'Un proyecto no termina cuando compila', body: 'Que una aplicación levante no significa que esté lista. Todavía hay que revisar datos, permisos, errores, rendimiento, despliegue y la forma en que otra persona va a mantenerla. Compilar es un momento del proceso, no el certificado de calidad.' },
    { heading: 'El criterio sigue siendo humano', body: 'Una herramienta puede proponer una solución, pero no conoce por sí sola las restricciones del negocio, el costo de una decisión ni la deuda que queda escondida detrás de una respuesta bonita. Ahí aparecen la experiencia y los fundamentos.' },
    { heading: 'Usar IA sin entregar el volante', body: 'La uso para acelerar tareas, explorar alternativas y quitar trabajo repetitivo. También la reviso, la cuestiono y la corrijo. La velocidad sirve cuando todavía sabemos hacia dónde vamos.' },
  ], tags: ['IA', 'Fundamentos', 'Criterio'] },
  { title: 'Vibe coding: del prototipo a producción.', category: 'IA y vibe coding', intro: 'El vibe coding es excelente para convertir una idea en algo visible. El problema comienza cuando el prototipo se confunde con el producto terminado.', sections: [
    { heading: 'El prototipo tiene permiso para ser rápido', body: 'En una primera etapa está bien probar una pantalla, una navegación o una hipótesis. Esa velocidad ayuda a conversar sobre algo concreto. Pero un prototipo también debe tener una etiqueta: todavía no es arquitectura.' },
    { heading: 'Producción hace preguntas incómodas', body: '¿Dónde se guardan los datos? ¿Qué ocurre si la API falla? ¿Quién puede ver cada registro? ¿Cómo se recupera el sistema? ¿Qué pasa con los usuarios reales y sus casos raros? Ninguna de esas preguntas se resuelve regenerando el proyecto.' },
    { heading: 'Rescatar también es construir', body: 'No todo proyecto generado con IA debe botarse. A veces necesita una auditoría, límites claros, refactorización y un backend real. El objetivo no es demostrar que la IA se equivocó; es convertir una idea rápida en software que se pueda explicar y mantener.' },
  ], tags: ['Vibe coding', 'Producción', 'Rescate'] },
  { title: 'Por qué sigo creyendo en los fundamentos de programación.', category: 'Experiencias y opiniones', intro: 'Las herramientas cambian. Las preguntas difíciles del software siguen siendo casi las mismas: datos, estados, contratos, errores, límites y decisiones.', sections: [
    { heading: 'Antes del framework está el problema', body: 'Elegir React, Spring, Laravel o cualquier otra herramienta no reemplaza entender qué se está construyendo. Si el problema está mal definido, el framework solo ayuda a producir más rápido una solución equivocada.' },
    { heading: 'Leer código sigue siendo una habilidad', body: 'Escribir es solo una parte del trabajo. Hay que leer código ajeno, reconocer una condición peligrosa, seguir un dato por varias capas y entender por qué una decisión anterior existe. El software real rara vez empieza en una hoja en blanco.' },
    { heading: 'La curiosidad también es técnica', body: 'Los fundamentos no significan quedarse quieto. Significan poder aprender una herramienta nueva sin depender de que alguien nos diga qué copiar. La curiosidad abre la puerta; el criterio decide qué vale la pena dejar dentro.' },
  ], tags: ['Software', 'Aprendizaje', 'Arquitectura'] },
  { title: 'Cuándo Shopify y cuándo una tienda personalizada.', category: 'E-commerce', intro: 'No existe una medalla por construir una tienda desde cero. Tampoco existe una por usar Shopify. La decisión correcta depende de la operación que la tienda necesita sostener.', sections: [
    { heading: 'Shopify resuelve mucho antes de empezar', body: 'Cuando el negocio necesita salir rápido, operar un catálogo y apoyarse en un ecosistema maduro, Shopify puede ser una decisión muy sensata. La personalización está en el tema, la experiencia y las integraciones, no en reinventar cada pieza.' },
    { heading: 'El software propio compra control', body: 'Una solución personalizada tiene sentido cuando los flujos, las reglas, los datos o las integraciones no encajan bien en una plataforma existente. Ese control también trae responsabilidad: mantenimiento, seguridad, soporte y evolución.' },
    { heading: 'La tienda es un sistema', body: 'La pantalla de productos es solo la parte visible. También están el inventario, los pedidos, la atención, los datos y los procesos internos. Antes de escoger tecnología conviene entender cómo trabaja realmente el negocio.' },
  ], tags: ['Shopify', 'E-commerce', 'Producto'] },
  { title: 'Los errores que encuentro en proyectos generados con IA.', category: 'Arquitectura', intro: 'El error más costoso no siempre está en una línea de código. A veces está en creer que una aplicación está terminada porque su interfaz se ve terminada.', sections: [
    { heading: 'La interfaz existe, el sistema no', body: 'Es común encontrar botones que no persisten nada, formularios que simulan respuestas o datos guardados únicamente en el navegador. Eso puede servir para una demo, pero no equivale a un producto conectado a un backend real.' },
    { heading: 'Contratos y datos débiles', body: 'También aparecen nombres inconsistentes, tipos que cambian entre pantallas, validaciones incompletas y respuestas de API asumidas. Esas pequeñas diferencias se convierten en errores difíciles de rastrear cuando el proyecto crece.' },
    { heading: 'Seguridad como último pensamiento', body: 'Credenciales en el frontend, permisos confiados al cliente, entradas sin validar y endpoints expuestos no son detalles de acabado. La seguridad debe entrar en la conversación antes de publicar, no después del primer incidente.' },
    { heading: 'La reparación empieza por observar', body: 'Primero hay que ejecutar el flujo real, revisar qué se guarda, qué llega al servidor y qué ocurre cuando algo falla. Después sí tiene sentido refactorizar. Un build correcto no demuestra que el producto funcione.' },
  ], tags: ['Auditoría', 'Seguridad', 'Backend'] },
]

export const experienceEnglish = [
  ['13+ years', 'Software engineering', 'Full stack, architecture and solving real problems.'],
  ['Walmart Central America / ImageMaker', 'Enterprise software', 'Documented experience working with teams and products at scale.'],
  ['SuperGIROS · Bancolombia / IAS', 'Systems and integrations', 'Environments where data, processes and stability matter.'],
  ['Carvajal · Coomeva', 'Professional development', 'Work with platforms, backend systems and business needs.'],
  ['Visual Master · Iteria', 'Product and creativity', 'Interfaces, digital solutions and multidisciplinary collaboration.'],
  ['Talentos y Tecnologías', 'Continuous evolution', 'Learning what is new without forgetting how the fundamentals work.'],
]

export const blogEnglish: BlogPost[] = [
  { title: 'AI does not replace people who understand software.', category: 'Software engineering', intro: 'Artificial intelligence can write code very quickly. The important question is who understands what it wrote and what happens when it stops working.', sections: [
    { heading: 'A project does not end when it compiles', body: 'An application running does not mean it is ready. Data, permissions, errors, performance, deployment and maintainability still need review. Compilation is one moment in the process, not a quality certificate.' },
    { heading: 'Judgment is still human', body: 'A tool can propose a solution, but it does not know the business constraints, the cost of a decision or the debt hidden behind a polished answer. That is where experience and fundamentals matter.' },
    { heading: 'Use AI without handing over the wheel', body: 'I use it to accelerate tasks, explore alternatives and remove repetitive work. I also review it, question it and correct it. Speed is useful when we still know where we are going.' },
  ], tags: ['AI', 'Fundamentals', 'Judgment'] },
  { title: 'Vibe coding: from prototype to production.', category: 'AI and vibe coding', intro: 'Vibe coding is excellent for turning an idea into something visible. The problem starts when a prototype is mistaken for a finished product.', sections: [
    { heading: 'A prototype is allowed to be fast', body: 'It is fine to test a screen, a flow or a hypothesis early on. That speed helps people discuss something concrete. But a prototype also needs a label: it is not architecture yet.' },
    { heading: 'Production asks uncomfortable questions', body: 'Where is the data stored? What happens when the API fails? Who can see each record? How is the system recovered? What happens with real users and edge cases? Regenerating the project does not answer these questions.' },
    { heading: 'Rescuing is also building', body: 'Not every AI-generated project needs to be thrown away. Sometimes it needs an audit, clear boundaries, refactoring and a real backend. The goal is to turn a fast idea into software that can be explained and maintained.' },
  ], tags: ['Vibe coding', 'Production', 'Rescue'] },
  { title: 'Why I still believe in programming fundamentals.', category: 'Opinions and experience', intro: 'Tools change. The hard questions in software remain almost the same: data, state, contracts, errors, limits and decisions.', sections: [
    { heading: 'Before the framework comes the problem', body: 'Choosing React, Spring, Laravel or any other tool does not replace understanding what is being built. If the problem is unclear, the framework only helps produce the wrong solution faster.' },
    { heading: 'Reading code is still a skill', body: 'Writing is only part of the work. You need to read someone else’s code, recognize a dangerous condition, follow data across layers and understand why an earlier decision exists.' },
    { heading: 'Curiosity is technical too', body: 'Fundamentals do not mean standing still. They mean learning a new tool without depending on someone else to tell you what to copy. Curiosity opens the door; judgment decides what stays inside.' },
  ], tags: ['Software', 'Learning', 'Architecture'] },
  { title: 'When to choose Shopify and when to build a custom store.', category: 'E-commerce', intro: 'There is no medal for building a store from scratch. There is no medal for using Shopify either. The right decision depends on the operation the store must support.', sections: [
    { heading: 'Shopify solves a lot before you start', body: 'When a business needs to launch quickly, operate a catalog and rely on a mature ecosystem, Shopify can be a very sensible choice. Customization can live in the theme, experience and integrations.' },
    { heading: 'Custom software buys control', body: 'A custom solution makes sense when flows, rules, data or integrations do not fit an existing platform. That control also brings responsibility: maintenance, security, support and evolution.' },
    { heading: 'A store is a system', body: 'The product screen is only the visible part. Inventory, orders, support, data and internal processes are there too. Understand the business before choosing the technology.' },
  ], tags: ['Shopify', 'E-commerce', 'Product'] },
  { title: 'The mistakes I find in AI-generated projects.', category: 'Architecture', intro: 'The most expensive error is not always in a line of code. Sometimes it is believing an application is finished because its interface looks finished.', sections: [
    { heading: 'The interface exists, the system does not', body: 'It is common to find buttons that persist nothing, forms that simulate responses or data stored only in the browser. That can work for a demo, but it is not a product connected to a real backend.' },
    { heading: 'Weak contracts and data', body: 'Inconsistent names, changing types, incomplete validation and assumed API responses become difficult errors when the project grows.' },
    { heading: 'Security as an afterthought', body: 'Credentials in the frontend, client-side permissions, unvalidated input and exposed endpoints are not finishing details. Security belongs in the conversation before publishing.' },
    { heading: 'Repair starts with observation', body: 'Run the real flow first. Check what is saved, what reaches the server and what happens when something fails. Then refactor. A successful build does not prove the product works.' },
  ], tags: ['Audit', 'Security', 'Backend'] },
]
