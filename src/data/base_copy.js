const intro = {
    logo : "",
    firstName: "",
    lastName: "",
    titleWithDescription : "",
    socialLinks:[
        {
            link: "",
            iconClass: ""
        },
        {

        }
    ]
}

const description = {
    about : [
        "",
        "",
        ""
    ],
    skills : [
        "",
        "",
        ""
    ],
    data : [
        {
            title :["Years of","experience"],
            value : 8 
        },
        {
            title :["Organizations"],
            value : 2 
        },
        {
            title :["Rewards &","recognitions"],
            value : 10
        }
    ]   
    
}

const experiences = [
    {
        period : "",
        role : "",
        company : "",
        responsibilities : [
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        period : "",
        role : "",
        company : "",
        responsibilities : [
            "",
            "",
            "",
            "",
            "",
        ]
    },
]

const skillSet = {
    percentageFormat: [
        {
            title : "",
            skills : [
                {
                    /* 0 - 100 values only */
                    percentage: 0,
                    /* comma seprated if multiple values */
                    name: "",
                },
                {
                    percentage: 0,
                    name: "",
                }
            ]
        },
        {
            title : "",
            skills : [
                {
                    percentage: 0,
                    name: "",
                },
                {
                    percentage: 0,
                    name: "",
                }
            ]
        }
    ],
    barFormat : [
        {
            title : "",
            skills : [
                {
                    /* 0 - 5 values only */
                    value: 0, 
                     /* comma seprated if multiple values */
                    name: "",
                },
                {
                    value: 0,
                    name: "",
                }
            ]
        },
        {
            title : "",
            skills : [
                {
                    value: 0,
                    name: "",
                },
                {
                    value: 0,
                    name: "",
                }
            ]
        },
    ]
}

const testimonials = {
    title: "what they say about me",
    data:[
                {
                    comment : "",
                    profilePic : "",
                    name : "",
                    role : "",
                    company : ""
                },
                {
                    comment : "",
                    profilePic : "",
                    name : "",
                    role : "",
                    company : ""
                },
                {
                    comment : "",
                    profilePic : "",
                    name : "",
                    role : "",
                    company : ""
                }
            ]
        }

const ProfileData = {
    intro,
    description,
    experiences,
    skillSet,
    testimonials
}

export default  ProfileData