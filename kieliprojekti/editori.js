

export default () => {
    const editor = ace.edit('editori');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
    // Disabloi deprecation-varoitus
    editor.$blockScrolling = Infinity;
    // Disabloi validointi
    editor.getSession().setUseWorker(false);

    return editor;
};