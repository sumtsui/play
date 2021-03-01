"use strict";
var nodeTree = {
    type: 'div',
    props: {
        className: 'foo',
        children: [
            {
                type: 'h1',
                props: {
                    children: [
                        {
                            type: 'TEXT',
                            props: {
                                children: [],
                                nodeValue: 'Hello,'
                            }
                        },
                        {
                            type: 'TEXT',
                            props: {
                                children: [],
                                nodeValue: ' World'
                            }
                        }
                    ]
                }
            },
            {
                type: 'p',
                props: {
                    id: 'bar',
                    children: [
                        {
                            type: 'TEXT',
                            props: {
                                nodeValue: 'hahahaha',
                                children: []
                            }
                        },
                        {
                            type: 'br',
                            props: {
                                children: []
                            }
                        },
                        {
                            type: 'TEXT',
                            props: {
                                children: [],
                                nodeValue: 'hohoho',
                            }
                        },
                    ]
                }
            },
        ]
    }
};
// root element
var rootEl = document.getElementById('root');
// iterate the tree
function processTree(tree) {
    var arr = [tree];
    while (arr.length) {
        var node = arr.shift();
        if (!node)
            break;
        arr.unshift.apply(arr, node.props.children);
        createDOMElement(node);
        console.log('node', node);
    }
}
processTree(nodeTree);
function createDOMElement(node) {
    var dom;
    if (node.type === 'TEXT') {
        dom = document.createTextNode('');
    }
    else {
        dom = document.createElement(node.type);
    }
    Object.keys(node.props)
        .filter(function (key) { return key !== 'children'; })
        .forEach(function (name) {
        dom[name] = node.props[name];
    });
    node.dom = dom;
}
function commitToDOM(tree, parentDOMNode) {
    if (!tree)
        return;
    parentDOMNode.appendChild(tree.dom);
    tree.props.children.forEach(function (c) {
        commitToDOM(c, tree.dom);
    });
}
commitToDOM(nodeTree, rootEl);
