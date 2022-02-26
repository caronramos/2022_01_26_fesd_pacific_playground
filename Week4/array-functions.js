function isNotEmpty(paper) {
    return paper !== "";
}

const isNotEmpty = (paper) => {
    return paper !== "";
}

const isNotEmpty = (paper, box) => {
    console.log(box);
    return paper !== "";
}

isNotEmpty("fdsjkflsd")

// get rid of the parenthsis around the parameter (if there's exactly one)
const isNotEmpty = paper => {
    return paper !== "";
}

const isNotEmpty = paper => {
    console.log(paper);
    return paper !== "";
}

// if there's only one line we can get rid of the return
// if there's only one line we can get rid of the curly brackets
const isNotEmpty = paper => paper !== "";

// Shorten the name of the parameter
const isNotEmpty = p => p !== "";