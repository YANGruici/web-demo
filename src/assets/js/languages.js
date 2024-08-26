import hljs from 'highlight.js/lib/core';

// 定义 Bootstrap 语言
hljs.registerLanguage('bootstrap', function() {
    return {
        name: 'Bootstrap',
        case_insensitive: true,
        contains: [
            hljs.NUMBER_MODE,
            {
                className: 'keyword',
                begin: '\\b(alert|badge|btn|card|carousel|collapse|dropdown|form|navbar|pagination|popover|progress|toast|tooltip)\\b'
            },
            {
                className: 'literal',
                begin: '\\b(primary|secondary|success|danger|warning|info|light|dark|white)\\b'
            }
        ]
    };
});

// 定义 jQuery 语言
hljs.registerLanguage('jquery', function(hljs) {
    return {
        name: 'jQuery',
        case_insensitive:true,
        contains: [
            hljs.NUMBER_MODE,
            {
                className: 'function',
                begin: '\\$(\\s*\\()',
                end: '\\)',
                keywords: {
                    'function': 'click hover fadeIn fadeOut'
                }
            },
            {
                className: 'variable',
                begin: '\\$\\(',
                end: '\\)'
            }
        ]
    };
});

// 定义 Echarts 语言
hljs.registerLanguage('echarts', function(hljs) {
    return {
        name: 'Echarts',
        case_insensitive:true,
        contains: [
            hljs.NUMBER_MODE,
            {
                className: 'attribute',
                begin: '"[^"]*":',
                end: '\\s',
                excludeEnd: true
            },
            {
                className: 'value',
                begin: '\\d+',
                relevance: 0
            }
        ]
    };
});

// 定义 React 语言
hljs.registerLanguage('react', function(hljs) {
    return {
        name: 'React',
        case_insensitive:true,
        contains: [
            hljs.NUMBER_MODE,
            {
                className: 'comment',
                begin: '<!--',
                end: '-->'
            },
            {
                className: 'tag',
                begin: '<[a-zA-Z0-9]+',
                end: '>',
                contains: [
                    {
                        className: 'attribute',
                        begin: '[a-zA-Z0-9-]+\\s*=\\s*',
                        end: '[\'"\\s]'
                    }
                ]
            }
        ]
    };
});

// 定义 Vue 语言
hljs.registerLanguage('vue', function(hljs) {
    return {
        name: 'vue',
        case_insensitive:true,
        contains: [
            hljs.NUMBER_MODE,
            {
                className: 'template',
                begin: '<template>',
                end: '</template>'
            },
            {
                className: 'script',
                begin: '<script>',
                end: '</script>'
            },
            {
                className: 'style',
                begin: '<style>',
                end: '</style>'
            }
        ]
    };
});

hljs.highlightAll();