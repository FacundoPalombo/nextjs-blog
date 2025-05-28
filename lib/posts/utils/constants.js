import rand from "../../../utils/rand";

export const SSR_POSTS_URLS = [
  "como-la-ia-esta-redefiniendo-el-rol-del-site-reliability-engineer",
  "de-incidentes-a-inteligencia-sres-y-el-futuro-automatizado",
  "puede-un-modelo-de-ia-ser-tu-proximo-ingeniero-de-guardia",
  "observabilidad-20-integrando-ia-para-un-analisis-proactivo",
  "la-ia-como-copiloto-en-el-manejo-de-incidentes-criticos",
  "infraestructura-autonoma-utopia-o-el-siguiente-paso",
  "cuando-los-logs-hablan-ia-para-deteccion-de-patrones-anomalos",
  "mas-alla-del-dashboard-ia-y-analisis-predictivo-en-produccion",
  "como-entrenar-una-ia-para-entender-tu-plataforma",
  "el-futuro-del-runbook-es-conversacional-chatops-y-llms",
  "deepfakes-en-infraestructura-riesgos-emergentes-con-ia",
  "que-tan-segura-es-tu-ia-modelos-vs-amenazas-reales",
  "shadow-ai-el-nuevo-riesgo-silencioso-en-tu-organizacion",
  "puede-una-ia-filtrar-tus-secretos-amenazas-inesperadas",
  "inteligencia-artificial-compliance-y-el-dilema-del-control",
  "red-teaming-para-modelos-de-ia-simulando-ataques-con-maquinas",
  "ia-al-servicio-de-la-inclusion-digital-en-sistemas-complejos",
  "accesibilidad-asistida-por-ia-mas-alla-de-lo-basico",
  "quien-disena-la-accesibilidad-rompiendo-sesgos-en-la-ia",
  "de-la-teoria-a-la-practica-casos-reales-de-ia-mejorando-accesos",
  "la-promesa-de-la-ia-en-sre-estamos-listos",
  "automatizacion-vs-autonomia-quien-toma-el-control",
  "cuando-la-ia-falla-lecciones-de-sistemas-mal-entrenados",
  "ia-en-produccion-genialidad-o-riesgo-operativo",
  "la-humanidad-detras-del-codigo-etica-en-la-automatizacion",
  "estamos-construyendo-sistemas-inteligentes-o-mas-debiles",
  "inteligencia-artificial-y-cafe-la-nueva-rutina-del-ingeniero",
  "debugging-con-ia-el-futuro-ya-no-usa-stack-overflow",
  "ia-para-todo-que-automatizar-y-que-no",
  "sre-en-la-era-de-chatgpt-entre-bots-y-burnout",
  "pueden-los-modelos-llm-predecir-caidas-de-sistemas",
  "como-la-ia-esta-cambiando-la-cultura-de-ingenieria",
  "el-sre-del-futuro-se-entrena-con-datos-no-con-pagers",
  "confias-en-tu-ia-mas-que-en-tu-companero-de-equipo",
  "de-la-ciencia-ficcion-al-cli-como-la-ia-se-metio-en-el-shell",
];

export const getRandomPostUrl = () => {
  return SSR_POSTS_URLS[rand(0, SSR_POSTS_URLS.length - 1)];
};
