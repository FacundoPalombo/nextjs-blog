export function sanitizeFileName(fileName) {
  return encodeURI(
    fileName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[àáâãäåÀÁÂÃÄÅ]/g, "a")
      .replace(/[èéêëÈÉÊË]/g, "e")
      .replace(/[ìíîïÌÍÎÏ]/g, "i")
      .replace(/[òóôõöÒÓÔÕÖ]/g, "o")
      .replace(/[ùúûüÙÚÛÜ]/g, "u")
      .replace(/[ñÑ]/g, "n")
      .replace(/[ýÿÝŸ]/g, "y")
      .replace(/[^a-zA-Z0-9-]/g, "")
  );
}

// Function to generate markdown content
export function generateMarkdown(post) {
  return `---
title: ${post.title}
description: ${post.description}
date: "${post.date}"
tags: ${post.tags.join(", ")}
coverImage: "/assets/blog/automatizacion-ia-sre/cover.png"
author:
  name: Facundo Palombo & compañIA
  picture: "/assets/blog/authors/facundo.png"
ogImage:
  url: "/assets/blog/automatizacion-ia-sre/cover.png"

---

## Introducción


  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eaque ducimus praesentium perspiciatis amet temporibus hic ut assumenda nam molestias. Ipsum aliquid rerum veniam omnis porro error impedit earum fugiat.
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis nemo? Error voluptates mollitia ut illo fuga dolor deleniti omnis! Soluta enim ratione eaque ad odit eveniet, itaque quod reprehenderit?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fugiat quae! Placeat, totam? Voluptates quisquam, asperiores cumque animi harum quas delectus maxime adipisci architecto ea. Id exercitationem corporis maxime voluptate!
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint non dolorem soluta id nihil, explicabo unde! Cum magnam obcaecati vitae commodi eaque et quaerat esse cupiditate rerum, molestiae nostrum reiciendis.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem ullam numquam id voluptatem quibusdam cum nemo est! Iure tempore, sunt totam quaerat recusandae omnis et quod exercitationem sit harum.


## El papel de la IA en SRE

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet molestiae dolore quas. Labore voluptas eaque natus blanditiis ullam aliquid, asperiores perspiciatis veniam illum soluta, ad quae sed, suscipit recusandae!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum iure alias saepe asperiores et suscipit earum in animi, incidunt a voluptates! Blanditiis, consectetur quam eius enim ipsa maiores ipsum?
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam dolor ducimus libero perspiciatis incidunt rerum eligendi? Vel, laudantium perspiciatis? Tenetur laboriosam ipsum, ex blanditiis error molestiae eum a quod.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem. Pariatur et labore iure voluptatem, facere nisi sit repellendus, illum sapiente fugiat eligendi, temporibus quisquam saepe non debitis repudiandae nobis.
  

## Aplicaciones reales de la IA en SRE

### 1. Resolve AI: Automatización de operaciones de software
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolor natus illum reiciendis suscipit laboriosam quisquam pariatur excepturi, aliquam eius hic atque autem, illo blanditiis assumenda dignissimos aliquid. Eaque, unde!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi optio quos quis dolores dolorum ducimus quae laborum praesentium repellendus iure sapiente nesciunt voluptatem distinctio, id repellat, cum delectus porro.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam doloremque beatae, suscipit nam deleniti nesciunt aut totam dolorum ab nihil veniam hic quasi exercitationem dolores natus pariatur eos. Unde!


### 2. Herramientas de IA que optimizan el SRE

  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolor natus illum reiciendis suscipit laboriosam quisquam pariatur excepturi, aliquam eius hic atque autem, illo blanditiis assumenda dignissimos aliquid. Eaque, unde!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi optio quos quis dolores dolorum ducimus quae laborum praesentium repellendus iure sapiente nesciunt voluptatem distinctio, id repellat, cum delectus porro.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam doloremque beatae, suscipit nam deleniti nesciunt aut totam dolorum ab nihil veniam hic quasi exercitationem dolores natus pariatur eos. Unde!
 

## Beneficios de la automatización impulsada por IA en SRE

  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolor natus illum reiciendis suscipit laboriosam quisquam pariatur excepturi, aliquam eius hic atque autem, illo blanditiis assumenda dignissimos aliquid. Eaque, unde!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi optio quos quis dolores dolorum ducimus quae laborum praesentium repellendus iure sapiente nesciunt voluptatem distinctio, id repellat, cum delectus porro.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam doloremque beatae, suscipit nam deleniti nesciunt aut totam dolorum ab nihil veniam hic quasi exercitationem dolores natus pariatur eos. Unde!
 


## Conclusión
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolor natus illum reiciendis suscipit laboriosam quisquam pariatur excepturi, aliquam eius hic atque autem, illo blanditiis assumenda dignissimos aliquid. Eaque, unde!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi optio quos quis dolores dolorum ducimus quae laborum praesentium repellendus iure sapiente nesciunt voluptatem distinctio, id repellat, cum delectus porro.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam doloremque beatae, suscipit nam deleniti nesciunt aut totam dolorum ab nihil veniam hic quasi exercitationem dolores natus pariatur eos. Unde!

`;
}
