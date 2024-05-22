export const Media = {
    slug: 'media',
    labels: {
        singular:'Media',
        plural: 'Media',
    },
    upload: true,
    access:{
        read: () => true
    },
    fields:[
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true,
        }
    ]
}