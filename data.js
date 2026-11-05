// ================================
// 1. GROUPES
// ================================

const groups = [
    {
        id: 1,
        nom: "Voyage à Marrakech",
        description: "Voyage entre amis",
        devise: "MAD",
        dateDebut: "2026-10-01",
        cloture: false
    },
    {
        id: 2,
        nom: "Colocation Rabat",
        description: "Dépenses de la colocation",
        devise: "MAD",
        dateDebut: "2026-09-01",
        cloture: false
    },
    {
        id: 3,
        nom: "Week-end à Ifrane",
        description: "Week-end en famille",
        devise: "MAD",
        dateDebut: "2026-08-10",
        cloture: true
    }
];

// ================================
// 2. MEMBRES
// ================================

const members = [
    { id: 1, groupeId: 1, nom: "Ahmed", pseudo: "ahmed01" },
    { id: 2, groupeId: 1, nom: "Youssef", pseudo: "youssef02" },
    { id: 3, groupeId: 1, nom: "Sara", pseudo: "sara03" },
    { id: 4, groupeId: 1, nom: "Omar", pseudo: "omar04" },

    { id: 5, groupeId: 2, nom: "Amine", pseudo: "amine05" },
    { id: 6, groupeId: 2, nom: "Salma", pseudo: "salma06" },
    { id: 7, groupeId: 2, nom: "Khalid", pseudo: "khalid07" },

    { id: 8, groupeId: 3, nom: "Hamza", pseudo: "hamza08" },
    { id: 9, groupeId: 3, nom: "Nadia", pseudo: "nadia09" }
];

// ================================
// 3. DEPENSES
// ================================

const expenses = [
    // Groupe 1 : Voyage à Marrakech

    {
        id: 1,
        groupeId: 1,
        titre: "Hôtel",
        montant: 1200,
        categorie: "Hébergement",
        date: "2026-10-02",
        payeurId: 1,
        parts: [
            { membreId: 1, montant: 300 },
            { membreId: 2, montant: 300 },
            { membreId: 3, montant: 300 },
            { membreId: 4, montant: 300 }
        ]
    },
    {
        id: 2,
        groupeId: 1,
        titre: "Restaurant",
        montant: 400,
        categorie: "Nourriture",
        date: "2026-10-03",
        payeurId: 2,
        parts: [
            { membreId: 1, montant: 100 },
            { membreId: 2, montant: 100 },
            { membreId: 3, montant: 100 },
            { membreId: 4, montant: 100 }
        ]
    },
    {
        id: 3,
        groupeId: 1,
        titre: "Location voiture",
        montant: 800,
        categorie: "Transport",
        date: "2026-10-03",
        payeurId: 3,
        parts: [
            { membreId: 1, montant: 200 },
            { membreId: 2, montant: 200 },
            { membreId: 3, montant: 200 },
            { membreId: 4, montant: 200 }
        ]
    },
    {
        id: 4,
        groupeId: 1,
        titre: "Courses",
        montant: 200,
        categorie: "Nourriture",
        date: "2026-10-04",
        payeurId: 1,
        parts: [
            { membreId: 1, montant: 50 },
            { membreId: 2, montant: 50 },
            { membreId: 3, montant: 50 },
            { membreId: 4, montant: 50 }
        ]
    },

    // Groupe 2 : Colocation Rabat

    {
        id: 5,
        groupeId: 2,
        titre: "Facture électricité",
        montant: 300,
        categorie: "Factures",
        date: "2026-09-05",
        payeurId: 5,
        parts: [
            { membreId: 5, montant: 100 },
            { membreId: 6, montant: 100 },
            { membreId: 7, montant: 100 }
        ]
    },
    {
        id: 6,
        groupeId: 2,
        titre: "Courses alimentaires",
        montant: 450,
        categorie: "Nourriture",
        date: "2026-09-08",
        payeurId: 6,
        parts: [
            { membreId: 5, montant: 150 },
            { membreId: 6, montant: 150 },
            { membreId: 7, montant: 150 }
        ]
    },
    {
        id: 7,
        groupeId: 2,
        titre: "Internet",
        montant: 150,
        categorie: "Factures",
        date: "2026-09-10",
        payeurId: 7,
        parts: [
            { membreId: 5, montant: 50 },
            { membreId: 6, montant: 50 },
            { membreId: 7, montant: 50 }
        ]
    },

    // Groupe 3 : Week-end à Ifrane

    {
        id: 8,
        groupeId: 3,
        titre: "Chalet",
        montant: 600,
        categorie: "Hébergement",
        date: "2026-08-11",
        payeurId: 8,
        parts: [
            { membreId: 8, montant: 300 },
            { membreId: 9, montant: 300 }
        ]
    }
];

// ================================
// 4. REMBOURSEMENTS
// ================================

const reimbursements = [
    // Groupe 1

    {
        id: 1,
        groupeId: 1,
        deId: 2,
        versId: 1,
        montant: 250,
        date: "2026-10-05"
    },
    {
        id: 2,
        groupeId: 1,
        deId: 4,
        versId: 1,
        montant: 250,
        date: "2026-10-05"
    },

    // Groupe 2

    {
        id: 3,
        groupeId: 2,
        deId: 5,
        versId: 6,
        montant: 50,
        date: "2026-09-12"
    },

    // Groupe 3

    {
        id: 4,
        groupeId: 3,
        deId: 9,
        versId: 8,
        montant: 300,
        date: "2026-08-15"
    }
];


/*

------------------------------------------------------------niveau----------------------------------------------------------------------
------------------------------------------------------------------1--------------------------------------------------------------------------

1. Groupes actifs
Écrire une fonction getActiveGroups(groups) qui retourne uniquement les groupes qui ne sont pas clôturés.

 */


function getActiveGroups(groups) {
    return groups.filter((group) => group.cloture === false);
}

/*console.log(getActiveGroups(groups));*/

/*2. Recherche d'un membre
Écrire une fonction findMemberById(members, id) qui recherche et retourne un membre à partir de son identifiant. Si aucun membre ne correspond, retourner null.
*/


function findMemberById(members, id) {
    const member = members.find(mem => mem.id === id);

    if (!member) {
        return null;
    } else {
        return member;
    }
}
/*console.log(findMemberById(members, 1));*/



/*3. Total des dépenses
Écrire une fonction getTotalExpenses(expenses, groupId) qui calcule et retourne le montant total des dépenses d'un groupe donné.*/

function getTotalExpenses(expenses, groupId) {
    const expencees = expenses.filter((expense) => expense.groupeId === groupId);
    /*console.log(expencees);*/
    let somme = 0;
    /*for (let i = 0; i < expencees.length; i++) {

        somme = somme + expenses.montant;

    }
    return somme;*/

    expencees.forEach((exp) => {
        somme = somme + exp.montant;
    });
    return somme;
}
/*console.log(getTotalExpenses(expenses, 2));*/






/*------------------------------------------------------------niveau----------------------------------------------------------------------
------------------------------------------------------------------2--------------------------------------------------------------------------*/






/*4. Dépenses par catégorie
Écrire une fonction getExpensesByCategory(expenses, groupId, category) qui retourne les dépenses d'une catégorie précise dans un groupe donné.
*/

function getExpensesByCategory(expenses, groupId, category) {
    const expencesTarg = expenses.filter((expense) => expense.groupeId === groupId);
    const Finalexpences = expencesTarg.filter((expense) => expense.categorie === category);

    return Finalexpences;

};
/*console.log(getExpensesByCategory(expenses, 1, "Nourriture"))*/


/*
5. Historique d'un membre
Écrire une fonction getMemberExpenses(expenses, memberId) qui retourne toutes les dépenses auxquelles un membre a participé, qu'il soit payeur ou simple participant.
*/
function getMemberExpenses(expenses, memberId) {
    const MemberCible = expenses.filter((expense) => expense.payeurId === memberId || expense.parts === memberId);
    console.log(MemberCible);
    return MemberCible;

}

console.log(getMemberExpenses(expenses, 1));



/*6. Statistiques des dépenses
Écrire une fonction getCategoryTotals(expenses, groupId) qui retourne un objet contenant le montant total dépensé dans chaque catégorie d'un groupe.
*/
function getCategoryTotals(expenses, groupId) {
    const totals = {};
    expenses.forEach(expense => {
        if (expense.groupeId === groupId) {








        }
    }
    );
    return totals;
}






