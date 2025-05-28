---

title: Expectativa vs. Realidad, IA aplicada a Sistemas en Gran Escala  
description: Analizar la popularidad de los grandes modelos lingüísticos (LLM) y su eficacia real en la resolución de problemas reales en SRE y sistemas a gran escala.
tags: LLMs, AI, SRE, Large-Scale Systems, Hype vs. Reality
date: "2024-12-16T05:35:07.322Z"
coverImage: "/assets/blog/expectativas-vs-aplicaciones-reales-en-sistemas-a-gran-escala/cover.png"
author:
  name:  Facundo Palombo & compañIA
  picture: "/assets/blog/authors/facundo.png"
ogImage:
  url: "/assets/blog/expectativas-vs-aplicaciones-reales-en-sistemas-a-gran-escala/cover.png"

---

## Introducción

Los Modelos de Lenguaje de Gran Tamaño (LLMs, por sus siglas en inglés) han captado una atención significativa debido a su capacidad para comprender y generar texto con notable fluidez. Se han promocionado como herramientas revolucionarias en diversos ámbitos, incluido el Site Reliability Engineering (SRE). Sin embargo, es esencial distinguir entre las altas expectativas y la efectividad real de estos modelos en la gestión de sistemas a gran escala.

## ¿Qué son los LLMs?

Los LLMs son modelos de inteligencia artificial diseñados para procesar y generar lenguaje humano. Entrenados con vastos volúmenes de datos textuales, pueden realizar tareas como traducción, resumen y generación de contenido. Ejemplos destacados incluyen GPT-3 y GPT-4 de OpenAI.

## Expectativas en Torno a los LLMs

La industria ha generado altas expectativas sobre los LLMs, resaltando su potencial para automatizar tareas complejas, mejorar la toma de decisiones y proporcionar conocimientos sin precedentes. En el ámbito del SRE, se espera que estos modelos automaticen tareas rutinarias, optimicen la respuesta a incidentes y aumenten la confiabilidad del sistema.

## Aplicaciones Reales de LLMs en SRE

Aunque el potencial teórico de los LLMs en SRE es amplio, su aplicación en entornos reales es más matizada. Algunas áreas donde han demostrado utilidad incluyen:

### 1. Automatización de Documentación

Empresas como **Rackspace Technology** han desarrollado e implementado herramientas de IA para agilizar tareas como la generación de correos electrónicos y la codificación, mostrando un crecimiento significativo a través de su spin-off de IA, FAIR.

### 2. Respuesta a Incidentes

**Meta** ha implementado un sistema de IA que utiliza heurísticas y aprendizaje automático para identificar la causa raíz de los incidentes en su base de código. Este enfoque ha reducido significativamente el esfuerzo manual requerido en la investigación de incidentes y ha acelerado el proceso de resolución.

### 3. Revisión de Código

**Etsy** ha incorporado IA en sus procesos de revisión de código, utilizando modelos que analizan cambios en el código y sugieren mejoras. Esto ha facilitado el trabajo de los desarrolladores y promovido la producción de código más limpio y eficiente.

### 4. Consultas en Lenguaje Natural

**Salesforce** ha desarrollado modelos de IA que permiten interpretar preguntas en lenguaje natural y traducirlas a consultas de bases de datos o comandos de sistema, facilitando el acceso a información sin necesidad de conocimientos técnicos avanzados.

## Desafíos y Limitaciones

A pesar de su potencial, los LLMs presentan varios desafíos en aplicaciones reales:

1. **Calidad y Contexto de los Datos:** Los modelos dependen de los datos con los que fueron entrenados. En SRE, donde el contexto es crítico, pueden generar respuestas inexactas o irrelevantes si los datos no son representativos.

2. **Explicabilidad y Transparencia:** La naturaleza de "caja negra" de los LLMs dificulta entender cómo llegan a ciertas conclusiones, lo cual es problemático en entornos donde la trazabilidad y la confianza son esenciales.

3. **Recursos Computacionales:** Implementar y operar LLMs requiere infraestructura robusta, lo que puede ser una barrera para organizaciones con presupuestos limitados.

4. **Riesgos de Seguridad:** Sin validaciones adecuadas, los LLMs pueden generar código inseguro o ser vulnerables a ataques adversariales diseñados para manipular sus respuestas.

## Casos de Uso en la Práctica

### 1. **Automatización de Documentación en Rackspace Technology**

Rackspace Technology ha desarrollado e implementado herramientas de IA para agilizar tareas como la generación de correos electrónicos y la codificación, mostrando un crecimiento significativo a través de su spin-off de IA, FAIR.

### 2. **Optimización de Respuesta a Incidentes en Meta**

Meta ha implementado un sistema de IA que utiliza heurísticas y aprendizaje automático para identificar la causa raíz de los incidentes en su base de código. Este enfoque ha reducido significativamente el esfuerzo manual requerido en la investigación de incidentes y ha acelerado el proceso de resolución.

### 3. **Revisión de Código en Etsy**

Etsy ha incorporado IA en sus procesos de revisión de código, utilizando modelos que analizan cambios en el código y sugieren mejoras. Esto ha facilitado el trabajo de los desarrolladores y promovido la producción de código más limpio y eficiente.

## Conclusión

Si bien los LLMs pueden ser herramientas valiosas para la automatización de documentación, la respuesta a incidentes y la revisión de código, no son una solución universal. Para aprovechar su potencial, las organizaciones deben evaluar cuidadosamente los casos de uso, mitigar sus limitaciones y asegurarse de contar con la infraestructura y el conocimiento adecuados.

---