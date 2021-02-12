export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "school", title: "School" },
                    { value: "professional", title: "Professional" }
                ]
            }
        }
    ]
}