// Word count: words, characters and reading time (at 230 words a minute)
// of the selection, or else the whole page.
doctree.commands.register('count', async () => {
  const selected = await doctree.document.getSelection();
  const text = selected.trim() ? selected : await doctree.document.getText();
  const words = (text.match(/[\p{L}\p{N}’'-]+/gu) || []).length;
  const characters = text.replace(/\s/g, '').length;
  const minutes = Math.max(1, Math.round(words / 230));
  const what = selected.trim() ? 'Selection' : 'Page';
  await doctree.ui.showMessage(
    `${what}: ${words.toLocaleString()} words · ` +
      `${characters.toLocaleString()} characters · ${minutes} min read`,
  );
});
