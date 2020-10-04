# vue-template-space

删除标签之间、标签和内容之间的空格，内容中的空格和换行不会移除

Remove spaces(whitespaces) between tags, between tags and content in template of sfc(.vue).

## Example:

``` html
<!-- source -->
<template>
    <div>
        <div> aaa
            <span>
                bbb   {{ name }}  </span>
        </div>
        <div>
            ccc
            {{ name }}
        </div>
    </div>
</template>

<!-- result -->
<template><div><div>aaa<span>bbb   {{ name }}</span></div><div>ccc
            {{ name }}</div></div></template>
```

## Installation

```
npm install vue-template-space
```

```js
// vue.config.js
chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-template-space')
        .loader('vue-template-space')
        .end();
}
```
