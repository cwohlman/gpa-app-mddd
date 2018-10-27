module.exports = function RenderGrandkidListItem(view, children) {
  const renderedView = 
`
<div class="list-item">
  ${view.name}
</div>
`.trim();
  return renderedView;
}