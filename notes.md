# DOM - Document Object Model:
- Estrutura em forma de árvore criada pelo browser
- Permite a intergração entre JavaScript e HTML + CSS (o JavaScript usa a DOM para se conectar ao HTML)
- Tem propriedades e métodos (funcionalidades)

> console.dir(```<object>```) para mostrar todas as propriedades e atributos de um objeto

---

> document.links

> document.images

> document.forms

---

## Buscando elementos:
```document```

- ```.querySelector()```: retorna um elemento
- ```.querySelectorAll()```: retorna uma NodeList

- ```.getElementById()```: retorna um elemento
- ```.getElementsByClassName()```: retorna uma HTMLCollection de acordo com a classe
- ```.getElementsByTagName()```: retorna uma HTMLCollection de acordo com a tag

---

## Manipulando conteúdos:
```<element reference>```

- ```.textContext```
- ```.innerText```
- ```.innerHTML```
- ```.values``` (para inputs)

---

## Alterando estilos:
```<element reference>```

- ```.style.<property name in camelCase>```
- ```.classList```
  - ```.add()```
  - ```.remove()```
  - ```.toggle()```

---

## Navegando pelos elementos:
```<element reference>```

- Parents:
  - ```.parentNode``` (or ```.parentElement```)

- Children:
  - ```.children``` (or ```.childNodes```)
  - ```.childElementCount```
  - ```.remove()```

- Siblings:
  - ```.nextSibling``` (or ```.nextElementSibling```)
  - ```.previousSibling``` (or ```.previousElementSibling```)

---

## Criando elementos:
- ```document.createElement('<tag>')```

---

## Inserindo elementos no HTML:
```document```
  - ```.insertBefore()```
  - ```.insertAfter()```
  - ```.append()``` or ```.appendChild()```
  - ```.prepend()```

---

## Trabalhando com propriedades dos elementos:
```<element reference>```
  - ```.setAttribute()```
  - ```.getAttribute()```
  - ```.removeAttribute()```

---
