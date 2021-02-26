export const CKEditorConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'fontSize',
            'fontFamily',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'highlight',
            '|',
            'alignment',
            '|',
            'numberedList',
            'bulletedList',
            '|',
            'indent',
            'outdent',
            '|',
            'todoList',
            'imageUpload',
            'link',
            'blockQuote',
            'insertTable',
            // 'mediaEmbed',
            '|',
            'undo',
            'redo'
        ]
    },
    image: {
        // Config available styles.
        styles: [
            'alignLeft', 'alignCenter', 'alignRight'
        ],
        // Config image resize options.
        resizeOptions: [
            {
                name: 'imageResize:original',
                label: 'Original',
                value: null
            },
            {
                name: 'imageResize:50',
                label: '50%',
                value: '50'
            },
            {
                name: 'imageResize:75',
                label: '75%',
                value: '75'
            }
        ],
        toolbar: [
            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
            '|',
            'imageTextAlternative',
            '|',
            'imageResize',
            '|',
            'imageInsert',
            'link'
        ]
    },
    table: {
        contentToolbar: [
            'tableRow',
            'tableColumn',
            'mergeTableCells'
        ]
    },
    language: 'vi'
};
