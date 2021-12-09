const shemindex = {
    type: 'object',
    required: [
        "id",
        "title",
        "contents"
    ],
    properties: {
        id: {
            type: "string"
        },
        title: {
            type: "string"
        },
        contents: {
            type: "string"
        }
    }
}

module.exports = shemindex;