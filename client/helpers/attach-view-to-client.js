module.exports = function attachViewToClient(name, layout, client) {
  client[name] = function renderView(view) {
    const renderedView =
      `<div class="${view.view}">\n  ${
        layout(view, function renderChildren() {
          const children = view.visibleChildren && view.visibleChildren();

          if (children) {
            return children.map(child => client[child.view](child))
          }
        }, client).split('\n').join('\n  ')
      }\n</div>`;
    return renderedView;
  }
}