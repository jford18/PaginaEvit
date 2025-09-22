import { IconChartBar, IconCode, IconCloud, IconShieldCheck, IconCog, IconSupport, IconDocumentText, IconTrendingUp } from './components/icons/Icons.js';

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Inteligencia de Negocios (BI)',
    description: 'Transformamos datos en decisiones estratégicas mediante visualizaciones claras y análisis profundos.',
    details: ['Dashboards interactivos', 'KPIs automatizados', 'Modelado de datos y ETL'],
    icon: IconChartBar,
  },
  {
    id: 2,
    title: 'Mesa de Servicio ITSM',
    description: 'Optimizamos la gestión de servicios de TI para garantizar la continuidad y eficiencia de su operación.',
    details: ['Gestión de tickets', 'Automatización de flujos', 'Integración con sistemas'],
    icon: IconDocumentText,
  },
  {
    id: 3,
    title: 'Desarrollo de Software y Apps',
    description: 'Creamos soluciones a medida que impulsan la innovación y se adaptan a las necesidades de su negocio.',
    details: ['Aplicaciones Web y Móviles', 'Sistemas de Gestión (ERP/CRM)', 'Integración con APIs'],
    icon: IconCode,
  },
  {
    id: 4,
    title: 'Consultoría en Transformación Digital',
    description: 'Le guiamos en el camino hacia la digitalización, identificando oportunidades y definiendo una hoja de ruta clara.',
    details: ['Diagnóstico de Madurez Digital', 'Estrategia y Roadmap', 'Gestión del Cambio'],
    icon: IconTrendingUp,
  },
  {
    id: 5,
    title: 'Soluciones en la Nube',
    description: 'Migramos, gestionamos y optimizamos su infraestructura en las principales plataformas de nube.',
    details: ['Arquitectura Cloud (AWS, Azure)', 'DevOps y Automatización CI/CD', 'Optimización de Costos'],
    icon: IconCloud,
  },
  {
    id: 6,
    title: 'Ciberseguridad',
    description: 'Protegemos sus activos digitales con estrategias de seguridad robustas y proactivas.',
    details: ['Análisis de Vulnerabilidades', 'Auditorías de Seguridad', 'Respuesta a Incidentes'],
    icon: IconShieldCheck,
  },
  {
    id: 7,
    title: 'Inteligencia Artificial',
    description: 'Implementamos soluciones de IA para automatizar procesos y generar ventajas competitivas.',
    details: ['Machine Learning', 'Procesamiento de Lenguaje Natural', 'Visión por Computadora'],
    icon: IconCog,
  },
  {
    id: 8,
    title: 'Soporte y Mantenimiento',
    description: 'Ofrecemos soporte técnico continuo para garantizar la operatividad de sus sistemas.',
    details: ['Soporte 24/7', 'Mantenimiento Proactivo', 'Actualizaciones de Seguridad'],
    icon: IconSupport,
  },
];
