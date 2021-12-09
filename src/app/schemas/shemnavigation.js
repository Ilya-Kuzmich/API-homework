const shemnavigation = {
    required: [
        "TopBar",
        "TopBarNarrow",
        "SideNav",
        "Footer",
        "docVersions",
        "__versionInfo"
    ],
    properties: {
        TopBar: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    url: {
                        type: "string"
                    },
                    title: {
                        type: "string"
                    }
                }
            }
        },
        TopBarNarrow: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    title: {
                        type: "string"
                    },
                    children: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                url: {
                                    type: "string"
                                },
                                title: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        SideNav: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    url: {
                        type: "string"
                    },
                    title: {
                        type: "string"
                    },
                    tooltip: {
                        type: "string"
                    },
                    hidden: {
                        type: "boolean"
                    }
                }
            }
        },
        Footer: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    title: {
                        typ: "string"
                    },
                    children: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                url: {
                                    type: "string"
                                },
                                title: {
                                    type: "string"
                                },
                                tooltip: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        docVersions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    title: {
                        type: "string"
                    },
                    url: {
                        type: "string"
                    }
                }
            }
        },
        __versionInfo: {
            required: [
                "options",
                "loose",
                "raw",
                "major",
                "minor",
                "patch",
                "prerelease",
                "build",
                "version",
                "codeName",
                "isSnapshot",
                "full",
                "branch",
                "commitSHA"
            ],
            properties: {
                options: {
                    required: [
                        "loose",
                        "includePrerelease"
                    ],
                    properties: {
                        loose: {
                            type: "boolean"
                        },
                        includePrerelease: {
                            type: "boolean"
                        }
                    },
                    type: "object"
                },
                loose: {
                    type: "boolean"
                },
                raw: {
                    type: "string"
                },
                major: {
                    type: "number"
                },
                minor: {
                   type: "number"
                },
                patch: {
                   type: "number"
                },
                prerelease: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                },
                build: {
                    type: "string"
                },
                version: {
                    type: "string"
                },
                codeName: {
                   type: "string"
                },
                isSnapshot: {
                    type: "boolean"
                },
                full: {
                    type: "string"
                },
                branch: {
                    type: "string"
                },
                commitSHA: {
                    type: "string"
                }
            },
            type: "object"
        }
    }
}

module.exports = shemnavigation;