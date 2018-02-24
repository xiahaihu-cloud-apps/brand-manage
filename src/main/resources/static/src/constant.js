const Constant = {
    Status: {
        NOT_APPLY: 0,
        APPLIED: 1,
        REVIEW: 2,
        APPROVED: 3,
        REJECTED: 4
    },
    RejectStatus: {
        NOT_REJECTED: 0,
        PART_REJECTED: 1,
        ALL_REJECTED: 2,
        PART_REJECTED_RECHECK: 3,
        PART_REJECTED_NOT_RECHECK: 4,
        ALL_REJECTED_RECHECK: 5,
        ALL_REJECTED_NOT_RECHECK: 6
    }
}

export default Constant