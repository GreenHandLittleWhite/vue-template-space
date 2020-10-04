var { parseComponent } = require('vue-template-compiler');
var { parseComponent: parseTemplate } = require('./plugin.js');

module.exports = function (source) {
    var sfc = parseComponent(source);
    var template = sfc.template;
    if (!template) {
        return source;
    }
    var integralTemplate = `<template>${source.slice(template.start, template.end)}</template>`;
    var newTemplateSfc = parseTemplate(integralTemplate);
    var newContent = newTemplateSfc.template.content.slice(10, -11);
    var result = `${source.slice(0, template.start)}${newContent}${source.slice(template.end)}`;
    return result;
};
