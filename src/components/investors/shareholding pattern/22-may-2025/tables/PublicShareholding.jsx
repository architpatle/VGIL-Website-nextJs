import React from "react";

const PUBLIC_SHAREHOLDING_DATA = [
    // ============================================================
    // 1. INSTITUTIONS (DOMESTIC)
    // ============================================================
    {
        type: "section",
        label: "1",
        name: "Institutions (Domestic)",
    },
    {
        type: "data",
        srNo: "a",
        name: "Mutual Funds",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "b",
        name: "Venture Capital Funds",
        shareholders: "1",
        fullyPaid: "13000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "13000",
        shareholding: "0.05",
        votingX: "13000",
        votingY: "0",
        votingTotal: "13000",
        votingPercentage: "0.05",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.05",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "13000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "c",
        name: "Alternate Investment Funds",
        shareholders: "33",
        fullyPaid: "1110000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "1110000",
        shareholding: "4.46",
        votingX: "1110000",
        votingY: "0",
        votingTotal: "1110000",
        votingPercentage: "4.46",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "4.46",
        lockedShares: "674000",
        lockedPercentage: "60.72",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "1110000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "d",
        name: "Banks",
        shareholders: "5",
        fullyPaid: "168000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "168000",
        shareholding: "0.68",
        votingX: "168000",
        votingY: "0",
        votingTotal: "168000",
        votingPercentage: "0.68",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.68",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "168000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "e",
        name: "Insurance Companies",
        shareholders: "1",
        fullyPaid: "7000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "7000",
        shareholding: "0.03",
        votingX: "7000",
        votingY: "0",
        votingTotal: "7000",
        votingPercentage: "0.03",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.03",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "7000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "f",
        name: "Provident Fund / Pension Funds",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "g",
        name: "Asset reconstruction companies",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "h",
        name: "Sovereign Wealth Funds",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "i",
        name: "NBFCs registered with RBI",
        shareholders: "12",
        fullyPaid: "533000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "533000",
        shareholding: "2.14",
        votingX: "533000",
        votingY: "0",
        votingTotal: "533000",
        votingPercentage: "2.14",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "2.14",
        lockedShares: "199000",
        lockedPercentage: "35.65",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "533000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "j",
        name: "Other Financial Institutions",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "k",
        name: "Any Other (specify)",
        shareholders: "1",
        fullyPaid: "336000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "336000",
        shareholding: "1.35",
        votingX: "336000",
        votingY: "0",
        votingTotal: "336000",
        votingPercentage: "1.35",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "1.35",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "336000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "subtotal",
        label: "Sub-Total (A) (1)",
        shareholders: "53",
        fullyPaid: "2167000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "2167000",
        shareholding: "8.71",
        votingX: "2167000",
        votingY: "0",
        votingTotal: "2167000",
        votingPercentage: "8.71",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "8.71",
        lockedShares: "864000",
        lockedPercentage: "39.87",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "2167000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },

    // ============================================================
    // 2. INSTITUTIONS (FOREIGN)
    // ============================================================
    {
        type: "section",
        label: "2",
        name: "Institutions (Foreign)",
    },
    {
        type: "data",
        srNo: "a",
        name: "Foreign Direct Investment",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "b",
        name: "Foreign Venture Capital Investors",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "c",
        name: "Sovereign Wealth Funds",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "d",
        name: "Foreign Portfolio Investors Category I",
        shareholders: "38",
        fullyPaid: "1242000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "1242000",
        shareholding: "4.99",
        votingX: "1242000",
        votingY: "0",
        votingTotal: "1242000",
        votingPercentage: "4.99",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "4.99",
        lockedShares: "976000",
        lockedPercentage: "78.58",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "1242000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "e",
        name: "Foreign Portfolio Investors Category II",
        shareholders: "1",
        fullyPaid: "11000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "11000",
        shareholding: "0.04",
        votingX: "11000",
        votingY: "0",
        votingTotal: "11000",
        votingPercentage: "0.04",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.04",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "11000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "f",
        name: "Overseas Depositories (holding DRs) (balancing figure)",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "g",
        name: "Any Other (specify)",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "subtotal",
        label: "Sub-Total (A) (2)",
        shareholders: "39",
        fullyPaid: "1253000",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "1253000",
        shareholding: "5.04",
        votingX: "1253000",
        votingY: "0",
        votingTotal: "1253000",
        votingPercentage: "5.04",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "5.04",
        lockedShares: "976000",
        lockedPercentage: "77.89",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "1253000",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },

    // ============================================================
    // 3. CENTRAL GOVERNMENT / STATE GOVERNMENTS
    // ============================================================
    {
        type: "section",
        label: "3",
        name: "Central Government / State Governments",
    },
    {
        type: "data",
        srNo: "a",
        name: "Central Government / Government of India",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "b",
        name: "State Government / Governor",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "c",
        name: "Shareholding by Companies or Bodies Corporate where Central / State Government is a promoter",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "subtotal",
        label: "Sub-Total (B) (3)",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },

    // ============================================================
    // 4. NON-INSTITUTIONS
    // ============================================================
    {
        type: "section",
        label: "4",
        name: "Non-institutions",
    },
    {
        type: "data",
        srNo: "a",
        name: "Associate companies / Subsidiaries",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "b",
        name: "Directors and their relatives (excluding independent directors and nominee directors)",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "c",
        name: "Key Managerial Personnel",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "d",
        name: 'Relatives of promoters (other than "Immediate Relatives" of promoters disclosed under "promoter and Promoter Group" category)',
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "e",
        name: 'Trusts where any person belonging to "Promoter and Promoter Group" is a "trustee", "beneficiary", or "author" of the trust',
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "f",
        name: "Investor Education and Protection Fund (IEPF)",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "g",
        name: "Resident Individuals holding nominal share capital up to Rs. 2 lakhs",
        shareholders: "2879",
        fullyPaid: "3604685",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "3604685",
        shareholding: "14.5",
        votingX: "3604685",
        votingY: "0",
        votingTotal: "3604685",
        votingPercentage: "14.5",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "14.5",
        lockedShares: "779865",
        lockedPercentage: "21.42",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "3604685",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "h",
        name: "Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs",
        shareholders: "13",
        fullyPaid: "6866461",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "6866461",
        shareholding: "2.76",
        votingX: "6866461",
        votingY: "0",
        votingTotal: "6866461",
        votingPercentage: "2.76",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "2.76",
        lockedShares: "6866461",
        lockedPercentage: "100",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "6866461",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "i",
        name: "Non Resident Indians (NRI)",
        shareholders: "21",
        fullyPaid: "152124",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "152124",
        shareholding: "0.61",
        votingX: "152124",
        votingY: "0",
        votingTotal: "152124",
        votingPercentage: "0.61",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.61",
        lockedShares: "133124",
        lockedPercentage: "87.51",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "152124",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "j",
        name: "Foreign Nationals",
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingX: "0",
        votingY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "0",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "k",
        name: "Foreign Companies",
        shareholders: "1",
        fullyPaid: "188013",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "188013",
        shareholding: "0.76",
        votingX: "188013",
        votingY: "0",
        votingTotal: "188013",
        votingPercentage: "0.76",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "0.76",
        lockedShares: "188013",
        lockedPercentage: "100",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "188013",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "l",
        name: "Bodies Corporate",
        shareholders: "25",
        fullyPaid: "285874",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "285874",
        shareholding: "1.15",
        votingX: "285874",
        votingY: "0",
        votingTotal: "285874",
        votingPercentage: "1.15",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "1.15",
        lockedShares: "233874",
        lockedPercentage: "81.81",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "285874",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "data",
        srNo: "m",
        name: "Any Other (specify)",
        shareholders: "45",
        fullyPaid: "435274",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "435274",
        shareholding: "1.75",
        votingX: "435274",
        votingY: "0",
        votingTotal: "435274",
        votingPercentage: "1.75",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "1.75",
        lockedShares: "183274",
        lockedPercentage: "42.11",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "435274",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
    {
        type: "subtotal",
        label: "Sub-Total (B) (4)",
        shareholders: "3186",
        fullyPaid: "5354431",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "5354431",
        shareholding: "21.53",
        votingX: "5354431",
        votingY: "0",
        votingTotal: "5354431",
        votingPercentage: "21.53",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "21.53",
        lockedShares: "2204431",
        lockedPercentage: "41.17",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "5354431",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },

    // ============================================================
    // TOTAL PUBLIC SHAREHOLDING
    // ============================================================
    {
        type: "total",
        label: (
            <>
                Total Public Shareholding
                <br />
                (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)
            </>
        ),
        shareholders: "3278",
        fullyPaid: "8774431",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "8774431",
        shareholding: "35.28",
        votingX: "8774431",
        votingY: "0",
        votingTotal: "8774431",
        votingPercentage: "35.28",
        convertible: "0",
        warrants: "0",
        convertibleWarrants: "0",
        dilutedShareholding: "35.28",
        lockedShares: "4044431",
        lockedPercentage: "46.09",
        pledgedShares: "",
        pledgedPercentage: "",
        dematShares: "8774431",
        subCategoryI: "0",
        subCategoryII: "0",
        subCategoryIII: "0",
    },
];

function PublicShareholding() {
    const renderDataCells = (item) => (
        <>
            <td>{item.shareholders}</td>
            <td>{item.fullyPaid}</td>
            <td>{item.partlyPaid}</td>
            <td>{item.depositoryReceipts}</td>
            <td>{item.totalShares}</td>
            <td>{item.shareholding}</td>

            <td>{item.votingX}</td>
            <td>{item.votingY}</td>
            <td>{item.votingTotal}</td>
            <td>{item.votingPercentage}</td>

            <td>{item.convertible}</td>
            <td>{item.warrants}</td>
            <td>{item.convertibleWarrants}</td>
            <td>{item.dilutedShareholding}</td>

            <td>{item.lockedShares}</td>
            <td>{item.lockedPercentage}</td>

            <td>{item.pledgedShares}</td>
            <td>{item.pledgedPercentage}</td>

            <td>{item.dematShares}</td>

            <td>{item.subCategoryI}</td>
            <td>{item.subCategoryII}</td>
            <td>{item.subCategoryIII}</td>
        </>
    );

    return (
        <div className="shareholding-table-container">
            {/* Fixed table title */}
            <div className="summary-statement-title">
                Table III - Statement showing shareholding pattern of the Public shareholder
            </div>
            <div className="summary-statement-scroll">
                <table className="shareholding-information-table summary-statement-table">
                    <thead>
                        
                        {/* HEADER ROW 1 */}
                        <tr>
                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Sr.
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category &amp;
                                <br />
                                Name of the
                                <br />
                                Shareholders
                                <br />
                                (I)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Nos. Of
                                <br />
                                shareholders
                                <br />
                                (III)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of fully
                                <br />
                                paid up
                                <br />
                                equity
                                <br />
                                shares
                                <br />
                                held (IV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of
                                <br />
                                Partly
                                <br />
                                paid-up
                                <br />
                                equity
                                <br />
                                shares
                                <br />
                                held (V)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of
                                <br />
                                shares
                                <br />
                                underlying
                                <br />
                                Depository
                                <br />
                                Receipts
                                <br />
                                (VI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Total nos.
                                <br />
                                shares
                                <br />
                                held (VII)
                                <br />
                                = (IV)+
                                <br />
                                (V)+(VI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding
                                <br />
                                as a % of
                                <br />
                                total no. of
                                <br />
                                shares
                                <br />
                                (calculated
                                <br />
                                as per SCRR,
                                <br />
                                1957) (VIII)
                                <br />
                                As a % of
                                <br />
                                (A+B+C2)
                            </th>

                            <th
                                colSpan="4"
                                className="summary-statement-highlight-cell"
                            >
                                Number of Voting Rights held in each
                                <br />
                                class of securities (IX)
                            </th>



                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                convertible
                                <br />
                                securities
                                <br />
                                (X)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                Warrants
                                <br />
                                (XI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                convertible
                                <br />
                                securities and
                                <br />
                                No. Of Warrants
                                <br />
                                (Xi) (a)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding
                                <br />
                                , as a % assuming
                                <br />
                                full conversion
                                <br />
                                of convertible
                                <br />
                                securities (as a
                                <br />
                                percentage of
                                <br />
                                diluted share
                                <br />
                                capital)
                                <br />
                                (XI)=(VII)+(X)
                                <br />
                                (Xi)(a) As a %
                                <br />
                                of (A+B+C2)
                            </th>

                            <th
                                colSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Number of Locked
                                <br />
                                in shares (XII)
                            </th>

                            <th
                                colSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Number of Shares
                                <br />
                                pledged or
                                <br />
                                otherwise
                                <br />
                                encumbered (XIII)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Number of
                                <br />
                                equity shares
                                <br />
                                held in
                                <br />
                                dematerialized
                                <br />
                                form (XIV)
                            </th>

                            <th
                                colSpan="3"
                                className="summary-statement-highlight-cell"
                            >
                                Sub-categorization of shares
                            </th>
                        </tr>

                        {/* HEADER ROW 2 */}
                        <tr>
                            <th
                                colSpan="3"
                                className="summary-statement-highlight-cell"
                            >
                                No of Voting (XIV) Rights
                            </th>
                            <th
                                rowSpan="3"
                                className="summary-statement-highlight-cell"
                            >
                                Total as a %
                                <br />
                                of Total
                                <br />
                                Voting rights
                            </th>



                            {/* <th
                                colSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Number of Locked in shares
                            </th> */}

                            {/* <th
                                colSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Number of Shares pledged or otherwise encumbered
                            </th> */}

                            <th rowSpan='2' className="summary-statement-highlight-cell">
                                No.
                                <br />
                                (a)
                            </th>

                            <th rowSpan='2' className="summary-statement-highlight-cell">
                                As a % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>

                            <th rowSpan='2' className="summary-statement-highlight-cell">
                                No.
                                <br />
                                (a)
                            </th>

                            <th rowSpan='2' className="summary-statement-highlight-cell">
                                As a % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>



                            <th
                                colSpan="3"
                                className="summary-statement-highlight-cell"
                            >
                                Shareholding (No. of shares) under
                            </th>
                        </tr>

                        {/* HEADER ROW 3 */}
                        <tr>
                            <th
                                rowSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Class
                                <br />
                                eg:X
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Class
                                <br />
                                eg:y
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-highlight-cell"
                            >
                                Total
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (i)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (ii)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (iii)
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {PUBLIC_SHAREHOLDING_DATA.map((item, index) => {
                            if (item.type === "section") {
                                return (
                                    <tr key={`section-${index}`}>
                                        <td
                                            colSpan="24"
                                            className="summary-statement-section-cell"
                                        >
                                            <strong>
                                                {item.label} &nbsp; {item.name}
                                            </strong>
                                        </td>
                                    </tr>
                                );
                            }

                            if (
                                item.type === "subtotal" ||
                                item.type === "total"
                            ) {
                                return (
                                    <tr
                                        key={`${item.type}-${index}`}
                                        className={
                                            item.type === "total"
                                                ? "summary-statement-total-row"
                                                : "summary-statement-subtotal-row"
                                        }
                                    >
                                        <td
                                            colSpan="2"
                                            className="summary-statement-total-label"
                                        >
                                            {item.label}
                                        </td>

                                        {renderDataCells(item)}
                                    </tr>
                                );
                            }

                            return (
                                <tr key={`${item.srNo}-${index}`}>
                                    <td>{item.srNo}</td>
                                    <td>{item.name}</td>

                                    {renderDataCells(item)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PublicShareholding;