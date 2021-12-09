const  announcements={
    type: "array",
    required: [
        "0",
        "1",
        "2",
        "3"
    ],
    properties: {
        0: {
            required: [
                "startDate",
                "endDate",
                "message",
                "imageUrl",
                "linkUrl"
            ],
            properties: {
                startDate: {
                    type: "string"
                },
                endDate: {
                    type: "string"
                },
                message: {
                    type: "string"
                },
                imageUrl: {
                    type: "string"
                },
                linkUrl: {
                    type: "string"
                }
            },
            type: "object"
        },
        1: {
            required: [
                "startDate",
                "endDate",
                "message",
                "imageUrl",
                "linkUrl"
            ],
            properties: {
                startDate: {
                    type: "string"
                },
                endDate: {
                    type: "string"
                },
                message: {
                    type: "string"
                },
                imageUrl: {
                    type: "string"
                },
                linkUrl: {
                    type: "string"
                }
            },
            type: "object"
        },
        2: {
            required: [
                "startDate",
                "endDate",
                "message",
                "imageUrl",
                "linkUrl"
            ],
            properties: {
                startDate: {
                    type: "string"
                },
                endDate: {
                    type: "string"
                },
                message: {
                    type: "string"
                },
                imageUrl: {
                    type: "string"
                },
                linkUrl: {
                    type: "string"
                }
            },
            type: "object"
        },
        3: {
            required: [
                "startDate",
                "endDate",
                "message",
                "imageUrl",
                "linkUrl"
            ],
            properties: {
                startDate: {
                    type: "string"
                },
                endDate: {
                    type: "string"
                },
                message: {
                    type: "string"
                },
                imageUrl: {
                    type: "string"
                },
                linkUrl: {
                    type: "string"
                }
            },
            type: "object"
        }
    }
}
module.exports = announcements;