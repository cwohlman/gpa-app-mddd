module.exports = function (view, children) {
  const renderedView = 
`
<h1 class="HomepageHeading">Multi-Domain Driven Design App for Grandparents</h1>
<div class="body">${children()[0]}</div>
<div class="footer">${children()[1]}</div>
`.trim();
  return renderedView;
}