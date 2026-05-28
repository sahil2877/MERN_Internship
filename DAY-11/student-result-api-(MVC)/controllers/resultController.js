const getResult = (req, res) => {

    const math = Number(req.query.math)

    const science = Number(req.query.science)

    const english = Number(req.query.english)

    const total = math + science + english

    const percentage = total / 3

    let grade = ""

    if (percentage >= 90) {
        grade = "A+"
    }

    else if (percentage >= 75) {
        grade = "A"
    }

    else if (percentage >= 60) {
        grade = "B"
    }

    else if (percentage >= 40) {
        grade = "C"
    }

    else {
        grade = "Fail"
    }

    res.json({

        marks: {
            math: math,
            science: science,
            english: english
        },

        total: total,

        percentage: percentage,

        grade: grade
    })
}

module.exports = {
    getResult
}