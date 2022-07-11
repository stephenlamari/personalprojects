var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yy = new Date().getFullYear().toString().substr(-2);

today = mm + "/" + dd + "/" + yy;

var wordBank = [
  {
    Date: "03/12/22",
    Word: "trick",
  },
  {
    Date: "03/13/22",
    Word: "yearn",
  },
  {
    Date: "03/14/22",
    Word: "dumpy",
  },
  {
    Date: "03/15/22",
    Word: "pushy",
  },
  {
    Date: "03/16/22",
    Word: "mayor",
  },
  {
    Date: "03/17/22",
    Word: "irish",
  },
  {
    Date: "03/18/22",
    Word: "datum",
  },
  {
    Date: "03/19/22",
    Word: "flame",
  },
  {
    Date: "03/20/22",
    Word: "scowl",
  },
  {
    Date: "03/21/22",
    Word: "track",
  },
  {
    Date: "03/22/22",
    Word: "swell",
  },
  {
    Date: "03/23/22",
    Word: "magic",
  },
  {
    Date: "03/24/22",
    Word: "hover",
  },
  {
    Date: "03/25/22",
    Word: "frill",
  },
  {
    Date: "03/26/22",
    Word: "shack",
  },
  {
    Date: "03/27/22",
    Word: "trial",
  },
  {
    Date: "03/28/22",
    Word: "grail",
  },
  {
    Date: "03/29/22",
    Word: "nasal",
  },
  {
    Date: "03/30/22",
    Word: "elope",
  },
  {
    Date: "03/31/22",
    Word: "tepid",
  },
  {
    Date: "04/01/22",
    Word: "toxin",
  },
  {
    Date: "04/02/22",
    Word: "cress",
  },
  {
    Date: "04/03/22",
    Word: "unlit",
  },
  {
    Date: "04/04/22",
    Word: "downy",
  },
  {
    Date: "04/05/22",
    Word: "aloud",
  },
  {
    Date: "04/06/22",
    Word: "truly",
  },
  {
    Date: "04/07/22",
    Word: "noise",
  },
  {
    Date: "04/08/22",
    Word: "foist",
  },
  {
    Date: "04/09/22",
    Word: "comic",
  },
  {
    Date: "04/10/22",
    Word: "chirp",
  },
  {
    Date: "04/11/22",
    Word: "azure",
  },
  {
    Date: "04/12/22",
    Word: "gassy",
  },
  {
    Date: "04/13/22",
    Word: "copse",
  },
  {
    Date: "04/14/22",
    Word: "visor",
  },
  {
    Date: "04/15/22",
    Word: "wagon",
  },
  {
    Date: "04/16/22",
    Word: "sauna",
  },
  {
    Date: "04/17/22",
    Word: "bunny",
  },
  {
    Date: "04/18/22",
    Word: "chafe",
  },
  {
    Date: "04/19/22",
    Word: "donut",
  },
  {
    Date: "04/20/22",
    Word: "brook",
  },
  {
    Date: "04/21/22",
    Word: "canoe",
  },
  {
    Date: "04/22/22",
    Word: "spare",
  },
  {
    Date: "04/23/22",
    Word: "bowel",
  },
  {
    Date: "04/24/22",
    Word: "infer",
  },
  {
    Date: "04/25/22",
    Word: "modal",
  },
  {
    Date: "04/26/22",
    Word: "sally",
  },
  {
    Date: "04/27/22",
    Word: "medic",
  },
  {
    Date: "04/28/22",
    Word: "urban",
  },
  {
    Date: "04/29/22",
    Word: "brief",
  },
  {
    Date: "04/30/22",
    Word: "quake",
  },
  {
    Date: "05/01/22",
    Word: "spice",
  },
  {
    Date: "05/02/22",
    Word: "covey",
  },
  {
    Date: "05/03/22",
    Word: "skulk",
  },
  {
    Date: "05/04/22",
    Word: "taffy",
  },
  {
    Date: "05/05/22",
    Word: "parry",
  },
  {
    Date: "05/06/22",
    Word: "ralph",
  },
  {
    Date: "05/07/22",
    Word: "fetch",
  },
  {
    Date: "05/08/22",
    Word: "unwed",
  },
  {
    Date: "05/09/22",
    Word: "godly",
  },
  {
    Date: "05/10/22",
    Word: "basic",
  },
  {
    Date: "05/11/22",
    Word: "tasty",
  },
  {
    Date: "05/12/22",
    Word: "recut",
  },
  {
    Date: "05/13/22",
    Word: "shaky",
  },
  {
    Date: "05/14/22",
    Word: "tuber",
  },
  {
    Date: "05/15/22",
    Word: "mover",
  },
  {
    Date: "05/16/22",
    Word: "spree",
  },
  {
    Date: "05/17/22",
    Word: "flirt",
  },
  {
    Date: "05/18/22",
    Word: "allot",
  },
  {
    Date: "05/19/22",
    Word: "credo",
  },
  {
    Date: "05/20/22",
    Word: "missy",
  },
  {
    Date: "05/21/22",
    Word: "diary",
  },
  {
    Date: "05/22/22",
    Word: "fudge",
  },
  {
    Date: "05/23/22",
    Word: "favor",
  },
  {
    Date: "05/24/22",
    Word: "snake",
  },
  {
    Date: "05/25/22",
    Word: "amity",
  },
  {
    Date: "05/26/22",
    Word: "crony",
  },
  {
    Date: "05/27/22",
    Word: "prove",
  },
  {
    Date: "05/28/22",
    Word: "heavy",
  },
  {
    Date: "05/29/22",
    Word: "troop",
  },
  {
    Date: "05/30/22",
    Word: "pinch",
  },
  {
    Date: "05/31/22",
    Word: "cause",
  },
  {
    Date: "06/01/22",
    Word: "holly",
  },
  {
    Date: "06/02/22",
    Word: "stone",
  },
  {
    Date: "06/03/22",
    Word: "plane",
  },
  {
    Date: "06/04/22",
    Word: "hovel",
  },
  {
    Date: "06/05/22",
    Word: "poesy",
  },
  {
    Date: "06/06/22",
    Word: "penis",
  },
  {
    Date: "06/07/22",
    Word: "psalm",
  },
  {
    Date: "06/08/22",
    Word: "tough",
  },
  {
    Date: "06/09/22",
    Word: "fetus",
  },
  {
    Date: "06/10/22",
    Word: "drake",
  },
  {
    Date: "06/11/22",
    Word: "flunk",
  },
  {
    Date: "06/12/22",
    Word: "final",
  },
  {
    Date: "06/13/22",
    Word: "crash",
  },
  {
    Date: "06/14/22",
    Word: "thorn",
  },
  {
    Date: "06/15/22",
    Word: "nutty",
  },
  {
    Date: "06/16/22",
    Word: "stiff",
  },
  {
    Date: "06/17/22",
    Word: "resin",
  },
  {
    Date: "06/18/22",
    Word: "stein",
  },
  {
    Date: "06/19/22",
    Word: "daddy",
  },
  {
    Date: "06/20/22",
    Word: "slave",
  },
  {
    Date: "06/21/22",
    Word: "sleep",
  },
  {
    Date: "06/22/22",
    Word: "leash",
  },
  {
    Date: "06/23/22",
    Word: "witty",
  },
  {
    Date: "06/24/22",
    Word: "cease",
  },
  {
    Date: "06/25/22",
    Word: "rusty",
  },
  {
    Date: "06/26/22",
    Word: "gaily",
  },
  {
    Date: "06/27/22",
    Word: "gross",
  },
  {
    Date: "06/28/22",
    Word: "remit",
  },
  {
    Date: "06/29/22",
    Word: "great",
  },
  {
    Date: "06/30/22",
    Word: "plait",
  },
  {
    Date: "07/01/22",
    Word: "trove",
  },
  {
    Date: "07/02/22",
    Word: "shrub",
  },
  {
    Date: "07/03/22",
    Word: "shade",
  },
  {
    Date: "07/04/22",
    Word: "murica",
  },
  {
    Date: "07/05/22",
    Word: "kneel",
  },
  {
    Date: "07/06/22",
    Word: "cubic",
  },
  {
    Date: "07/07/22",
    Word: "prose",
  },
  {
    Date: "07/08/22",
    Word: "vogue",
  },
  {
    Date: "07/09/22",
    Word: "oddly",
  },
  {
    Date: "07/10/22",
    Word: "trump",
  },
  {
    Date: "07/11/22",
    Word: "awoke",
  },
  {
    Date: "07/12/22",
    Word: "daisy",
  },
  {
    Date: "07/13/22",
    Word: "freer",
  },
  {
    Date: "07/14/22",
    Word: "hippo",
  },
  {
    Date: "07/15/22",
    Word: "baton",
  },
  {
    Date: "07/16/22",
    Word: "ditch",
  },
  {
    Date: "07/17/22",
    Word: "carol",
  },
  {
    Date: "07/18/22",
    Word: "being",
  },
  {
    Date: "07/19/22",
    Word: "fauna",
  },
  {
    Date: "07/20/22",
    Word: "draft",
  },
  {
    Date: "07/21/22",
    Word: "check",
  },
  {
    Date: "07/22/22",
    Word: "niece",
  },
  {
    Date: "07/23/22",
    Word: "flush",
  },
  {
    Date: "07/24/22",
    Word: "avoid",
  },
  {
    Date: "07/25/22",
    Word: "optic",
  },
  {
    Date: "07/26/22",
    Word: "emcee",
  },
  {
    Date: "07/27/22",
    Word: "chase",
  },
  {
    Date: "07/28/22",
    Word: "enema",
  },
  {
    Date: "07/29/22",
    Word: "mafia",
  },
  {
    Date: "07/30/22",
    Word: "dirge",
  },
  {
    Date: "07/31/22",
    Word: "guild",
  },
  {
    Date: "08/01/22",
    Word: "saner",
  },
  {
    Date: "08/02/22",
    Word: "dally",
  },
  {
    Date: "08/03/22",
    Word: "lilac",
  },
  {
    Date: "08/04/22",
    Word: "vigor",
  },
  {
    Date: "08/05/22",
    Word: "sonar",
  },
  {
    Date: "08/06/22",
    Word: "jerky",
  },
  {
    Date: "08/07/22",
    Word: "thumb",
  },
  {
    Date: "08/08/22",
    Word: "macaw",
  },
  {
    Date: "08/09/22",
    Word: "adopt",
  },
  {
    Date: "08/10/22",
    Word: "warty",
  },
  {
    Date: "08/11/22",
    Word: "binge",
  },
  {
    Date: "08/12/22",
    Word: "strap",
  },
  {
    Date: "08/13/22",
    Word: "mogul",
  },
  {
    Date: "08/14/22",
    Word: "climb",
  },
  {
    Date: "08/15/22",
    Word: "wight",
  },
  {
    Date: "08/16/22",
    Word: "willy",
  },
  {
    Date: "08/17/22",
    Word: "shorn",
  },
  {
    Date: "08/18/22",
    Word: "purse",
  },
  {
    Date: "08/19/22",
    Word: "outer",
  },
  {
    Date: "08/20/22",
    Word: "denim",
  },
  {
    Date: "08/21/22",
    Word: "scene",
  },
  {
    Date: "08/22/22",
    Word: "arrow",
  },
  {
    Date: "08/23/22",
    Word: "cadet",
  },
  {
    Date: "08/24/22",
    Word: "pooch",
  },
  {
    Date: "08/25/22",
    Word: "laden",
  },
  {
    Date: "08/26/22",
    Word: "inept",
  },
  {
    Date: "08/27/22",
    Word: "cigar",
  },
  {
    Date: "08/28/22",
    Word: "dunce",
  },
  {
    Date: "08/29/22",
    Word: "wrack",
  },
  {
    Date: "08/30/22",
    Word: "pried",
  },
  {
    Date: "08/31/22",
    Word: "ought",
  },
  {
    Date: "09/01/22",
    Word: "super",
  },
  {
    Date: "09/02/22",
    Word: "flesh",
  },
  {
    Date: "09/03/22",
    Word: "motel",
  },
  {
    Date: "09/04/22",
    Word: "ruddy",
  },
  {
    Date: "09/05/22",
    Word: "money",
  },
  {
    Date: "09/06/22",
    Word: "crumb",
  },
  {
    Date: "09/07/22",
    Word: "rotor",
  },
  {
    Date: "09/08/22",
    Word: "roost",
  },
  {
    Date: "09/09/22",
    Word: "kinky",
  },
  {
    Date: "09/10/22",
    Word: "abide",
  },
  {
    Date: "09/11/22",
    Word: "baron",
  },
  {
    Date: "09/12/22",
    Word: "apnea",
  },
  {
    Date: "09/13/22",
    Word: "swish",
  },
  {
    Date: "09/14/22",
    Word: "petal",
  },
  {
    Date: "09/15/22",
    Word: "bezel",
  },
  {
    Date: "09/16/22",
    Word: "gecko",
  },
  {
    Date: "09/17/22",
    Word: "spill",
  },
  {
    Date: "09/18/22",
    Word: "borax",
  },
  {
    Date: "09/19/22",
    Word: "broom",
  },
  {
    Date: "09/20/22",
    Word: "shall",
  },
  {
    Date: "09/21/22",
    Word: "bushy",
  },
  {
    Date: "09/22/22",
    Word: "study",
  },
  {
    Date: "09/23/22",
    Word: "beset",
  },
  {
    Date: "09/24/22",
    Word: "style",
  },
  {
    Date: "09/25/22",
    Word: "daily",
  },
  {
    Date: "09/26/22",
    Word: "razor",
  },
  {
    Date: "09/27/22",
    Word: "rider",
  },
  {
    Date: "09/28/22",
    Word: "abbot",
  },
  {
    Date: "09/29/22",
    Word: "erect",
  },
  {
    Date: "09/30/22",
    Word: "stung",
  },
  {
    Date: "10/01/22",
    Word: "spurt",
  },
  {
    Date: "10/02/22",
    Word: "ideal",
  },
  {
    Date: "10/03/22",
    Word: "adorn",
  },
  {
    Date: "10/04/22",
    Word: "prank",
  },
  {
    Date: "10/05/22",
    Word: "gaunt",
  },
  {
    Date: "10/06/22",
    Word: "evade",
  },
  {
    Date: "10/07/22",
    Word: "angel",
  },
  {
    Date: "10/08/22",
    Word: "melon",
  },
  {
    Date: "10/09/22",
    Word: "extra",
  },
  {
    Date: "10/10/22",
    Word: "taken",
  },
  {
    Date: "10/11/22",
    Word: "maker",
  },
  {
    Date: "10/12/22",
    Word: "stark",
  },
  {
    Date: "10/13/22",
    Word: "drool",
  },
  {
    Date: "10/14/22",
    Word: "pound",
  },
  {
    Date: "10/15/22",
    Word: "ample",
  },
  {
    Date: "10/16/22",
    Word: "gleam",
  },
  {
    Date: "10/17/22",
    Word: "relic",
  },
  {
    Date: "10/18/22",
    Word: "pudgy",
  },
  {
    Date: "10/19/22",
    Word: "savor",
  },
  {
    Date: "10/20/22",
    Word: "quiet",
  },
  {
    Date: "10/21/22",
    Word: "vault",
  },
  {
    Date: "10/22/22",
    Word: "trite",
  },
  {
    Date: "10/23/22",
    Word: "strut",
  },
  {
    Date: "10/24/22",
    Word: "fluke",
  },
  {
    Date: "10/25/22",
    Word: "santa",
  },
  {
    Date: "10/26/22",
    Word: "swoop",
  },
  {
    Date: "10/27/22",
    Word: "loamy",
  },
  {
    Date: "10/28/22",
    Word: "broke",
  },
  {
    Date: "10/29/22",
    Word: "kiosk",
  },
  {
    Date: "10/30/22",
    Word: "trick",
  },
  {
    Date: "10/31/22",
    Word: "gaunt",
  },
  {
    Date: "11/01/22",
    Word: "rinse",
  },
  {
    Date: "11/02/22",
    Word: "moldy",
  },
  {
    Date: "11/03/22",
    Word: "spiny",
  },
  {
    Date: "11/04/22",
    Word: "neigh",
  },
  {
    Date: "11/05/22",
    Word: "anvil",
  },
  {
    Date: "11/06/22",
    Word: "camel",
  },
  {
    Date: "11/07/22",
    Word: "treat",
  },
  {
    Date: "11/08/22",
    Word: "omega",
  },
  {
    Date: "11/09/22",
    Word: "snuff",
  },
  {
    Date: "11/10/22",
    Word: "carve",
  },
  {
    Date: "11/11/22",
    Word: "octal",
  },
  {
    Date: "11/12/22",
    Word: "shear",
  },
  {
    Date: "11/13/22",
    Word: "sober",
  },
  {
    Date: "11/14/22",
    Word: "steel",
  },
  {
    Date: "11/15/22",
    Word: "larva",
  },
  {
    Date: "11/16/22",
    Word: "fibre",
  },
  {
    Date: "11/17/22",
    Word: "mambo",
  },
  {
    Date: "11/18/22",
    Word: "undid",
  },
  {
    Date: "11/19/22",
    Word: "skate",
  },
  {
    Date: "11/20/22",
    Word: "valor",
  },
  {
    Date: "11/21/22",
    Word: "scamp",
  },
  {
    Date: "11/22/22",
    Word: "pesky",
  },
  {
    Date: "11/23/22",
    Word: "owing",
  },
  {
    Date: "11/24/22",
    Word: "gravy",
  },
  {
    Date: "11/25/22",
    Word: "lodge",
  },
  {
    Date: "11/26/22",
    Word: "purer",
  },
  {
    Date: "11/27/22",
    Word: "tread",
  },
  {
    Date: "11/28/22",
    Word: "loopy",
  },
  {
    Date: "11/29/22",
    Word: "racer",
  },
  {
    Date: "11/30/22",
    Word: "ember",
  },
  {
    Date: "12/01/22",
    Word: "flume",
  },
  {
    Date: "12/02/22",
    Word: "chose",
  },
  {
    Date: "12/03/22",
    Word: "tripe",
  },
  {
    Date: "12/04/22",
    Word: "spell",
  },
  {
    Date: "12/05/22",
    Word: "haste",
  },
  {
    Date: "12/06/22",
    Word: "jumpy",
  },
  {
    Date: "12/07/22",
    Word: "yeast",
  },
  {
    Date: "12/08/22",
    Word: "whoop",
  },
  {
    Date: "12/09/22",
    Word: "femme",
  },
  {
    Date: "12/10/22",
    Word: "crown",
  },
  {
    Date: "12/11/22",
    Word: "whine",
  },
  {
    Date: "12/12/22",
    Word: "women",
  },
  {
    Date: "12/13/22",
    Word: "scald",
  },
  {
    Date: "12/14/22",
    Word: "chair",
  },
  {
    Date: "12/15/22",
    Word: "cyber",
  },
  {
    Date: "12/16/22",
    Word: "eclat",
  },
  {
    Date: "12/17/22",
    Word: "reign",
  },
  {
    Date: "12/18/22",
    Word: "buxom",
  },
  {
    Date: "12/19/22",
    Word: "crate",
  },
  {
    Date: "12/20/22",
    Word: "pesto",
  },
  {
    Date: "12/21/22",
    Word: "sworn",
  },
  {
    Date: "12/22/22",
    Word: "pique",
  },
  {
    Date: "12/23/22",
    Word: "scout",
  },
  {
    Date: "12/24/22",
    Word: "truth",
  },
  {
    Date: "12/25/22",
    Word: "shave",
  },
  {
    Date: "12/26/22",
    Word: "queue",
  },
  {
    Date: "12/27/22",
    Word: "clamp",
  },
  {
    Date: "12/28/22",
    Word: "angst",
  },
  {
    Date: "12/29/22",
    Word: "spark",
  },
  {
    Date: "12/30/22",
    Word: "shock",
  },
  {
    Date: "12/31/22",
    Word: "igloo",
  },
  {
    Date: "01/01/23",
    Word: "tango",
  },
  {
    Date: "01/02/23",
    Word: "lager",
  },
  {
    Date: "01/03/23",
    Word: "salsa",
  },
  {
    Date: "01/04/23",
    Word: "rigor",
  },
  {
    Date: "01/05/23",
    Word: "staid",
  },
  {
    Date: "01/06/23",
    Word: "prong",
  },
  {
    Date: "01/07/23",
    Word: "guess",
  },
  {
    Date: "01/08/23",
    Word: "swash",
  },
  {
    Date: "01/09/23",
    Word: "cluck",
  },
  {
    Date: "01/10/23",
    Word: "every",
  },
  {
    Date: "01/11/23",
    Word: "weedy",
  },
  {
    Date: "01/12/23",
    Word: "aptly",
  },
  {
    Date: "01/13/23",
    Word: "drift",
  },
  {
    Date: "01/14/23",
    Word: "match",
  },
  {
    Date: "01/15/23",
    Word: "horny",
  },
  {
    Date: "01/16/23",
    Word: "disco",
  },
  {
    Date: "01/17/23",
    Word: "cheer",
  },
  {
    Date: "01/18/23",
    Word: "pixel",
  },
  {
    Date: "01/19/23",
    Word: "round",
  },
  {
    Date: "01/20/23",
    Word: "beach",
  },
  {
    Date: "01/21/23",
    Word: "scorn",
  },
  {
    Date: "01/22/23",
    Word: "segue",
  },
  {
    Date: "01/23/23",
    Word: "stank",
  },
  {
    Date: "01/24/23",
    Word: "ghoul",
  },
  {
    Date: "01/25/23",
    Word: "lease",
  },
  {
    Date: "01/26/23",
    Word: "limbo",
  },
  {
    Date: "01/27/23",
    Word: "bingo",
  },
  {
    Date: "01/28/23",
    Word: "wrote",
  },
  {
    Date: "01/29/23",
    Word: "picky",
  },
  {
    Date: "01/30/23",
    Word: "nerdy",
  },
  {
    Date: "01/31/23",
    Word: "ratio",
  },
  {
    Date: "02/01/23",
    Word: "banjo",
  },
  {
    Date: "02/02/23",
    Word: "clued",
  },
  {
    Date: "02/03/23",
    Word: "cloud",
  },
  {
    Date: "02/04/23",
    Word: "mimic",
  },
  {
    Date: "02/05/23",
    Word: "rumor",
  },
  {
    Date: "02/06/23",
    Word: "tipsy",
  },
  {
    Date: "02/07/23",
    Word: "peril",
  },
  {
    Date: "02/08/23",
    Word: "funny",
  },
  {
    Date: "02/09/23",
    Word: "smock",
  },
  {
    Date: "02/10/23",
    Word: "abate",
  },
  {
    Date: "02/11/23",
    Word: "along",
  },
  {
    Date: "02/12/23",
    Word: "midst",
  },
  {
    Date: "02/13/23",
    Word: "fatal",
  },
  {
    Date: "02/14/23",
    Word: "enjoy",
  },
  {
    Date: "02/15/23",
    Word: "brain",
  },
  {
    Date: "02/16/23",
    Word: "idler",
  },
  {
    Date: "02/17/23",
    Word: "nadir",
  },
  {
    Date: "02/18/23",
    Word: "snaky",
  },
  {
    Date: "02/19/23",
    Word: "wedge",
  },
  {
    Date: "02/20/23",
    Word: "incur",
  },
  {
    Date: "02/21/23",
    Word: "safer",
  },
  {
    Date: "02/22/23",
    Word: "paint",
  },
  {
    Date: "02/23/23",
    Word: "wager",
  },
  {
    Date: "02/24/23",
    Word: "waive",
  },
  {
    Date: "02/25/23",
    Word: "hyena",
  },
  {
    Date: "02/26/23",
    Word: "fever",
  },
  {
    Date: "02/27/23",
    Word: "bravo",
  },
  {
    Date: "02/28/23",
    Word: "loose",
  },
  {
    Date: "03/01/23",
    Word: "plaza",
  },
  {
    Date: "03/02/23",
    Word: "nomad",
  },
  {
    Date: "03/03/23",
    Word: "spray",
  },
  {
    Date: "03/04/23",
    Word: "scour",
  },
  {
    Date: "03/05/23",
    Word: "leaky",
  },
  {
    Date: "03/06/23",
    Word: "mamma",
  },
  {
    Date: "03/07/23",
    Word: "mania",
  },
  {
    Date: "03/08/23",
    Word: "linen",
  },
  {
    Date: "03/09/23",
    Word: "colon",
  },
  {
    Date: "03/10/23",
    Word: "uncle",
  },
  {
    Date: "03/11/23",
    Word: "miner",
  },
  {
    Date: "03/12/23",
    Word: "cleat",
  },
  {
    Date: "03/13/23",
    Word: "tryst",
  },
  {
    Date: "03/14/23",
    Word: "seven",
  },
  {
    Date: "03/15/23",
    Word: "known",
  },
  {
    Date: "03/16/23",
    Word: "papal",
  },
  {
    Date: "03/17/23",
    Word: "rainy",
  },
  {
    Date: "03/18/23",
    Word: "blare",
  },
  {
    Date: "03/19/23",
    Word: "scant",
  },
  {
    Date: "03/20/23",
    Word: "debug",
  },
  {
    Date: "03/21/23",
    Word: "rerun",
  },
  {
    Date: "03/22/23",
    Word: "still",
  },
  {
    Date: "03/23/23",
    Word: "drunk",
  },
  {
    Date: "03/24/23",
    Word: "lunch",
  },
  {
    Date: "03/25/23",
    Word: "swill",
  },
  {
    Date: "03/26/23",
    Word: "bride",
  },
  {
    Date: "03/27/23",
    Word: "lucky",
  },
  {
    Date: "03/28/23",
    Word: "store",
  },
  {
    Date: "03/29/23",
    Word: "young",
  },
  {
    Date: "03/30/23",
    Word: "coupe",
  },
  {
    Date: "03/31/23",
    Word: "wharf",
  },
  {
    Date: "04/01/23",
    Word: "china",
  },
  {
    Date: "04/02/23",
    Word: "mushy",
  },
  {
    Date: "04/03/23",
    Word: "putty",
  },
  {
    Date: "04/04/23",
    Word: "feast",
  },
  {
    Date: "04/05/23",
    Word: "obese",
  },
  {
    Date: "04/06/23",
    Word: "setup",
  },
  {
    Date: "04/07/23",
    Word: "abode",
  },
  {
    Date: "04/08/23",
    Word: "sword",
  },
  {
    Date: "04/09/23",
    Word: "lemur",
  },
  {
    Date: "04/10/23",
    Word: "wench",
  },
  {
    Date: "04/11/23",
    Word: "debar",
  },
  {
    Date: "04/12/23",
    Word: "limit",
  },
  {
    Date: "04/13/23",
    Word: "leech",
  },
  {
    Date: "04/14/23",
    Word: "hotly",
  },
  {
    Date: "04/15/23",
    Word: "plier",
  },
  {
    Date: "04/16/23",
    Word: "octet",
  },
  {
    Date: "04/17/23",
    Word: "crank",
  },
  {
    Date: "04/18/23",
    Word: "serif",
  },
  {
    Date: "04/19/23",
    Word: "north",
  },
  {
    Date: "04/20/23",
    Word: "greed",
  },
  {
    Date: "04/21/23",
    Word: "impel",
  },
  {
    Date: "04/22/23",
    Word: "throb",
  },
  {
    Date: "04/23/23",
    Word: "venom",
  },
  {
    Date: "04/24/23",
    Word: "cheap",
  },
  {
    Date: "04/25/23",
    Word: "fishy",
  },
  {
    Date: "04/26/23",
    Word: "tatty",
  },
  {
    Date: "04/27/23",
    Word: "voice",
  },
  {
    Date: "04/28/23",
    Word: "aloof",
  },
  {
    Date: "04/29/23",
    Word: "ahead",
  },
  {
    Date: "04/30/23",
    Word: "among",
  },
  {
    Date: "05/01/23",
    Word: "moist",
  },
  {
    Date: "05/02/23",
    Word: "cinch",
  },
  {
    Date: "05/03/23",
    Word: "grimy",
  },
  {
    Date: "05/04/23",
    Word: "graze",
  },
  {
    Date: "05/05/23",
    Word: "erupt",
  },
  {
    Date: "05/06/23",
    Word: "flung",
  },
  {
    Date: "05/07/23",
    Word: "ditto",
  },
  {
    Date: "05/08/23",
    Word: "blink",
  },
  {
    Date: "05/09/23",
    Word: "lymph",
  },
  {
    Date: "05/10/23",
    Word: "slink",
  },
  {
    Date: "05/11/23",
    Word: "groin",
  },
  {
    Date: "05/12/23",
    Word: "frail",
  },
  {
    Date: "05/13/23",
    Word: "laugh",
  },
  {
    Date: "05/14/23",
    Word: "medal",
  },
  {
    Date: "05/15/23",
    Word: "brand",
  },
  {
    Date: "05/16/23",
    Word: "cough",
  },
  {
    Date: "05/17/23",
    Word: "rhyme",
  },
  {
    Date: "05/18/23",
    Word: "annex",
  },
  {
    Date: "05/19/23",
    Word: "snuck",
  },
  {
    Date: "05/20/23",
    Word: "loyal",
  },
  {
    Date: "05/21/23",
    Word: "mower",
  },
  {
    Date: "05/22/23",
    Word: "later",
  },
  {
    Date: "05/23/23",
    Word: "evoke",
  },
  {
    Date: "05/24/23",
    Word: "awake",
  },
  {
    Date: "05/25/23",
    Word: "waxen",
  },
  {
    Date: "05/26/23",
    Word: "acrid",
  },
  {
    Date: "05/27/23",
    Word: "llama",
  },
  {
    Date: "05/28/23",
    Word: "suave",
  },
  {
    Date: "05/29/23",
    Word: "scree",
  },
  {
    Date: "05/30/23",
    Word: "squat",
  },
  {
    Date: "05/31/23",
    Word: "water",
  },
  {
    Date: "06/01/23",
    Word: "steep",
  },
  {
    Date: "06/02/23",
    Word: "grain",
  },
  {
    Date: "06/03/23",
    Word: "rabid",
  },
  {
    Date: "06/04/23",
    Word: "basal",
  },
  {
    Date: "06/05/23",
    Word: "knoll",
  },
  {
    Date: "06/06/23",
    Word: "liege",
  },
  {
    Date: "06/07/23",
    Word: "fuzzy",
  },
  {
    Date: "06/08/23",
    Word: "chard",
  },
  {
    Date: "06/09/23",
    Word: "cacao",
  },
  {
    Date: "06/10/23",
    Word: "delay",
  },
  {
    Date: "06/11/23",
    Word: "gully",
  },
  {
    Date: "06/12/23",
    Word: "proxy",
  },
  {
    Date: "06/13/23",
    Word: "stuff",
  },
  {
    Date: "06/14/23",
    Word: "slosh",
  },
  {
    Date: "06/15/23",
    Word: "plush",
  },
  {
    Date: "06/16/23",
    Word: "stole",
  },
  {
    Date: "06/17/23",
    Word: "dream",
  },
  {
    Date: "06/18/23",
    Word: "dolly",
  },
  {
    Date: "06/19/23",
    Word: "bilge",
  },
  {
    Date: "06/20/23",
    Word: "stint",
  },
  {
    Date: "06/21/23",
    Word: "topaz",
  },
  {
    Date: "06/22/23",
    Word: "light",
  },
  {
    Date: "06/23/23",
    Word: "quote",
  },
  {
    Date: "06/24/23",
    Word: "pizza",
  },
  {
    Date: "06/25/23",
    Word: "caper",
  },
  {
    Date: "06/26/23",
    Word: "crawl",
  },
  {
    Date: "06/27/23",
    Word: "turbo",
  },
  {
    Date: "06/28/23",
    Word: "prism",
  },
  {
    Date: "06/29/23",
    Word: "cruel",
  },
  {
    Date: "06/30/23",
    Word: "mulch",
  },
  {
    Date: "07/01/23",
    Word: "glade",
  },
  {
    Date: "07/02/23",
    Word: "frost",
  },
  {
    Date: "07/03/23",
    Word: "wring",
  },
  {
    Date: "07/04/23",
    Word: "flick",
  },
  {
    Date: "07/05/23",
    Word: "beast",
  },
  {
    Date: "07/06/23",
    Word: "croak",
  },
  {
    Date: "07/07/23",
    Word: "inlay",
  },
  {
    Date: "07/08/23",
    Word: "siren",
  },
  {
    Date: "07/09/23",
    Word: "serum",
  },
  {
    Date: "07/10/23",
    Word: "milky",
  },
  {
    Date: "07/11/23",
    Word: "aback",
  },
  {
    Date: "07/12/23",
    Word: "drape",
  },
  {
    Date: "07/13/23",
    Word: "split",
  },
  {
    Date: "07/14/23",
    Word: "house",
  },
  {
    Date: "07/15/23",
    Word: "audio",
  },
  {
    Date: "07/16/23",
    Word: "amply",
  },
  {
    Date: "07/17/23",
    Word: "clasp",
  },
  {
    Date: "07/18/23",
    Word: "whale",
  },
  {
    Date: "07/19/23",
    Word: "sneak",
  },
  {
    Date: "07/20/23",
    Word: "older",
  },
  {
    Date: "07/21/23",
    Word: "adult",
  },
  {
    Date: "07/22/23",
    Word: "repel",
  },
  {
    Date: "07/23/23",
    Word: "speak",
  },
  {
    Date: "07/24/23",
    Word: "party",
  },
  {
    Date: "07/25/23",
    Word: "bevel",
  },
  {
    Date: "07/26/23",
    Word: "furor",
  },
  {
    Date: "07/27/23",
    Word: "gnash",
  },
  {
    Date: "07/28/23",
    Word: "sheer",
  },
  {
    Date: "07/29/23",
    Word: "sigma",
  },
  {
    Date: "07/30/23",
    Word: "probe",
  },
  {
    Date: "07/31/23",
    Word: "rehab",
  },
  {
    Date: "08/01/23",
    Word: "bully",
  },
  {
    Date: "08/02/23",
    Word: "jiffy",
  },
  {
    Date: "08/03/23",
    Word: "vapid",
  },
  {
    Date: "08/04/23",
    Word: "clerk",
  },
  {
    Date: "08/05/23",
    Word: "aware",
  },
  {
    Date: "08/06/23",
    Word: "wafer",
  },
  {
    Date: "08/07/23",
    Word: "leafy",
  },
  {
    Date: "08/08/23",
    Word: "donor",
  },
  {
    Date: "08/09/23",
    Word: "riper",
  },
  {
    Date: "08/10/23",
    Word: "close",
  },
  {
    Date: "08/11/23",
    Word: "umbra",
  },
  {
    Date: "08/12/23",
    Word: "exile",
  },
  {
    Date: "08/13/23",
    Word: "acute",
  },
  {
    Date: "08/14/23",
    Word: "adept",
  },
  {
    Date: "08/15/23",
    Word: "wound",
  },
  {
    Date: "08/16/23",
    Word: "paler",
  },
  {
    Date: "08/17/23",
    Word: "tangy",
  },
  {
    Date: "08/18/23",
    Word: "etude",
  },
  {
    Date: "08/19/23",
    Word: "clone",
  },
  {
    Date: "08/20/23",
    Word: "fluid",
  },
  {
    Date: "08/21/23",
    Word: "legal",
  },
  {
    Date: "08/22/23",
    Word: "manor",
  },
  {
    Date: "08/23/23",
    Word: "decay",
  },
  {
    Date: "08/24/23",
    Word: "write",
  },
  {
    Date: "08/25/23",
    Word: "piper",
  },
  {
    Date: "08/26/23",
    Word: "embed",
  },
  {
    Date: "08/27/23",
    Word: "reuse",
  },
  {
    Date: "08/28/23",
    Word: "ultra",
  },
  {
    Date: "08/29/23",
    Word: "libel",
  },
  {
    Date: "08/30/23",
    Word: "virus",
  },
  {
    Date: "08/31/23",
    Word: "bacon",
  },
  {
    Date: "09/01/23",
    Word: "fresh",
  },
  {
    Date: "09/02/23",
    Word: "snail",
  },
  {
    Date: "09/03/23",
    Word: "beget",
  },
  {
    Date: "09/04/23",
    Word: "diver",
  },
  {
    Date: "09/05/23",
    Word: "poise",
  },
  {
    Date: "09/06/23",
    Word: "plume",
  },
  {
    Date: "09/07/23",
    Word: "pagan",
  },
  {
    Date: "09/08/23",
    Word: "guard",
  },
  {
    Date: "09/09/23",
    Word: "geeky",
  },
  {
    Date: "09/10/23",
    Word: "berth",
  },
  {
    Date: "09/11/23",
    Word: "evict",
  },
  {
    Date: "09/12/23",
    Word: "blimp",
  },
  {
    Date: "09/13/23",
    Word: "grade",
  },
  {
    Date: "09/14/23",
    Word: "shard",
  },
  {
    Date: "09/15/23",
    Word: "verso",
  },
  {
    Date: "09/16/23",
    Word: "voter",
  },
  {
    Date: "09/17/23",
    Word: "pulpy",
  },
  {
    Date: "09/18/23",
    Word: "range",
  },
  {
    Date: "09/19/23",
    Word: "drawl",
  },
  {
    Date: "09/20/23",
    Word: "voila",
  },
  {
    Date: "09/21/23",
    Word: "fiend",
  },
  {
    Date: "09/22/23",
    Word: "bossy",
  },
  {
    Date: "09/23/23",
    Word: "brick",
  },
  {
    Date: "09/24/23",
    Word: "tiger",
  },
  {
    Date: "09/25/23",
    Word: "level",
  },
  {
    Date: "09/26/23",
    Word: "sixth",
  },
  {
    Date: "09/27/23",
    Word: "goose",
  },
  {
    Date: "09/28/23",
    Word: "tweet",
  },
  {
    Date: "09/29/23",
    Word: "trope",
  },
  {
    Date: "09/30/23",
    Word: "purge",
  },
  {
    Date: "10/01/23",
    Word: "pouch",
  },
  {
    Date: "10/02/23",
    Word: "bleat",
  },
  {
    Date: "10/03/23",
    Word: "pansy",
  },
  {
    Date: "10/04/23",
    Word: "toddy",
  },
  {
    Date: "10/05/23",
    Word: "graph",
  },
  {
    Date: "10/06/23",
    Word: "worth",
  },
  {
    Date: "10/07/23",
    Word: "gusto",
  },
  {
    Date: "10/08/23",
    Word: "woven",
  },
  {
    Date: "10/09/23",
    Word: "revel",
  },
  {
    Date: "10/10/23",
    Word: "joist",
  },
  {
    Date: "10/11/23",
    Word: "court",
  },
  {
    Date: "10/12/23",
    Word: "cloth",
  },
  {
    Date: "10/13/23",
    Word: "thief",
  },
  {
    Date: "10/14/23",
    Word: "maybe",
  },
  {
    Date: "10/15/23",
    Word: "dodgy",
  },
  {
    Date: "10/16/23",
    Word: "blood",
  },
  {
    Date: "10/17/23",
    Word: "mangy",
  },
  {
    Date: "10/18/23",
    Word: "crier",
  },
  {
    Date: "10/19/23",
    Word: "bleak",
  },
  {
    Date: "10/20/23",
    Word: "vegan",
  },
  {
    Date: "10/21/23",
    Word: "saucy",
  },
  {
    Date: "10/22/23",
    Word: "lynch",
  },
  {
    Date: "10/23/23",
    Word: "squad",
  },
  {
    Date: "10/24/23",
    Word: "ninth",
  },
  {
    Date: "10/25/23",
    Word: "urine",
  },
  {
    Date: "10/26/23",
    Word: "stare",
  },
  {
    Date: "10/27/23",
    Word: "comfy",
  },
  {
    Date: "10/28/23",
    Word: "eerie",
  },
  {
    Date: "10/29/23",
    Word: "balmy",
  },
  {
    Date: "10/30/23",
    Word: "angry",
  },
  {
    Date: "10/31/23",
    Word: "youth",
  },
  {
    Date: "11/01/23",
    Word: "ledge",
  },
  {
    Date: "11/02/23",
    Word: "maize",
  },
  {
    Date: "11/03/23",
    Word: "nasty",
  },
  {
    Date: "11/04/23",
    Word: "threw",
  },
  {
    Date: "11/05/23",
    Word: "grind",
  },
  {
    Date: "11/06/23",
    Word: "forum",
  },
  {
    Date: "11/07/23",
    Word: "swing",
  },
  {
    Date: "11/08/23",
    Word: "berry",
  },
  {
    Date: "11/09/23",
    Word: "plied",
  },
  {
    Date: "11/10/23",
    Word: "cabby",
  },
  {
    Date: "11/11/23",
    Word: "cabin",
  },
  {
    Date: "11/12/23",
    Word: "swept",
  },
  {
    Date: "11/13/23",
    Word: "taste",
  },
  {
    Date: "11/14/23",
    Word: "cumin",
  },
  {
    Date: "11/15/23",
    Word: "hazel",
  },
  {
    Date: "11/16/23",
    Word: "leave",
  },
  {
    Date: "11/17/23",
    Word: "chime",
  },
  {
    Date: "11/18/23",
    Word: "ester",
  },
  {
    Date: "11/19/23",
    Word: "rural",
  },
  {
    Date: "11/20/23",
    Word: "realm",
  },
  {
    Date: "11/21/23",
    Word: "stout",
  },
  {
    Date: "11/22/23",
    Word: "those",
  },
  {
    Date: "11/23/23",
    Word: "novel",
  },
  {
    Date: "11/24/23",
    Word: "dandy",
  },
  {
    Date: "11/25/23",
    Word: "molar",
  },
  {
    Date: "11/26/23",
    Word: "bench",
  },
  {
    Date: "11/27/23",
    Word: "terse",
  },
  {
    Date: "11/28/23",
    Word: "arson",
  },
  {
    Date: "11/29/23",
    Word: "where",
  },
  {
    Date: "11/30/23",
    Word: "stilt",
  },
  {
    Date: "12/01/23",
    Word: "viper",
  },
  {
    Date: "12/02/23",
    Word: "qualm",
  },
  {
    Date: "12/03/23",
    Word: "shelf",
  },
  {
    Date: "12/04/23",
    Word: "stray",
  },
  {
    Date: "12/05/23",
    Word: "first",
  },
  {
    Date: "12/06/23",
    Word: "wacky",
  },
  {
    Date: "12/07/23",
    Word: "abled",
  },
  {
    Date: "12/08/23",
    Word: "iliac",
  },
  {
    Date: "12/09/23",
    Word: "steed",
  },
  {
    Date: "12/10/23",
    Word: "vouch",
  },
  {
    Date: "12/11/23",
    Word: "antic",
  },
  {
    Date: "12/12/23",
    Word: "stump",
  },
  {
    Date: "12/13/23",
    Word: "touch",
  },
  {
    Date: "12/14/23",
    Word: "count",
  },
  {
    Date: "12/15/23",
    Word: "start",
  },
  {
    Date: "12/16/23",
    Word: "dingy",
  },
  {
    Date: "12/17/23",
    Word: "nylon",
  },
  {
    Date: "12/18/23",
    Word: "grasp",
  },
  {
    Date: "12/19/23",
    Word: "sushi",
  },
  {
    Date: "12/20/23",
    Word: "spoil",
  },
  {
    Date: "12/21/23",
    Word: "human",
  },
  {
    Date: "12/22/23",
    Word: "regal",
  },
  {
    Date: "12/23/23",
    Word: "smack",
  },
  {
    Date: "12/24/23",
    Word: "gamer",
  },
  {
    Date: "12/25/23",
    Word: "ebony",
  },
  {
    Date: "12/26/23",
    Word: "gummy",
  },
  {
    Date: "12/27/23",
    Word: "canal",
  },
  {
    Date: "12/28/23",
    Word: "frock",
  },
  {
    Date: "12/29/23",
    Word: "slope",
  },
  {
    Date: "12/30/23",
    Word: "enact",
  },
  {
    Date: "12/31/23",
    Word: "slide",
  },
  {
    Date: "01/01/24",
    Word: "spain",
  },
  {
    Date: "01/02/24",
    Word: "slant",
  },
  {
    Date: "01/03/24",
    Word: "entry",
  },
  {
    Date: "01/04/24",
    Word: "brake",
  },
  {
    Date: "01/05/24",
    Word: "needy",
  },
  {
    Date: "01/06/24",
    Word: "badge",
  },
  {
    Date: "01/07/24",
    Word: "curvy",
  },
  {
    Date: "01/08/24",
    Word: "swore",
  },
  {
    Date: "01/09/24",
    Word: "spore",
  },
  {
    Date: "01/10/24",
    Word: "lingo",
  },
  {
    Date: "01/11/24",
    Word: "greet",
  },
  {
    Date: "01/12/24",
    Word: "icing",
  },
  {
    Date: "01/13/24",
    Word: "cramp",
  },
  {
    Date: "01/14/24",
    Word: "crime",
  },
  {
    Date: "01/15/24",
    Word: "flier",
  },
  {
    Date: "01/16/24",
    Word: "crazy",
  },
  {
    Date: "01/17/24",
    Word: "cling",
  },
  {
    Date: "01/18/24",
    Word: "dowdy",
  },
  {
    Date: "01/19/24",
    Word: "dogma",
  },
  {
    Date: "01/20/24",
    Word: "tower",
  },
  {
    Date: "01/21/24",
    Word: "tumor",
  },
  {
    Date: "01/22/24",
    Word: "patch",
  },
  {
    Date: "01/23/24",
    Word: "vague",
  },
  {
    Date: "01/24/24",
    Word: "worse",
  },
  {
    Date: "01/25/24",
    Word: "exact",
  },
  {
    Date: "01/26/24",
    Word: "vomit",
  },
  {
    Date: "01/27/24",
    Word: "chess",
  },
  {
    Date: "01/28/24",
    Word: "chief",
  },
  {
    Date: "01/29/24",
    Word: "relax",
  },
  {
    Date: "01/30/24",
    Word: "cider",
  },
  {
    Date: "01/31/24",
    Word: "humus",
  },
  {
    Date: "02/01/24",
    Word: "chute",
  },
  {
    Date: "02/02/24",
    Word: "claim",
  },
  {
    Date: "02/03/24",
    Word: "trunk",
  },
  {
    Date: "02/04/24",
    Word: "power",
  },
  {
    Date: "02/05/24",
    Word: "array",
  },
  {
    Date: "02/06/24",
    Word: "cower",
  },
  {
    Date: "02/07/24",
    Word: "proof",
  },
  {
    Date: "02/08/24",
    Word: "taint",
  },
  {
    Date: "02/09/24",
    Word: "snarl",
  },
  {
    Date: "02/10/24",
    Word: "whose",
  },
  {
    Date: "02/11/24",
    Word: "suing",
  },
  {
    Date: "02/12/24",
    Word: "blame",
  },
  {
    Date: "02/13/24",
    Word: "sixty",
  },
  {
    Date: "02/14/24",
    Word: "chuck",
  },
  {
    Date: "02/15/24",
    Word: "fling",
  },
  {
    Date: "02/16/24",
    Word: "trail",
  },
  {
    Date: "02/17/24",
    Word: "sandy",
  },
  {
    Date: "02/18/24",
    Word: "weave",
  },
  {
    Date: "02/19/24",
    Word: "built",
  },
  {
    Date: "02/20/24",
    Word: "dance",
  },
  {
    Date: "02/21/24",
    Word: "bloke",
  },
  {
    Date: "02/22/24",
    Word: "theft",
  },
  {
    Date: "02/23/24",
    Word: "droop",
  },
  {
    Date: "02/24/24",
    Word: "buddy",
  },
  {
    Date: "02/25/24",
    Word: "lorry",
  },
  {
    Date: "02/26/24",
    Word: "screw",
  },
  {
    Date: "02/27/24",
    Word: "shank",
  },
  {
    Date: "02/28/24",
    Word: "slump",
  },
  {
    Date: "02/29/24",
    Word: "fewer",
  },
  {
    Date: "03/01/24",
    Word: "farce",
  },
  {
    Date: "03/02/24",
    Word: "blurt",
  },
  {
    Date: "03/03/24",
    Word: "south",
  },
  {
    Date: "03/04/24",
    Word: "moron",
  },
  {
    Date: "03/05/24",
    Word: "drone",
  },
  {
    Date: "03/06/24",
    Word: "begin",
  },
  {
    Date: "03/07/24",
    Word: "alien",
  },
  {
    Date: "03/08/24",
    Word: "ocean",
  },
  {
    Date: "03/09/24",
    Word: "rover",
  },
  {
    Date: "03/10/24",
    Word: "pedal",
  },
  {
    Date: "03/11/24",
    Word: "prawn",
  },
  {
    Date: "03/12/24",
    Word: "guilt",
  },
  {
    Date: "03/13/24",
    Word: "naive",
  },
  {
    Date: "03/14/24",
    Word: "vinyl",
  },
  {
    Date: "03/15/24",
    Word: "puppy",
  },
  {
    Date: "03/16/24",
    Word: "botch",
  },
  {
    Date: "03/17/24",
    Word: "edict",
  },
  {
    Date: "03/18/24",
    Word: "steam",
  },
  {
    Date: "03/19/24",
    Word: "image",
  },
  {
    Date: "03/20/24",
    Word: "brute",
  },
  {
    Date: "03/21/24",
    Word: "diode",
  },
  {
    Date: "03/22/24",
    Word: "media",
  },
  {
    Date: "03/23/24",
    Word: "chide",
  },
  {
    Date: "03/24/24",
    Word: "thump",
  },
  {
    Date: "03/25/24",
    Word: "hoard",
  },
  {
    Date: "03/26/24",
    Word: "plank",
  },
  {
    Date: "03/27/24",
    Word: "organ",
  },
  {
    Date: "03/28/24",
    Word: "badly",
  },
  {
    Date: "03/29/24",
    Word: "glass",
  },
  {
    Date: "03/30/24",
    Word: "caput",
  },
  {
    Date: "03/31/24",
    Word: "merit",
  },
  {
    Date: "04/01/24",
    Word: "lurch",
  },
  {
    Date: "04/02/24",
    Word: "sweep",
  },
  {
    Date: "04/03/24",
    Word: "white",
  },
  {
    Date: "04/04/24",
    Word: "going",
  },
  {
    Date: "04/05/24",
    Word: "snowy",
  },
  {
    Date: "04/06/24",
    Word: "shiny",
  },
  {
    Date: "04/07/24",
    Word: "crust",
  },
  {
    Date: "04/08/24",
    Word: "pause",
  },
  {
    Date: "04/09/24",
    Word: "trawl",
  },
  {
    Date: "04/10/24",
    Word: "tabby",
  },
  {
    Date: "04/11/24",
    Word: "civil",
  },
  {
    Date: "04/12/24",
    Word: "hasty",
  },
  {
    Date: "04/13/24",
    Word: "outdo",
  },
  {
    Date: "04/14/24",
    Word: "askew",
  },
  {
    Date: "04/15/24",
    Word: "shine",
  },
  {
    Date: "04/16/24",
    Word: "bonus",
  },
  {
    Date: "04/17/24",
    Word: "fleet",
  },
  {
    Date: "04/18/24",
    Word: "altar",
  },
  {
    Date: "04/19/24",
    Word: "canon",
  },
  {
    Date: "04/20/24",
    Word: "axiom",
  },
  {
    Date: "04/21/24",
    Word: "renew",
  },
  {
    Date: "04/22/24",
    Word: "clean",
  },
  {
    Date: "04/23/24",
    Word: "spunk",
  },
  {
    Date: "04/24/24",
    Word: "vivid",
  },
  {
    Date: "04/25/24",
    Word: "buyer",
  },
  {
    Date: "04/26/24",
    Word: "loser",
  },
  {
    Date: "04/27/24",
    Word: "flack",
  },
  {
    Date: "04/28/24",
    Word: "quasi",
  },
  {
    Date: "04/29/24",
    Word: "strip",
  },
  {
    Date: "04/30/24",
    Word: "tenet",
  },
  {
    Date: "05/01/24",
    Word: "front",
  },
  {
    Date: "05/02/24",
    Word: "point",
  },
  {
    Date: "05/03/24",
    Word: "brash",
  },
  {
    Date: "05/04/24",
    Word: "gripe",
  },
  {
    Date: "05/05/24",
    Word: "girly",
  },
  {
    Date: "05/06/24",
    Word: "river",
  },
  {
    Date: "05/07/24",
    Word: "latch",
  },
  {
    Date: "05/08/24",
    Word: "parer",
  },
  {
    Date: "05/09/24",
    Word: "plead",
  },
  {
    Date: "05/10/24",
    Word: "befit",
  },
  {
    Date: "05/11/24",
    Word: "brush",
  },
  {
    Date: "05/12/24",
    Word: "craze",
  },
  {
    Date: "05/13/24",
    Word: "fable",
  },
  {
    Date: "05/14/24",
    Word: "token",
  },
  {
    Date: "05/15/24",
    Word: "stock",
  },
  {
    Date: "05/16/24",
    Word: "braid",
  },
  {
    Date: "05/17/24",
    Word: "smith",
  },
  {
    Date: "05/18/24",
    Word: "ethic",
  },
  {
    Date: "05/19/24",
    Word: "field",
  },
  {
    Date: "05/20/24",
    Word: "stand",
  },
  {
    Date: "05/21/24",
    Word: "equal",
  },
  {
    Date: "05/22/24",
    Word: "smile",
  },
  {
    Date: "05/23/24",
    Word: "frown",
  },
  {
    Date: "05/24/24",
    Word: "noble",
  },
  {
    Date: "05/25/24",
    Word: "tonic",
  },
  {
    Date: "05/26/24",
    Word: "chunk",
  },
  {
    Date: "05/27/24",
    Word: "dusty",
  },
  {
    Date: "05/28/24",
    Word: "canny",
  },
  {
    Date: "05/29/24",
    Word: "mason",
  },
  {
    Date: "05/30/24",
    Word: "boule",
  },
  {
    Date: "05/31/24",
    Word: "froze",
  },
  {
    Date: "06/01/24",
    Word: "alloy",
  },
  {
    Date: "06/02/24",
    Word: "sonic",
  },
  {
    Date: "06/03/24",
    Word: "coven",
  },
  {
    Date: "06/04/24",
    Word: "folly",
  },
  {
    Date: "06/05/24",
    Word: "piano",
  },
  {
    Date: "06/06/24",
    Word: "wield",
  },
  {
    Date: "06/07/24",
    Word: "whack",
  },
  {
    Date: "06/08/24",
    Word: "basin",
  },
  {
    Date: "06/09/24",
    Word: "spank",
  },
  {
    Date: "06/10/24",
    Word: "elegy",
  },
  {
    Date: "06/11/24",
    Word: "notch",
  },
  {
    Date: "06/12/24",
    Word: "guide",
  },
  {
    Date: "06/13/24",
    Word: "motor",
  },
  {
    Date: "06/14/24",
    Word: "chili",
  },
  {
    Date: "06/15/24",
    Word: "easel",
  },
  {
    Date: "06/16/24",
    Word: "femur",
  },
  {
    Date: "06/17/24",
    Word: "candy",
  },
  {
    Date: "06/18/24",
    Word: "lucid",
  },
  {
    Date: "06/19/24",
    Word: "spiel",
  },
  {
    Date: "06/20/24",
    Word: "awash",
  },
  {
    Date: "06/21/24",
    Word: "welsh",
  },
  {
    Date: "06/22/24",
    Word: "glint",
  },
  {
    Date: "06/23/24",
    Word: "widow",
  },
  {
    Date: "06/24/24",
    Word: "goofy",
  },
  {
    Date: "06/25/24",
    Word: "matey",
  },
  {
    Date: "06/26/24",
    Word: "geese",
  },
  {
    Date: "06/27/24",
    Word: "grunt",
  },
  {
    Date: "06/28/24",
    Word: "pearl",
  },
  {
    Date: "06/29/24",
    Word: "craft",
  },
  {
    Date: "06/30/24",
    Word: "patsy",
  },
  {
    Date: "07/01/24",
    Word: "input",
  },
  {
    Date: "07/02/24",
    Word: "alike",
  },
  {
    Date: "07/03/24",
    Word: "brace",
  },
  {
    Date: "07/04/24",
    Word: "pygmy",
  },
  {
    Date: "07/05/24",
    Word: "floss",
  },
  {
    Date: "07/06/24",
    Word: "tense",
  },
  {
    Date: "07/07/24",
    Word: "order",
  },
  {
    Date: "07/08/24",
    Word: "piece",
  },
  {
    Date: "07/09/24",
    Word: "mocha",
  },
  {
    Date: "07/10/24",
    Word: "trout",
  },
  {
    Date: "07/11/24",
    Word: "hunch",
  },
  {
    Date: "07/12/24",
    Word: "petty",
  },
  {
    Date: "07/13/24",
    Word: "curry",
  },
  {
    Date: "07/14/24",
    Word: "apron",
  },
  {
    Date: "07/15/24",
    Word: "crock",
  },
  {
    Date: "07/16/24",
    Word: "hedge",
  },
  {
    Date: "07/17/24",
    Word: "owner",
  },
  {
    Date: "07/18/24",
    Word: "wooly",
  },
  {
    Date: "07/19/24",
    Word: "alarm",
  },
  {
    Date: "07/20/24",
    Word: "brink",
  },
  {
    Date: "07/21/24",
    Word: "honey",
  },
  {
    Date: "07/22/24",
    Word: "sweet",
  },
  {
    Date: "07/23/24",
    Word: "patio",
  },
  {
    Date: "07/24/24",
    Word: "masse",
  },
  {
    Date: "07/25/24",
    Word: "forth",
  },
  {
    Date: "07/26/24",
    Word: "poser",
  },
  {
    Date: "07/27/24",
    Word: "place",
  },
  {
    Date: "07/28/24",
    Word: "shape",
  },
  {
    Date: "07/29/24",
    Word: "sense",
  },
  {
    Date: "07/30/24",
    Word: "ghost",
  },
  {
    Date: "07/31/24",
    Word: "taper",
  },
  {
    Date: "08/01/24",
    Word: "vital",
  },
  {
    Date: "08/02/24",
    Word: "dying",
  },
  {
    Date: "08/03/24",
    Word: "video",
  },
  {
    Date: "08/04/24",
    Word: "spawn",
  },
  {
    Date: "08/05/24",
    Word: "topic",
  },
  {
    Date: "08/06/24",
    Word: "flair",
  },
  {
    Date: "08/07/24",
    Word: "ombre",
  },
  {
    Date: "08/08/24",
    Word: "fella",
  },
  {
    Date: "08/09/24",
    Word: "crook",
  },
  {
    Date: "08/10/24",
    Word: "tramp",
  },
  {
    Date: "08/11/24",
    Word: "triad",
  },
  {
    Date: "08/12/24",
    Word: "tapir",
  },
  {
    Date: "08/13/24",
    Word: "which",
  },
  {
    Date: "08/14/24",
    Word: "bleed",
  },
  {
    Date: "08/15/24",
    Word: "goner",
  },
  {
    Date: "08/16/24",
    Word: "faint",
  },
  {
    Date: "08/17/24",
    Word: "grace",
  },
  {
    Date: "08/18/24",
    Word: "globe",
  },
  {
    Date: "08/19/24",
    Word: "habit",
  },
  {
    Date: "08/20/24",
    Word: "pupil",
  },
  {
    Date: "08/21/24",
    Word: "trust",
  },
  {
    Date: "08/22/24",
    Word: "shell",
  },
  {
    Date: "08/23/24",
    Word: "brown",
  },
  {
    Date: "08/24/24",
    Word: "mango",
  },
  {
    Date: "08/25/24",
    Word: "cameo",
  },
  {
    Date: "08/26/24",
    Word: "nanny",
  },
  {
    Date: "08/27/24",
    Word: "imply",
  },
  {
    Date: "08/28/24",
    Word: "sniff",
  },
  {
    Date: "08/29/24",
    Word: "scion",
  },
  {
    Date: "08/30/24",
    Word: "eject",
  },
  {
    Date: "08/31/24",
    Word: "bugle",
  },
  {
    Date: "09/01/24",
    Word: "nicer",
  },
  {
    Date: "09/02/24",
    Word: "mucus",
  },
  {
    Date: "09/03/24",
    Word: "egret",
  },
  {
    Date: "09/04/24",
    Word: "lobby",
  },
  {
    Date: "09/05/24",
    Word: "sepia",
  },
  {
    Date: "09/06/24",
    Word: "coyly",
  },
  {
    Date: "09/07/24",
    Word: "cacti",
  },
  {
    Date: "09/08/24",
    Word: "cross",
  },
  {
    Date: "09/09/24",
    Word: "labor",
  },
  {
    Date: "09/10/24",
    Word: "taboo",
  },
  {
    Date: "09/11/24",
    Word: "rupee",
  },
  {
    Date: "09/12/24",
    Word: "pleat",
  },
  {
    Date: "09/13/24",
    Word: "spied",
  },
  {
    Date: "09/14/24",
    Word: "fraud",
  },
  {
    Date: "09/15/24",
    Word: "clear",
  },
  {
    Date: "09/16/24",
    Word: "drank",
  },
  {
    Date: "09/17/24",
    Word: "poppy",
  },
  {
    Date: "09/18/24",
    Word: "ionic",
  },
  {
    Date: "09/19/24",
    Word: "skunk",
  },
  {
    Date: "09/20/24",
    Word: "other",
  },
  {
    Date: "09/21/24",
    Word: "lousy",
  },
  {
    Date: "09/22/24",
    Word: "wheat",
  },
  {
    Date: "09/23/24",
    Word: "delve",
  },
  {
    Date: "09/24/24",
    Word: "morph",
  },
  {
    Date: "09/25/24",
    Word: "crepe",
  },
  {
    Date: "09/26/24",
    Word: "apply",
  },
  {
    Date: "09/27/24",
    Word: "wreck",
  },
  {
    Date: "09/28/24",
    Word: "stale",
  },
  {
    Date: "09/29/24",
    Word: "allow",
  },
  {
    Date: "09/30/24",
    Word: "robot",
  },
  {
    Date: "10/01/24",
    Word: "trice",
  },
  {
    Date: "10/02/24",
    Word: "catty",
  },
  {
    Date: "10/03/24",
    Word: "brunt",
  },
  {
    Date: "10/04/24",
    Word: "phase",
  },
  {
    Date: "10/05/24",
    Word: "verse",
  },
  {
    Date: "10/06/24",
    Word: "arise",
  },
  {
    Date: "10/07/24",
    Word: "lupus",
  },
  {
    Date: "10/08/24",
    Word: "smote",
  },
  {
    Date: "10/09/24",
    Word: "tooth",
  },
  {
    Date: "10/10/24",
    Word: "snore",
  },
  {
    Date: "10/11/24",
    Word: "batty",
  },
  {
    Date: "10/12/24",
    Word: "rearm",
  },
  {
    Date: "10/13/24",
    Word: "sleet",
  },
  {
    Date: "10/14/24",
    Word: "pasty",
  },
  {
    Date: "10/15/24",
    Word: "valet",
  },
  {
    Date: "10/16/24",
    Word: "undue",
  },
  {
    Date: "10/17/24",
    Word: "clump",
  },
  {
    Date: "10/18/24",
    Word: "fried",
  },
  {
    Date: "10/19/24",
    Word: "cynic",
  },
  {
    Date: "10/20/24",
    Word: "dough",
  },
  {
    Date: "10/21/24",
    Word: "algae",
  },
  {
    Date: "10/22/24",
    Word: "aorta",
  },
  {
    Date: "10/23/24",
    Word: "slain",
  },
  {
    Date: "10/24/24",
    Word: "judge",
  },
  {
    Date: "10/25/24",
    Word: "fizzy",
  },
  {
    Date: "10/26/24",
    Word: "allay",
  },
  {
    Date: "10/27/24",
    Word: "conch",
  },
  {
    Date: "10/28/24",
    Word: "snout",
  },
  {
    Date: "10/29/24",
    Word: "width",
  },
  {
    Date: "10/30/24",
    Word: "cleft",
  },
  {
    Date: "10/31/24",
    Word: "epoxy",
  },
  {
    Date: "11/01/24",
    Word: "growl",
  },
  {
    Date: "11/02/24",
    Word: "worry",
  },
  {
    Date: "11/03/24",
    Word: "slang",
  },
  {
    Date: "11/04/24",
    Word: "booth",
  },
  {
    Date: "11/05/24",
    Word: "fritz",
  },
  {
    Date: "11/06/24",
    Word: "black",
  },
  {
    Date: "11/07/24",
    Word: "amass",
  },
  {
    Date: "11/08/24",
    Word: "sulky",
  },
  {
    Date: "11/09/24",
    Word: "skimp",
  },
  {
    Date: "11/10/24",
    Word: "chaos",
  },
  {
    Date: "11/11/24",
    Word: "crept",
  },
  {
    Date: "11/12/24",
    Word: "salve",
  },
  {
    Date: "11/13/24",
    Word: "scare",
  },
  {
    Date: "11/14/24",
    Word: "drama",
  },
  {
    Date: "11/15/24",
    Word: "solar",
  },
  {
    Date: "11/16/24",
    Word: "quoth",
  },
  {
    Date: "11/17/24",
    Word: "giddy",
  },
  {
    Date: "11/18/24",
    Word: "usage",
  },
  {
    Date: "11/19/24",
    Word: "feral",
  },
  {
    Date: "11/20/24",
    Word: "verge",
  },
  {
    Date: "11/21/24",
    Word: "carry",
  },
  {
    Date: "11/22/24",
    Word: "rebut",
  },
  {
    Date: "11/23/24",
    Word: "train",
  },
  {
    Date: "11/24/24",
    Word: "adapt",
  },
  {
    Date: "11/25/24",
    Word: "flare",
  },
  {
    Date: "11/26/24",
    Word: "vixen",
  },
  {
    Date: "11/27/24",
    Word: "doubt",
  },
  {
    Date: "11/28/24",
    Word: "bunch",
  },
  {
    Date: "11/29/24",
    Word: "nepal",
  },
  {
    Date: "11/30/24",
    Word: "caste",
  },
  {
    Date: "12/01/24",
    Word: "beady",
  },
  {
    Date: "12/02/24",
    Word: "rivet",
  },
  {
    Date: "12/03/24",
    Word: "think",
  },
  {
    Date: "12/04/24",
    Word: "tubal",
  },
  {
    Date: "12/05/24",
    Word: "royal",
  },
  {
    Date: "12/06/24",
    Word: "miser",
  },
  {
    Date: "12/07/24",
    Word: "swoon",
  },
  {
    Date: "12/08/24",
    Word: "sinew",
  },
  {
    Date: "12/09/24",
    Word: "ensue",
  },
  {
    Date: "12/10/24",
    Word: "lofty",
  },
  {
    Date: "12/11/24",
    Word: "newer",
  },
  {
    Date: "12/12/24",
    Word: "clang",
  },
  {
    Date: "12/13/24",
    Word: "occur",
  },
  {
    Date: "12/14/24",
    Word: "shawl",
  },
  {
    Date: "12/15/24",
    Word: "ramen",
  },
  {
    Date: "12/16/24",
    Word: "space",
  },
  {
    Date: "12/17/24",
    Word: "dryly",
  },
  {
    Date: "12/18/24",
    Word: "drink",
  },
  {
    Date: "12/19/24",
    Word: "lover",
  },
  {
    Date: "12/20/24",
    Word: "ladle",
  },
  {
    Date: "12/21/24",
    Word: "bayou",
  },
  {
    Date: "12/22/24",
    Word: "sloop",
  },
  {
    Date: "12/23/24",
    Word: "glide",
  },
  {
    Date: "12/24/24",
    Word: "usurp",
  },
  {
    Date: "12/25/24",
    Word: "decor",
  },
  {
    Date: "12/26/24",
    Word: "silky",
  },
  {
    Date: "12/27/24",
    Word: "stall",
  },
  {
    Date: "12/28/24",
    Word: "sweat",
  },
  {
    Date: "12/29/24",
    Word: "truss",
  },
  {
    Date: "12/30/24",
    Word: "press",
  },
  {
    Date: "12/31/24",
    Word: "wider",
  },
  {
    Date: "01/01/25",
    Word: "creed",
  },
  {
    Date: "01/02/25",
    Word: "eater",
  },
  {
    Date: "01/03/25",
    Word: "drown",
  },
  {
    Date: "01/04/25",
    Word: "randy",
  },
  {
    Date: "01/05/25",
    Word: "trace",
  },
  {
    Date: "01/06/25",
    Word: "icily",
  },
  {
    Date: "01/07/25",
    Word: "fancy",
  },
  {
    Date: "01/08/25",
    Word: "sleek",
  },
  {
    Date: "01/09/25",
    Word: "vista",
  },
  {
    Date: "01/10/25",
    Word: "shake",
  },
  {
    Date: "01/11/25",
    Word: "carat",
  },
  {
    Date: "01/12/25",
    Word: "spasm",
  },
  {
    Date: "01/13/25",
    Word: "piety",
  },
  {
    Date: "01/14/25",
    Word: "snoop",
  },
  {
    Date: "01/15/25",
    Word: "decoy",
  },
  {
    Date: "01/16/25",
    Word: "horde",
  },
  {
    Date: "01/17/25",
    Word: "truer",
  },
  {
    Date: "01/18/25",
    Word: "moral",
  },
  {
    Date: "01/19/25",
    Word: "quilt",
  },
  {
    Date: "01/20/25",
    Word: "prick",
  },
  {
    Date: "01/21/25",
    Word: "junta",
  },
  {
    Date: "01/22/25",
    Word: "crick",
  },
  {
    Date: "01/23/25",
    Word: "derby",
  },
  {
    Date: "01/24/25",
    Word: "click",
  },
  {
    Date: "01/25/25",
    Word: "flock",
  },
  {
    Date: "01/26/25",
    Word: "corny",
  },
  {
    Date: "01/27/25",
    Word: "dimly",
  },
  {
    Date: "01/28/25",
    Word: "savvy",
  },
  {
    Date: "01/29/25",
    Word: "risky",
  },
  {
    Date: "01/30/25",
    Word: "dully",
  },
  {
    Date: "01/31/25",
    Word: "hairy",
  },
  {
    Date: "02/01/25",
    Word: "shoot",
  },
  {
    Date: "02/02/25",
    Word: "joust",
  },
  {
    Date: "02/03/25",
    Word: "jewel",
  },
  {
    Date: "02/04/25",
    Word: "wreak",
  },
  {
    Date: "02/05/25",
    Word: "exist",
  },
  {
    Date: "02/06/25",
    Word: "bongo",
  },
  {
    Date: "02/07/25",
    Word: "chest",
  },
  {
    Date: "02/08/25",
    Word: "often",
  },
  {
    Date: "02/09/25",
    Word: "rower",
  },
  {
    Date: "02/10/25",
    Word: "stuck",
  },
  {
    Date: "02/11/25",
    Word: "whiny",
  },
  {
    Date: "02/12/25",
    Word: "doing",
  },
  {
    Date: "02/13/25",
    Word: "locus",
  },
  {
    Date: "02/14/25",
    Word: "belch",
  },
  {
    Date: "02/15/25",
    Word: "ninja",
  },
  {
    Date: "02/16/25",
    Word: "curio",
  },
  {
    Date: "02/17/25",
    Word: "rouge",
  },
  {
    Date: "02/18/25",
    Word: "grave",
  },
  {
    Date: "02/19/25",
    Word: "filmy",
  },
  {
    Date: "02/20/25",
    Word: "month",
  },
  {
    Date: "02/21/25",
    Word: "swirl",
  },
  {
    Date: "02/22/25",
    Word: "drill",
  },
  {
    Date: "02/23/25",
    Word: "react",
  },
  {
    Date: "02/24/25",
    Word: "stunk",
  },
  {
    Date: "02/25/25",
    Word: "ruder",
  },
  {
    Date: "02/26/25",
    Word: "lying",
  },
  {
    Date: "02/27/25",
    Word: "exalt",
  },
  {
    Date: "02/28/25",
    Word: "night",
  },
  {
    Date: "03/01/25",
    Word: "truce",
  },
  {
    Date: "03/02/25",
    Word: "nymph",
  },
  {
    Date: "03/03/25",
    Word: "conic",
  },
  {
    Date: "03/04/25",
    Word: "blast",
  },
  {
    Date: "03/05/25",
    Word: "murky",
  },
  {
    Date: "03/06/25",
    Word: "usual",
  },
  {
    Date: "03/07/25",
    Word: "gland",
  },
  {
    Date: "03/08/25",
    Word: "butte",
  },
  {
    Date: "03/09/25",
    Word: "stack",
  },
  {
    Date: "03/10/25",
    Word: "stove",
  },
  {
    Date: "03/11/25",
    Word: "booty",
  },
  {
    Date: "03/12/25",
    Word: "queer",
  },
  {
    Date: "03/13/25",
    Word: "elfin",
  },
  {
    Date: "03/14/25",
    Word: "leant",
  },
  {
    Date: "03/15/25",
    Word: "cavil",
  },
  {
    Date: "03/16/25",
    Word: "perch",
  },
  {
    Date: "03/17/25",
    Word: "intro",
  },
  {
    Date: "03/18/25",
    Word: "betel",
  },
  {
    Date: "03/19/25",
    Word: "throw",
  },
  {
    Date: "03/20/25",
    Word: "snort",
  },
  {
    Date: "03/21/25",
    Word: "biddy",
  },
  {
    Date: "03/22/25",
    Word: "crump",
  },
  {
    Date: "03/23/25",
    Word: "retro",
  },
  {
    Date: "03/24/25",
    Word: "agora",
  },
  {
    Date: "03/25/25",
    Word: "primo",
  },
  {
    Date: "03/26/25",
    Word: "demur",
  },
  {
    Date: "03/27/25",
    Word: "alone",
  },
  {
    Date: "03/28/25",
    Word: "choke",
  },
  {
    Date: "03/29/25",
    Word: "timid",
  },
  {
    Date: "03/30/25",
    Word: "dowry",
  },
  {
    Date: "03/31/25",
    Word: "quark",
  },
  {
    Date: "04/01/25",
    Word: "roomy",
  },
  {
    Date: "04/02/25",
    Word: "crass",
  },
  {
    Date: "04/03/25",
    Word: "cliff",
  },
  {
    Date: "04/04/25",
    Word: "mural",
  },
  {
    Date: "04/05/25",
    Word: "spout",
  },
  {
    Date: "04/06/25",
    Word: "agony",
  },
  {
    Date: "04/07/25",
    Word: "crowd",
  },
  {
    Date: "04/08/25",
    Word: "began",
  },
  {
    Date: "04/09/25",
    Word: "vying",
  },
  {
    Date: "04/10/25",
    Word: "shalt",
  },
  {
    Date: "04/11/25",
    Word: "knelt",
  },
  {
    Date: "04/12/25",
    Word: "steak",
  },
  {
    Date: "04/13/25",
    Word: "right",
  },
  {
    Date: "04/14/25",
    Word: "reset",
  },
  {
    Date: "04/15/25",
    Word: "basil",
  },
  {
    Date: "04/16/25",
    Word: "friar",
  },
  {
    Date: "04/17/25",
    Word: "green",
  },
  {
    Date: "04/18/25",
    Word: "knead",
  },
  {
    Date: "04/19/25",
    Word: "alpha",
  },
  {
    Date: "04/20/25",
    Word: "dozen",
  },
  {
    Date: "04/21/25",
    Word: "lathe",
  },
  {
    Date: "04/22/25",
    Word: "ninny",
  },
  {
    Date: "04/23/25",
    Word: "daunt",
  },
  {
    Date: "04/24/25",
    Word: "genie",
  },
  {
    Date: "04/25/25",
    Word: "leapt",
  },
  {
    Date: "04/26/25",
    Word: "event",
  },
  {
    Date: "04/27/25",
    Word: "opera",
  },
  {
    Date: "04/28/25",
    Word: "semen",
  },
  {
    Date: "04/29/25",
    Word: "groom",
  },
  {
    Date: "04/30/25",
    Word: "spiky",
  },
  {
    Date: "05/01/25",
    Word: "girth",
  },
  {
    Date: "05/02/25",
    Word: "slimy",
  },
  {
    Date: "05/03/25",
    Word: "angle",
  },
  {
    Date: "05/04/25",
    Word: "batch",
  },
  {
    Date: "05/05/25",
    Word: "tepee",
  },
  {
    Date: "05/06/25",
    Word: "madam",
  },
  {
    Date: "05/07/25",
    Word: "scope",
  },
  {
    Date: "05/08/25",
    Word: "dilly",
  },
  {
    Date: "05/09/25",
    Word: "basis",
  },
  {
    Date: "05/10/25",
    Word: "elide",
  },
  {
    Date: "05/11/25",
    Word: "mange",
  },
  {
    Date: "05/12/25",
    Word: "tight",
  },
  {
    Date: "05/13/25",
    Word: "mince",
  },
  {
    Date: "05/14/25",
    Word: "slunk",
  },
  {
    Date: "05/15/25",
    Word: "rumba",
  },
  {
    Date: "05/16/25",
    Word: "shift",
  },
  {
    Date: "05/17/25",
    Word: "sheep",
  },
  {
    Date: "05/18/25",
    Word: "roach",
  },
  {
    Date: "05/19/25",
    Word: "trait",
  },
  {
    Date: "05/20/25",
    Word: "kebab",
  },
  {
    Date: "05/21/25",
    Word: "dwelt",
  },
  {
    Date: "05/22/25",
    Word: "mossy",
  },
  {
    Date: "05/23/25",
    Word: "cried",
  },
  {
    Date: "05/24/25",
    Word: "vicar",
  },
  {
    Date: "05/25/25",
    Word: "heron",
  },
  {
    Date: "05/26/25",
    Word: "lefty",
  },
  {
    Date: "05/27/25",
    Word: "frank",
  },
  {
    Date: "05/28/25",
    Word: "tenor",
  },
  {
    Date: "05/29/25",
    Word: "cheat",
  },
  {
    Date: "05/30/25",
    Word: "posit",
  },
  {
    Date: "05/31/25",
    Word: "comet",
  },
  {
    Date: "06/01/25",
    Word: "borne",
  },
  {
    Date: "06/02/25",
    Word: "stood",
  },
  {
    Date: "06/03/25",
    Word: "stoop",
  },
  {
    Date: "06/04/25",
    Word: "amber",
  },
  {
    Date: "06/05/25",
    Word: "punch",
  },
  {
    Date: "06/06/25",
    Word: "retry",
  },
  {
    Date: "06/07/25",
    Word: "annoy",
  },
  {
    Date: "06/08/25",
    Word: "mirth",
  },
  {
    Date: "06/09/25",
    Word: "heard",
  },
  {
    Date: "06/10/25",
    Word: "newly",
  },
  {
    Date: "06/11/25",
    Word: "price",
  },
  {
    Date: "06/12/25",
    Word: "bobby",
  },
  {
    Date: "06/13/25",
    Word: "bulge",
  },
  {
    Date: "06/14/25",
    Word: "would",
  },
  {
    Date: "06/15/25",
    Word: "scale",
  },
  {
    Date: "06/16/25",
    Word: "vapor",
  },
  {
    Date: "06/17/25",
    Word: "lever",
  },
  {
    Date: "06/18/25",
    Word: "these",
  },
  {
    Date: "06/19/25",
    Word: "plate",
  },
  {
    Date: "06/20/25",
    Word: "scone",
  },
  {
    Date: "06/21/25",
    Word: "filth",
  },
  {
    Date: "06/22/25",
    Word: "again",
  },
  {
    Date: "06/23/25",
    Word: "raise",
  },
  {
    Date: "06/24/25",
    Word: "udder",
  },
  {
    Date: "06/25/25",
    Word: "hater",
  },
  {
    Date: "06/26/25",
    Word: "gourd",
  },
  {
    Date: "06/27/25",
    Word: "crimp",
  },
  {
    Date: "06/28/25",
    Word: "lance",
  },
  {
    Date: "06/29/25",
    Word: "today",
  },
  {
    Date: "06/30/25",
    Word: "musky",
  },
  {
    Date: "07/01/25",
    Word: "thank",
  },
  {
    Date: "07/02/25",
    Word: "swath",
  },
  {
    Date: "07/03/25",
    Word: "motif",
  },
  {
    Date: "07/04/25",
    Word: "creek",
  },
  {
    Date: "07/05/25",
    Word: "state",
  },
  {
    Date: "07/06/25",
    Word: "penne",
  },
  {
    Date: "07/07/25",
    Word: "there",
  },
  {
    Date: "07/08/25",
    Word: "grime",
  },
  {
    Date: "07/09/25",
    Word: "troll",
  },
  {
    Date: "07/10/25",
    Word: "junto",
  },
  {
    Date: "07/11/25",
    Word: "drawn",
  },
  {
    Date: "07/12/25",
    Word: "shrew",
  },
  {
    Date: "07/13/25",
    Word: "thyme",
  },
  {
    Date: "07/14/25",
    Word: "taunt",
  },
  {
    Date: "07/15/25",
    Word: "snide",
  },
  {
    Date: "07/16/25",
    Word: "heady",
  },
  {
    Date: "07/17/25",
    Word: "minus",
  },
  {
    Date: "07/18/25",
    Word: "prude",
  },
  {
    Date: "07/19/25",
    Word: "kappa",
  },
  {
    Date: "07/20/25",
    Word: "diner",
  },
  {
    Date: "07/21/25",
    Word: "bagel",
  },
  {
    Date: "07/22/25",
    Word: "apart",
  },
  {
    Date: "07/23/25",
    Word: "koala",
  },
  {
    Date: "07/24/25",
    Word: "shoal",
  },
  {
    Date: "07/25/25",
    Word: "swamp",
  },
  {
    Date: "07/26/25",
    Word: "genre",
  },
  {
    Date: "07/27/25",
    Word: "solid",
  },
  {
    Date: "07/28/25",
    Word: "beard",
  },
  {
    Date: "07/29/25",
    Word: "shale",
  },
  {
    Date: "07/30/25",
    Word: "scold",
  },
  {
    Date: "07/31/25",
    Word: "thing",
  },
  {
    Date: "08/01/25",
    Word: "grill",
  },
  {
    Date: "08/02/25",
    Word: "opium",
  },
  {
    Date: "08/03/25",
    Word: "waver",
  },
  {
    Date: "08/04/25",
    Word: "fully",
  },
  {
    Date: "08/05/25",
    Word: "demon",
  },
  {
    Date: "08/06/25",
    Word: "lapse",
  },
  {
    Date: "08/07/25",
    Word: "slept",
  },
  {
    Date: "08/08/25",
    Word: "inner",
  },
  {
    Date: "08/09/25",
    Word: "share",
  },
  {
    Date: "08/10/25",
    Word: "essay",
  },
  {
    Date: "08/11/25",
    Word: "elect",
  },
  {
    Date: "08/12/25",
    Word: "sassy",
  },
  {
    Date: "08/13/25",
    Word: "scrum",
  },
  {
    Date: "08/14/25",
    Word: "steal",
  },
  {
    Date: "08/15/25",
    Word: "teary",
  },
  {
    Date: "08/16/25",
    Word: "plain",
  },
  {
    Date: "08/17/25",
    Word: "breed",
  },
  {
    Date: "08/18/25",
    Word: "admit",
  },
  {
    Date: "08/19/25",
    Word: "opine",
  },
  {
    Date: "08/20/25",
    Word: "learn",
  },
  {
    Date: "08/21/25",
    Word: "gamma",
  },
  {
    Date: "08/22/25",
    Word: "spend",
  },
  {
    Date: "08/23/25",
    Word: "gypsy",
  },
  {
    Date: "08/24/25",
    Word: "ashen",
  },
  {
    Date: "08/25/25",
    Word: "dirty",
  },
  {
    Date: "08/26/25",
    Word: "spool",
  },
  {
    Date: "08/27/25",
    Word: "value",
  },
  {
    Date: "08/28/25",
    Word: "jetty",
  },
  {
    Date: "08/29/25",
    Word: "rayon",
  },
  {
    Date: "08/30/25",
    Word: "inbox",
  },
  {
    Date: "08/31/25",
    Word: "slush",
  },
  {
    Date: "09/01/25",
    Word: "alter",
  },
  {
    Date: "09/02/25",
    Word: "shyly",
  },
  {
    Date: "09/03/25",
    Word: "frond",
  },
  {
    Date: "09/04/25",
    Word: "elude",
  },
  {
    Date: "09/05/25",
    Word: "scoop",
  },
  {
    Date: "09/06/25",
    Word: "exert",
  },
  {
    Date: "09/07/25",
    Word: "sewer",
  },
  {
    Date: "09/08/25",
    Word: "blade",
  },
  {
    Date: "09/09/25",
    Word: "slick",
  },
  {
    Date: "09/10/25",
    Word: "unzip",
  },
  {
    Date: "09/11/25",
    Word: "elate",
  },
  {
    Date: "09/12/25",
    Word: "cloak",
  },
  {
    Date: "09/13/25",
    Word: "haute",
  },
  {
    Date: "09/14/25",
    Word: "mound",
  },
  {
    Date: "09/15/25",
    Word: "watch",
  },
  {
    Date: "09/16/25",
    Word: "kayak",
  },
  {
    Date: "09/17/25",
    Word: "fault",
  },
  {
    Date: "09/18/25",
    Word: "drain",
  },
  {
    Date: "09/19/25",
    Word: "stash",
  },
  {
    Date: "09/20/25",
    Word: "color",
  },
  {
    Date: "09/21/25",
    Word: "peach",
  },
  {
    Date: "09/22/25",
    Word: "nudge",
  },
  {
    Date: "09/23/25",
    Word: "cater",
  },
  {
    Date: "09/24/25",
    Word: "defer",
  },
  {
    Date: "09/25/25",
    Word: "leper",
  },
  {
    Date: "09/26/25",
    Word: "amaze",
  },
  {
    Date: "09/27/25",
    Word: "alive",
  },
  {
    Date: "09/28/25",
    Word: "dodge",
  },
  {
    Date: "09/29/25",
    Word: "sloth",
  },
  {
    Date: "09/30/25",
    Word: "sooty",
  },
  {
    Date: "10/01/25",
    Word: "joker",
  },
  {
    Date: "10/02/25",
    Word: "blown",
  },
  {
    Date: "10/03/25",
    Word: "bicep",
  },
  {
    Date: "10/04/25",
    Word: "cairn",
  },
  {
    Date: "10/05/25",
    Word: "corer",
  },
  {
    Date: "10/06/25",
    Word: "radio",
  },
  {
    Date: "10/07/25",
    Word: "bused",
  },
  {
    Date: "10/08/25",
    Word: "lunge",
  },
  {
    Date: "10/09/25",
    Word: "clash",
  },
  {
    Date: "10/10/25",
    Word: "couch",
  },
  {
    Date: "10/11/25",
    Word: "shone",
  },
  {
    Date: "10/12/25",
    Word: "nobly",
  },
  {
    Date: "10/13/25",
    Word: "pecan",
  },
  {
    Date: "10/14/25",
    Word: "unify",
  },
  {
    Date: "10/15/25",
    Word: "modem",
  },
  {
    Date: "10/16/25",
    Word: "spent",
  },
  {
    Date: "10/17/25",
    Word: "gulch",
  },
  {
    Date: "10/18/25",
    Word: "synod",
  },
  {
    Date: "10/19/25",
    Word: "knock",
  },
  {
    Date: "10/20/25",
    Word: "tulip",
  },
  {
    Date: "10/21/25",
    Word: "marsh",
  },
  {
    Date: "10/22/25",
    Word: "woozy",
  },
  {
    Date: "10/23/25",
    Word: "grout",
  },
  {
    Date: "10/24/25",
    Word: "wryly",
  },
  {
    Date: "10/25/25",
    Word: "tweed",
  },
  {
    Date: "10/26/25",
    Word: "grove",
  },
  {
    Date: "10/27/25",
    Word: "smart",
  },
  {
    Date: "10/28/25",
    Word: "teach",
  },
  {
    Date: "10/29/25",
    Word: "pride",
  },
  {
    Date: "10/30/25",
    Word: "prior",
  },
  {
    Date: "10/31/25",
    Word: "stork",
  },
  {
    Date: "11/01/25",
    Word: "major",
  },
  {
    Date: "11/02/25",
    Word: "thick",
  },
  {
    Date: "11/03/25",
    Word: "talon",
  },
  {
    Date: "11/04/25",
    Word: "relay",
  },
  {
    Date: "11/05/25",
    Word: "avert",
  },
  {
    Date: "11/06/25",
    Word: "chalk",
  },
  {
    Date: "11/07/25",
    Word: "attic",
  },
  {
    Date: "11/08/25",
    Word: "mammy",
  },
  {
    Date: "11/09/25",
    Word: "equip",
  },
  {
    Date: "11/10/25",
    Word: "phony",
  },
  {
    Date: "11/11/25",
    Word: "sappy",
  },
  {
    Date: "11/12/25",
    Word: "groan",
  },
  {
    Date: "11/13/25",
    Word: "radii",
  },
  {
    Date: "11/14/25",
    Word: "honor",
  },
  {
    Date: "11/15/25",
    Word: "elbow",
  },
  {
    Date: "11/16/25",
    Word: "crest",
  },
  {
    Date: "11/17/25",
    Word: "bawdy",
  },
  {
    Date: "11/18/25",
    Word: "broth",
  },
  {
    Date: "11/19/25",
    Word: "swift",
  },
  {
    Date: "11/20/25",
    Word: "nurse",
  },
  {
    Date: "11/21/25",
    Word: "scarf",
  },
  {
    Date: "11/22/25",
    Word: "magma",
  },
  {
    Date: "11/23/25",
    Word: "bloom",
  },
  {
    Date: "11/24/25",
    Word: "vigil",
  },
  {
    Date: "11/25/25",
    Word: "minty",
  },
  {
    Date: "11/26/25",
    Word: "rebar",
  },
  {
    Date: "11/27/25",
    Word: "tenth",
  },
  {
    Date: "11/28/25",
    Word: "raven",
  },
  {
    Date: "11/29/25",
    Word: "their",
  },
  {
    Date: "11/30/25",
    Word: "micro",
  },
  {
    Date: "12/01/25",
    Word: "group",
  },
  {
    Date: "12/02/25",
    Word: "flour",
  },
  {
    Date: "12/03/25",
    Word: "bible",
  },
  {
    Date: "12/04/25",
    Word: "afire",
  },
  {
    Date: "12/05/25",
    Word: "syrup",
  },
  {
    Date: "12/06/25",
    Word: "trade",
  },
  {
    Date: "12/07/25",
    Word: "roast",
  },
  {
    Date: "12/08/25",
    Word: "force",
  },
  {
    Date: "12/09/25",
    Word: "rough",
  },
  {
    Date: "12/10/25",
    Word: "curve",
  },
  {
    Date: "12/11/25",
    Word: "forge",
  },
  {
    Date: "12/12/25",
    Word: "jumbo",
  },
  {
    Date: "12/13/25",
    Word: "croup",
  },
  {
    Date: "12/14/25",
    Word: "plunk",
  },
  {
    Date: "12/15/25",
    Word: "pluck",
  },
  {
    Date: "12/16/25",
    Word: "tulle",
  },
  {
    Date: "12/17/25",
    Word: "scoff",
  },
  {
    Date: "12/18/25",
    Word: "board",
  },
  {
    Date: "12/19/25",
    Word: "flash",
  },
  {
    Date: "12/20/25",
    Word: "recur",
  },
  {
    Date: "12/21/25",
    Word: "smelt",
  },
  {
    Date: "12/22/25",
    Word: "sedan",
  },
  {
    Date: "12/23/25",
    Word: "waist",
  },
  {
    Date: "12/24/25",
    Word: "wrung",
  },
  {
    Date: "12/25/25",
    Word: "pulse",
  },
  {
    Date: "12/26/25",
    Word: "local",
  },
  {
    Date: "12/27/25",
    Word: "rabbi",
  },
  {
    Date: "12/28/25",
    Word: "jolly",
  },
  {
    Date: "12/29/25",
    Word: "stick",
  },
  {
    Date: "12/30/25",
    Word: "burnt",
  },
  {
    Date: "12/31/25",
    Word: "guava",
  },
  {
    Date: "01/01/26",
    Word: "upset",
  },
  {
    Date: "01/02/26",
    Word: "fence",
  },
  {
    Date: "01/03/26",
    Word: "ethos",
  },
  {
    Date: "01/04/26",
    Word: "gayly",
  },
  {
    Date: "01/05/26",
    Word: "await",
  },
  {
    Date: "01/06/26",
    Word: "smash",
  },
  {
    Date: "01/07/26",
    Word: "bless",
  },
  {
    Date: "01/08/26",
    Word: "bylaw",
  },
  {
    Date: "01/09/26",
    Word: "blank",
  },
  {
    Date: "01/10/26",
    Word: "grape",
  },
  {
    Date: "01/11/26",
    Word: "latte",
  },
  {
    Date: "01/12/26",
    Word: "asset",
  },
  {
    Date: "01/13/26",
    Word: "visit",
  },
  {
    Date: "01/14/26",
    Word: "mourn",
  },
  {
    Date: "01/15/26",
    Word: "plump",
  },
  {
    Date: "01/16/26",
    Word: "aider",
  },
  {
    Date: "01/17/26",
    Word: "tunic",
  },
  {
    Date: "01/18/26",
    Word: "weird",
  },
  {
    Date: "01/19/26",
    Word: "phone",
  },
  {
    Date: "01/20/26",
    Word: "cobra",
  },
  {
    Date: "01/21/26",
    Word: "munch",
  },
  {
    Date: "01/22/26",
    Word: "spike",
  },
  {
    Date: "01/23/26",
    Word: "ether",
  },
  {
    Date: "01/24/26",
    Word: "untie",
  },
  {
    Date: "01/25/26",
    Word: "suite",
  },
  {
    Date: "01/26/26",
    Word: "curly",
  },
  {
    Date: "01/27/26",
    Word: "splat",
  },
  {
    Date: "01/28/26",
    Word: "polyp",
  },
  {
    Date: "01/29/26",
    Word: "stink",
  },
  {
    Date: "01/30/26",
    Word: "piggy",
  },
  {
    Date: "01/31/26",
    Word: "slurp",
  },
  {
    Date: "02/01/26",
    Word: "wimpy",
  },
  {
    Date: "02/02/26",
    Word: "ennui",
  },
  {
    Date: "02/03/26",
    Word: "shush",
  },
  {
    Date: "02/04/26",
    Word: "duchy",
  },
  {
    Date: "02/05/26",
    Word: "frisk",
  },
  {
    Date: "02/06/26",
    Word: "humor",
  },
  {
    Date: "02/07/26",
    Word: "brood",
  },
  {
    Date: "02/08/26",
    Word: "quota",
  },
  {
    Date: "02/09/26",
    Word: "stair",
  },
  {
    Date: "02/10/26",
    Word: "stalk",
  },
  {
    Date: "02/11/26",
    Word: "fetal",
  },
  {
    Date: "02/12/26",
    Word: "shook",
  },
  {
    Date: "02/13/26",
    Word: "valid",
  },
  {
    Date: "02/14/26",
    Word: "panel",
  },
  {
    Date: "02/15/26",
    Word: "billy",
  },
  {
    Date: "02/16/26",
    Word: "tardy",
  },
  {
    Date: "02/17/26",
    Word: "creme",
  },
  {
    Date: "02/18/26",
    Word: "upper",
  },
  {
    Date: "02/19/26",
    Word: "civic",
  },
  {
    Date: "02/20/26",
    Word: "flute",
  },
  {
    Date: "02/21/26",
    Word: "paddy",
  },
  {
    Date: "02/22/26",
    Word: "knife",
  },
  {
    Date: "02/23/26",
    Word: "gipsy",
  },
  {
    Date: "02/24/26",
    Word: "finer",
  },
  {
    Date: "02/25/26",
    Word: "cheek",
  },
  {
    Date: "02/26/26",
    Word: "atoll",
  },
  {
    Date: "02/27/26",
    Word: "stead",
  },
  {
    Date: "02/28/26",
    Word: "noisy",
  },
  {
    Date: "03/01/26",
    Word: "flood",
  },
  {
    Date: "03/02/26",
    Word: "snack",
  },
  {
    Date: "03/03/26",
    Word: "hotel",
  },
  {
    Date: "03/04/26",
    Word: "brawn",
  },
  {
    Date: "03/05/26",
    Word: "boast",
  },
  {
    Date: "03/06/26",
    Word: "caddy",
  },
  {
    Date: "03/07/26",
    Word: "zonal",
  },
  {
    Date: "03/08/26",
    Word: "deter",
  },
  {
    Date: "03/09/26",
    Word: "table",
  },
  {
    Date: "03/10/26",
    Word: "welch",
  },
  {
    Date: "03/11/26",
    Word: "tidal",
  },
  {
    Date: "03/12/26",
    Word: "rival",
  },
  {
    Date: "03/13/26",
    Word: "hefty",
  },
  {
    Date: "03/14/26",
    Word: "armor",
  },
  {
    Date: "03/15/26",
    Word: "extol",
  },
  {
    Date: "03/16/26",
    Word: "found",
  },
  {
    Date: "03/17/26",
    Word: "flora",
  },
  {
    Date: "03/18/26",
    Word: "stern",
  },
  {
    Date: "03/19/26",
    Word: "repay",
  },
  {
    Date: "03/20/26",
    Word: "ulcer",
  },
  {
    Date: "03/21/26",
    Word: "yacht",
  },
  {
    Date: "03/22/26",
    Word: "expel",
  },
  {
    Date: "03/23/26",
    Word: "blush",
  },
  {
    Date: "03/24/26",
    Word: "poopy",
  },
  {
    Date: "03/25/26",
    Word: "sharp",
  },
  {
    Date: "03/26/26",
    Word: "scrap",
  },
  {
    Date: "03/27/26",
    Word: "atone",
  },
  {
    Date: "03/28/26",
    Word: "storm",
  },
  {
    Date: "03/29/26",
    Word: "sprig",
  },
  {
    Date: "03/30/26",
    Word: "chart",
  },
  {
    Date: "03/31/26",
    Word: "rowdy",
  },
  {
    Date: "04/01/26",
    Word: "salad",
  },
  {
    Date: "04/02/26",
    Word: "sheen",
  },
  {
    Date: "04/03/26",
    Word: "pinky",
  },
  {
    Date: "04/04/26",
    Word: "devil",
  },
  {
    Date: "04/05/26",
    Word: "glaze",
  },
  {
    Date: "04/06/26",
    Word: "stoic",
  },
  {
    Date: "04/07/26",
    Word: "least",
  },
  {
    Date: "04/08/26",
    Word: "squib",
  },
  {
    Date: "04/09/26",
    Word: "briny",
  },
  {
    Date: "04/10/26",
    Word: "lemon",
  },
  {
    Date: "04/11/26",
    Word: "crane",
  },
  {
    Date: "04/12/26",
    Word: "goody",
  },
  {
    Date: "04/13/26",
    Word: "lower",
  },
  {
    Date: "04/14/26",
    Word: "photo",
  },
  {
    Date: "04/15/26",
    Word: "gavel",
  },
  {
    Date: "04/16/26",
    Word: "outgo",
  },
  {
    Date: "04/17/26",
    Word: "fungi",
  },
  {
    Date: "04/18/26",
    Word: "index",
  },
  {
    Date: "04/19/26",
    Word: "seize",
  },
  {
    Date: "04/20/26",
    Word: "dryer",
  },
  {
    Date: "04/21/26",
    Word: "idyll",
  },
  {
    Date: "04/22/26",
    Word: "haven",
  },
  {
    Date: "04/23/26",
    Word: "handy",
  },
  {
    Date: "04/24/26",
    Word: "birth",
  },
  {
    Date: "04/25/26",
    Word: "bound",
  },
  {
    Date: "04/26/26",
    Word: "agile",
  },
  {
    Date: "04/27/26",
    Word: "lunar",
  },
  {
    Date: "04/28/26",
    Word: "faith",
  },
  {
    Date: "04/29/26",
    Word: "shied",
  },
  {
    Date: "04/30/26",
    Word: "cedar",
  },
  {
    Date: "05/01/26",
    Word: "hunky",
  },
  {
    Date: "05/02/26",
    Word: "droit",
  },
  {
    Date: "05/03/26",
    Word: "polar",
  },
  {
    Date: "05/04/26",
    Word: "felon",
  },
  {
    Date: "05/05/26",
    Word: "khaki",
  },
  {
    Date: "05/06/26",
    Word: "chill",
  },
  {
    Date: "05/07/26",
    Word: "amend",
  },
  {
    Date: "05/08/26",
    Word: "tweak",
  },
  {
    Date: "05/09/26",
    Word: "swarm",
  },
  {
    Date: "05/10/26",
    Word: "swear",
  },
  {
    Date: "05/11/26",
    Word: "cache",
  },
  {
    Date: "05/12/26",
    Word: "hilly",
  },
  {
    Date: "05/13/26",
    Word: "mecca",
  },
  {
    Date: "05/14/26",
    Word: "floor",
  },
  {
    Date: "05/15/26",
    Word: "heath",
  },
  {
    Date: "05/16/26",
    Word: "verve",
  },
  {
    Date: "05/17/26",
    Word: "unity",
  },
  {
    Date: "05/18/26",
    Word: "mouse",
  },
  {
    Date: "05/19/26",
    Word: "folio",
  },
  {
    Date: "05/20/26",
    Word: "flask",
  },
  {
    Date: "05/21/26",
    Word: "foggy",
  },
  {
    Date: "05/22/26",
    Word: "inlet",
  },
  {
    Date: "05/23/26",
    Word: "crone",
  },
  {
    Date: "05/24/26",
    Word: "circa",
  },
  {
    Date: "05/25/26",
    Word: "anger",
  },
  {
    Date: "05/26/26",
    Word: "homer",
  },
  {
    Date: "05/27/26",
    Word: "stool",
  },
  {
    Date: "05/28/26",
    Word: "sugar",
  },
  {
    Date: "05/29/26",
    Word: "smirk",
  },
  {
    Date: "05/30/26",
    Word: "raspy",
  },
  {
    Date: "05/31/26",
    Word: "dairy",
  },
  {
    Date: "06/01/26",
    Word: "sorry",
  },
  {
    Date: "06/02/26",
    Word: "bland",
  },
  {
    Date: "06/03/26",
    Word: "saint",
  },
  {
    Date: "06/04/26",
    Word: "axion",
  },
  {
    Date: "06/05/26",
    Word: "zesty",
  },
  {
    Date: "06/06/26",
    Word: "booby",
  },
  {
    Date: "06/07/26",
    Word: "boxer",
  },
  {
    Date: "06/08/26",
    Word: "chore",
  },
  {
    Date: "06/09/26",
    Word: "spoke",
  },
  {
    Date: "06/10/26",
    Word: "lithe",
  },
  {
    Date: "06/11/26",
    Word: "elder",
  },
  {
    Date: "06/12/26",
    Word: "gooey",
  },
  {
    Date: "06/13/26",
    Word: "mercy",
  },
  {
    Date: "06/14/26",
    Word: "spoof",
  },
  {
    Date: "06/15/26",
    Word: "drier",
  },
  {
    Date: "06/16/26",
    Word: "argue",
  },
  {
    Date: "06/17/26",
    Word: "below",
  },
  {
    Date: "06/18/26",
    Word: "blend",
  },
  {
    Date: "06/19/26",
    Word: "bribe",
  },
  {
    Date: "06/20/26",
    Word: "music",
  },
  {
    Date: "06/21/26",
    Word: "since",
  },
  {
    Date: "06/22/26",
    Word: "bigot",
  },
  {
    Date: "06/23/26",
    Word: "joint",
  },
  {
    Date: "06/24/26",
    Word: "gauze",
  },
  {
    Date: "06/25/26",
    Word: "minor",
  },
  {
    Date: "06/26/26",
    Word: "mount",
  },
  {
    Date: "06/27/26",
    Word: "deity",
  },
  {
    Date: "06/28/26",
    Word: "patty",
  },
  {
    Date: "06/29/26",
    Word: "mealy",
  },
  {
    Date: "06/30/26",
    Word: "unfit",
  },
  {
    Date: "07/01/26",
    Word: "detox",
  },
  {
    Date: "07/02/26",
    Word: "quack",
  },
  {
    Date: "07/03/26",
    Word: "foyer",
  },
  {
    Date: "07/04/26",
    Word: "surge",
  },
  {
    Date: "07/05/26",
    Word: "tempo",
  },
  {
    Date: "07/06/26",
    Word: "juice",
  },
  {
    Date: "07/07/26",
    Word: "moose",
  },
  {
    Date: "07/08/26",
    Word: "tease",
  },
  {
    Date: "07/09/26",
    Word: "world",
  },
  {
    Date: "07/10/26",
    Word: "glean",
  },
  {
    Date: "07/11/26",
    Word: "fiber",
  },
  {
    Date: "07/12/26",
    Word: "grand",
  },
  {
    Date: "07/13/26",
    Word: "empty",
  },
  {
    Date: "07/14/26",
    Word: "ounce",
  },
  {
    Date: "07/15/26",
    Word: "twice",
  },
  {
    Date: "07/16/26",
    Word: "given",
  },
  {
    Date: "07/17/26",
    Word: "burst",
  },
  {
    Date: "07/18/26",
    Word: "ovoid",
  },
  {
    Date: "07/19/26",
    Word: "rapid",
  },
  {
    Date: "07/20/26",
    Word: "crush",
  },
  {
    Date: "07/21/26",
    Word: "biome",
  },
  {
    Date: "07/22/26",
    Word: "reedy",
  },
  {
    Date: "07/23/26",
    Word: "toast",
  },
  {
    Date: "07/24/26",
    Word: "stomp",
  },
  {
    Date: "07/25/26",
    Word: "skull",
  },
  {
    Date: "07/26/26",
    Word: "minim",
  },
  {
    Date: "07/27/26",
    Word: "tarot",
  },
  {
    Date: "07/28/26",
    Word: "block",
  },
  {
    Date: "07/29/26",
    Word: "graft",
  },
  {
    Date: "07/30/26",
    Word: "dopey",
  },
  {
    Date: "07/31/26",
    Word: "amiss",
  },
  {
    Date: "08/01/26",
    Word: "prowl",
  },
  {
    Date: "08/02/26",
    Word: "spoon",
  },
  {
    Date: "08/03/26",
    Word: "creak",
  },
  {
    Date: "08/04/26",
    Word: "chord",
  },
  {
    Date: "08/05/26",
    Word: "mucky",
  },
  {
    Date: "08/06/26",
    Word: "endow",
  },
  {
    Date: "08/07/26",
    Word: "budge",
  },
  {
    Date: "08/08/26",
    Word: "porch",
  },
  {
    Date: "08/09/26",
    Word: "posse",
  },
  {
    Date: "08/10/26",
    Word: "payer",
  },
  {
    Date: "08/11/26",
    Word: "rugby",
  },
  {
    Date: "08/12/26",
    Word: "wrist",
  },
  {
    Date: "08/13/26",
    Word: "gnome",
  },
  {
    Date: "08/14/26",
    Word: "pixie",
  },
  {
    Date: "08/15/26",
    Word: "tawny",
  },
  {
    Date: "08/16/26",
    Word: "hippy",
  },
  {
    Date: "08/17/26",
    Word: "crude",
  },
  {
    Date: "08/18/26",
    Word: "filly",
  },
  {
    Date: "08/19/26",
    Word: "gruff",
  },
  {
    Date: "08/20/26",
    Word: "penny",
  },
  {
    Date: "08/21/26",
    Word: "ivory",
  },
  {
    Date: "08/22/26",
    Word: "champ",
  },
  {
    Date: "08/23/26",
    Word: "shame",
  },
  {
    Date: "08/24/26",
    Word: "facet",
  },
  {
    Date: "08/25/26",
    Word: "short",
  },
  {
    Date: "08/26/26",
    Word: "quite",
  },
  {
    Date: "08/27/26",
    Word: "grass",
  },
  {
    Date: "08/28/26",
    Word: "ripen",
  },
  {
    Date: "08/29/26",
    Word: "gawky",
  },
  {
    Date: "08/30/26",
    Word: "parka",
  },
  {
    Date: "08/31/26",
    Word: "enemy",
  },
  {
    Date: "09/01/26",
    Word: "pivot",
  },
  {
    Date: "09/02/26",
    Word: "froth",
  },
  {
    Date: "09/03/26",
    Word: "harem",
  },
  {
    Date: "09/04/26",
    Word: "stain",
  },
  {
    Date: "09/05/26",
    Word: "nosey",
  },
  {
    Date: "09/06/26",
    Word: "livid",
  },
  {
    Date: "09/07/26",
    Word: "giver",
  },
  {
    Date: "09/08/26",
    Word: "solve",
  },
  {
    Date: "09/09/26",
    Word: "sperm",
  },
  {
    Date: "09/10/26",
    Word: "lusty",
  },
  {
    Date: "09/11/26",
    Word: "vodka",
  },
  {
    Date: "09/12/26",
    Word: "scalp",
  },
  {
    Date: "09/13/26",
    Word: "creep",
  },
  {
    Date: "09/14/26",
    Word: "rogue",
  },
  {
    Date: "09/15/26",
    Word: "aloft",
  },
  {
    Date: "09/16/26",
    Word: "myrrh",
  },
  {
    Date: "09/17/26",
    Word: "sound",
  },
  {
    Date: "09/18/26",
    Word: "augur",
  },
  {
    Date: "09/19/26",
    Word: "speed",
  },
  {
    Date: "09/20/26",
    Word: "overt",
  },
  {
    Date: "09/21/26",
    Word: "cagey",
  },
  {
    Date: "09/22/26",
    Word: "cutie",
  },
  {
    Date: "09/23/26",
    Word: "ardor",
  },
  {
    Date: "09/24/26",
    Word: "twist",
  },
  {
    Date: "09/25/26",
    Word: "penal",
  },
  {
    Date: "09/26/26",
    Word: "harsh",
  },
  {
    Date: "09/27/26",
    Word: "shark",
  },
  {
    Date: "09/28/26",
    Word: "dwarf",
  },
  {
    Date: "09/29/26",
    Word: "yield",
  },
  {
    Date: "09/30/26",
    Word: "shady",
  },
  {
    Date: "10/01/26",
    Word: "hobby",
  },
  {
    Date: "10/02/26",
    Word: "whole",
  },
  {
    Date: "10/03/26",
    Word: "until",
  },
  {
    Date: "10/04/26",
    Word: "gouge",
  },
  {
    Date: "10/05/26",
    Word: "hello",
  },
  {
    Date: "10/06/26",
    Word: "privy",
  },
  {
    Date: "10/07/26",
    Word: "vaunt",
  },
  {
    Date: "10/08/26",
    Word: "fifty",
  },
  {
    Date: "10/09/26",
    Word: "affix",
  },
  {
    Date: "10/10/26",
    Word: "abyss",
  },
  {
    Date: "10/11/26",
    Word: "wrath",
  },
  {
    Date: "10/12/26",
    Word: "login",
  },
  {
    Date: "10/13/26",
    Word: "hutch",
  },
  {
    Date: "10/14/26",
    Word: "clung",
  },
  {
    Date: "10/15/26",
    Word: "sieve",
  },
  {
    Date: "10/16/26",
    Word: "quash",
  },
  {
    Date: "10/17/26",
    Word: "quick",
  },
  {
    Date: "10/18/26",
    Word: "spine",
  },
  {
    Date: "10/19/26",
    Word: "alley",
  },
  {
    Date: "10/20/26",
    Word: "total",
  },
  {
    Date: "10/21/26",
    Word: "midge",
  },
  {
    Date: "10/22/26",
    Word: "using",
  },
  {
    Date: "10/23/26",
    Word: "swine",
  },
  {
    Date: "10/24/26",
    Word: "dealt",
  },
  {
    Date: "10/25/26",
    Word: "paste",
  },
  {
    Date: "10/26/26",
    Word: "coast",
  },
  {
    Date: "10/27/26",
    Word: "drive",
  },
  {
    Date: "10/28/26",
    Word: "condo",
  },
  {
    Date: "10/29/26",
    Word: "boney",
  },
  {
    Date: "10/30/26",
    Word: "perky",
  },
  {
    Date: "10/31/26",
    Word: "smell",
  },
  {
    Date: "11/01/26",
    Word: "refer",
  },
  {
    Date: "11/02/26",
    Word: "leery",
  },
  {
    Date: "11/03/26",
    Word: "story",
  },
  {
    Date: "11/04/26",
    Word: "quirk",
  },
  {
    Date: "11/05/26",
    Word: "woken",
  },
  {
    Date: "11/06/26",
    Word: "pitch",
  },
  {
    Date: "11/07/26",
    Word: "fanny",
  },
  {
    Date: "11/08/26",
    Word: "villa",
  },
  {
    Date: "11/09/26",
    Word: "adore",
  },
  {
    Date: "11/10/26",
    Word: "curse",
  },
  {
    Date: "11/11/26",
    Word: "giant",
  },
  {
    Date: "11/12/26",
    Word: "odder",
  },
  {
    Date: "11/13/26",
    Word: "belly",
  },
  {
    Date: "11/14/26",
    Word: "motto",
  },
  {
    Date: "11/15/26",
    Word: "inane",
  },
  {
    Date: "11/16/26",
    Word: "brass",
  },
  {
    Date: "11/17/26",
    Word: "spicy",
  },
  {
    Date: "11/18/26",
    Word: "three",
  },
  {
    Date: "11/19/26",
    Word: "happy",
  },
  {
    Date: "11/20/26",
    Word: "grate",
  },
  {
    Date: "11/21/26",
    Word: "error",
  },
  {
    Date: "11/22/26",
    Word: "humid",
  },
  {
    Date: "11/23/26",
    Word: "waltz",
  },
  {
    Date: "11/24/26",
    Word: "sling",
  },
  {
    Date: "11/25/26",
    Word: "unmet",
  },
  {
    Date: "11/26/26",
    Word: "leggy",
  },
  {
    Date: "11/27/26",
    Word: "singe",
  },
  {
    Date: "11/28/26",
    Word: "muddy",
  },
  {
    Date: "11/29/26",
    Word: "acorn",
  },
  {
    Date: "11/30/26",
    Word: "assay",
  },
  {
    Date: "12/01/26",
    Word: "movie",
  },
  {
    Date: "12/02/26",
    Word: "glare",
  },
  {
    Date: "12/03/26",
    Word: "hardy",
  },
  {
    Date: "12/04/26",
    Word: "boost",
  },
  {
    Date: "12/05/26",
    Word: "kitty",
  },
  {
    Date: "12/06/26",
    Word: "sissy",
  },
  {
    Date: "12/07/26",
    Word: "agree",
  },
  {
    Date: "12/08/26",
    Word: "ankle",
  },
  {
    Date: "12/09/26",
    Word: "inert",
  },
  {
    Date: "12/10/26",
    Word: "beech",
  },
  {
    Date: "12/11/26",
    Word: "renal",
  },
  {
    Date: "12/12/26",
    Word: "flint",
  },
  {
    Date: "12/13/26",
    Word: "louse",
  },
  {
    Date: "12/14/26",
    Word: "sheet",
  },
  {
    Date: "12/15/26",
    Word: "taker",
  },
  {
    Date: "12/16/26",
    Word: "silly",
  },
  {
    Date: "12/17/26",
    Word: "crisp",
  },
  {
    Date: "12/18/26",
    Word: "gumbo",
  },
  {
    Date: "12/19/26",
    Word: "clown",
  },
  {
    Date: "12/20/26",
    Word: "noose",
  },
  {
    Date: "12/21/26",
    Word: "grief",
  },
  {
    Date: "12/22/26",
    Word: "pasta",
  },
  {
    Date: "12/23/26",
    Word: "recap",
  },
  {
    Date: "12/24/26",
    Word: "flake",
  },
  {
    Date: "12/25/26",
    Word: "stake",
  },
  {
    Date: "12/26/26",
    Word: "lipid",
  },
  {
    Date: "12/27/26",
    Word: "chick",
  },
  {
    Date: "12/28/26",
    Word: "freak",
  },
  {
    Date: "12/29/26",
    Word: "begun",
  },
  {
    Date: "12/30/26",
    Word: "twang",
  },
  {
    Date: "12/31/26",
    Word: "furry",
  },
  {
    Date: "01/01/27",
    Word: "salvo",
  },
  {
    Date: "01/02/27",
    Word: "retch",
  },
  {
    Date: "01/03/27",
    Word: "gauge",
  },
  {
    Date: "01/04/27",
    Word: "build",
  },
  {
    Date: "01/05/27",
    Word: "slash",
  },
  {
    Date: "01/06/27",
    Word: "barge",
  },
  {
    Date: "01/07/27",
    Word: "artsy",
  },
  {
    Date: "01/08/27",
    Word: "itchy",
  },
  {
    Date: "01/09/27",
    Word: "bluff",
  },
  {
    Date: "01/10/27",
    Word: "crack",
  },
  {
    Date: "01/11/27",
    Word: "rigid",
  },
  {
    Date: "01/12/27",
    Word: "filet",
  },
  {
    Date: "01/13/27",
    Word: "fussy",
  },
  {
    Date: "01/14/27",
    Word: "cabal",
  },
  {
    Date: "01/15/27",
    Word: "smoky",
  },
  {
    Date: "01/16/27",
    Word: "duvet",
  },
  {
    Date: "01/17/27",
    Word: "inter",
  },
  {
    Date: "01/18/27",
    Word: "hound",
  },
  {
    Date: "01/19/27",
    Word: "chump",
  },
  {
    Date: "01/20/27",
    Word: "nerve",
  },
  {
    Date: "01/21/27",
    Word: "focus",
  },
  {
    Date: "01/22/27",
    Word: "fjord",
  },
  {
    Date: "01/23/27",
    Word: "tacit",
  },
  {
    Date: "01/24/27",
    Word: "kneed",
  },
  {
    Date: "01/25/27",
    Word: "fetid",
  },
  {
    Date: "01/26/27",
    Word: "sadly",
  },
  {
    Date: "01/27/27",
    Word: "delta",
  },
  {
    Date: "01/28/27",
    Word: "amble",
  },
  {
    Date: "01/29/27",
    Word: "pubic",
  },
  {
    Date: "01/30/27",
    Word: "worst",
  },
  {
    Date: "01/31/27",
    Word: "dried",
  },
  {
    Date: "02/01/27",
    Word: "twixt",
  },
  {
    Date: "02/02/27",
    Word: "scent",
  },
  {
    Date: "02/03/27",
    Word: "reach",
  },
  {
    Date: "02/04/27",
    Word: "savoy",
  },
  {
    Date: "02/05/27",
    Word: "tacky",
  },
  {
    Date: "02/06/27",
    Word: "hussy",
  },
  {
    Date: "02/07/27",
    Word: "third",
  },
  {
    Date: "02/08/27",
    Word: "amuse",
  },
  {
    Date: "02/09/27",
    Word: "sauce",
  },
  {
    Date: "02/10/27",
    Word: "howdy",
  },
  {
    Date: "02/11/27",
    Word: "plumb",
  },
  {
    Date: "02/12/27",
    Word: "risen",
  },
  {
    Date: "02/13/27",
    Word: "covet",
  },
  {
    Date: "02/14/27",
    Word: "riser",
  },
  {
    Date: "02/15/27",
    Word: "tiara",
  },
  {
    Date: "02/16/27",
    Word: "radar",
  },
  {
    Date: "02/17/27",
    Word: "agape",
  },
  {
    Date: "02/18/27",
    Word: "peace",
  },
  {
    Date: "02/19/27",
    Word: "ranch",
  },
  {
    Date: "02/20/27",
    Word: "sheik",
  },
  {
    Date: "02/21/27",
    Word: "agent",
  },
  {
    Date: "02/22/27",
    Word: "while",
  },
  {
    Date: "02/23/27",
    Word: "shuck",
  },
  {
    Date: "02/24/27",
    Word: "frame",
  },
  {
    Date: "02/25/27",
    Word: "druid",
  },
  {
    Date: "02/26/27",
    Word: "madly",
  },
  {
    Date: "02/27/27",
    Word: "clove",
  },
  {
    Date: "02/28/27",
    Word: "pithy",
  },
  {
    Date: "03/01/27",
    Word: "sever",
  },
  {
    Date: "03/02/27",
    Word: "fruit",
  },
  {
    Date: "03/03/27",
    Word: "offal",
  },
  {
    Date: "03/04/27",
    Word: "erase",
  },
  {
    Date: "03/05/27",
    Word: "rarer",
  },
  {
    Date: "03/06/27",
    Word: "torso",
  },
  {
    Date: "03/07/27",
    Word: "smite",
  },
  {
    Date: "03/08/27",
    Word: "meant",
  },
  {
    Date: "03/09/27",
    Word: "choir",
  },
  {
    Date: "03/10/27",
    Word: "baker",
  },
  {
    Date: "03/11/27",
    Word: "sooth",
  },
  {
    Date: "03/12/27",
    Word: "abort",
  },
  {
    Date: "03/13/27",
    Word: "abhor",
  },
  {
    Date: "03/14/27",
    Word: "after",
  },
  {
    Date: "03/15/27",
    Word: "pouty",
  },
  {
    Date: "03/16/27",
    Word: "torch",
  },
  {
    Date: "03/17/27",
    Word: "salon",
  },
  {
    Date: "03/18/27",
    Word: "flank",
  },
  {
    Date: "03/19/27",
    Word: "wispy",
  },
  {
    Date: "03/20/27",
    Word: "apple",
  },
  {
    Date: "03/21/27",
    Word: "guest",
  },
  {
    Date: "03/22/27",
    Word: "rocky",
  },
  {
    Date: "03/23/27",
    Word: "grope",
  },
  {
    Date: "03/24/27",
    Word: "might",
  },
  {
    Date: "03/25/27",
    Word: "catch",
  },
  {
    Date: "03/26/27",
    Word: "naval",
  },
  {
    Date: "03/27/27",
    Word: "ingot",
  },
  {
    Date: "03/28/27",
    Word: "macro",
  },
  {
    Date: "03/29/27",
    Word: "foamy",
  },
  {
    Date: "03/30/27",
    Word: "aphid",
  },
  {
    Date: "03/31/27",
    Word: "islet",
  },
  {
    Date: "04/01/27",
    Word: "baler",
  },
  {
    Date: "04/02/27",
    Word: "tilde",
  },
  {
    Date: "04/03/27",
    Word: "maxim",
  },
  {
    Date: "04/04/27",
    Word: "juicy",
  },
  {
    Date: "04/05/27",
    Word: "usher",
  },
  {
    Date: "04/06/27",
    Word: "bread",
  },
  {
    Date: "04/07/27",
    Word: "navel",
  },
  {
    Date: "04/08/27",
    Word: "snipe",
  },
  {
    Date: "04/09/27",
    Word: "brine",
  },
  {
    Date: "04/10/27",
    Word: "idiom",
  },
  {
    Date: "04/11/27",
    Word: "showy",
  },
  {
    Date: "04/12/27",
    Word: "loath",
  },
  {
    Date: "04/13/27",
    Word: "manly",
  },
  {
    Date: "04/14/27",
    Word: "eager",
  },
  {
    Date: "04/15/27",
    Word: "krill",
  },
  {
    Date: "04/16/27",
    Word: "mummy",
  },
  {
    Date: "04/17/27",
    Word: "theta",
  },
  {
    Date: "04/18/27",
    Word: "sower",
  },
  {
    Date: "04/19/27",
    Word: "pinto",
  },
  {
    Date: "04/20/27",
    Word: "flown",
  },
  {
    Date: "04/21/27",
    Word: "forty",
  },
  {
    Date: "04/22/27",
    Word: "union",
  },
  {
    Date: "04/23/27",
    Word: "hydro",
  },
  {
    Date: "04/24/27",
    Word: "merge",
  },
  {
    Date: "04/25/27",
    Word: "vowel",
  },
  {
    Date: "04/26/27",
    Word: "spite",
  },
  {
    Date: "04/27/27",
    Word: "brawl",
  },
  {
    Date: "04/28/27",
    Word: "birch",
  },
  {
    Date: "04/29/27",
    Word: "fixer",
  },
  {
    Date: "04/30/27",
    Word: "clink",
  },
  {
    Date: "05/01/27",
    Word: "belie",
  },
  {
    Date: "05/02/27",
    Word: "winch",
  },
  {
    Date: "05/03/27",
    Word: "waste",
  },
  {
    Date: "05/04/27",
    Word: "burly",
  },
  {
    Date: "05/05/27",
    Word: "slate",
  },
  {
    Date: "05/06/27",
    Word: "blind",
  },
  {
    Date: "05/07/27",
    Word: "briar",
  },
  {
    Date: "05/08/27",
    Word: "album",
  },
  {
    Date: "05/09/27",
    Word: "teddy",
  },
  {
    Date: "05/10/27",
    Word: "oxide",
  },
  {
    Date: "05/11/27",
    Word: "gloom",
  },
  {
    Date: "05/12/27",
    Word: "jelly",
  },
  {
    Date: "05/13/27",
    Word: "alert",
  },
  {
    Date: "05/14/27",
    Word: "tutor",
  },
  {
    Date: "05/15/27",
    Word: "clank",
  },
  {
    Date: "05/16/27",
    Word: "brave",
  },
  {
    Date: "05/17/27",
    Word: "avail",
  },
  {
    Date: "05/18/27",
    Word: "bluer",
  },
  {
    Date: "05/19/27",
    Word: "blunt",
  },
  {
    Date: "05/20/27",
    Word: "slyly",
  },
  {
    Date: "05/21/27",
    Word: "whirl",
  },
  {
    Date: "05/22/27",
    Word: "harry",
  },
  {
    Date: "05/23/27",
    Word: "butch",
  },
  {
    Date: "05/24/27",
    Word: "bliss",
  },
  {
    Date: "05/25/27",
    Word: "enter",
  },
  {
    Date: "05/26/27",
    Word: "layer",
  },
  {
    Date: "05/27/27",
    Word: "eight",
  },
  {
    Date: "05/28/27",
    Word: "fifth",
  },
  {
    Date: "05/29/27",
    Word: "above",
  },
  {
    Date: "05/30/27",
    Word: "slung",
  },
  {
    Date: "05/31/27",
    Word: "heave",
  },
  {
    Date: "06/01/27",
    Word: "manic",
  },
  {
    Date: "06/02/27",
    Word: "bosom",
  },
  {
    Date: "06/03/27",
    Word: "clout",
  },
  {
    Date: "06/04/27",
    Word: "issue",
  },
  {
    Date: "06/05/27",
    Word: "natal",
  },
  {
    Date: "06/06/27",
    Word: "unfed",
  },
  {
    Date: "06/07/27",
    Word: "lowly",
  },
  {
    Date: "06/08/27",
    Word: "satin",
  },
  {
    Date: "06/09/27",
    Word: "onset",
  },
  {
    Date: "06/10/27",
    Word: "dicey",
  },
  {
    Date: "06/11/27",
    Word: "ratty",
  },
  {
    Date: "06/12/27",
    Word: "tibia",
  },
  {
    Date: "06/13/27",
    Word: "trend",
  },
  {
    Date: "06/14/27",
    Word: "fiery",
  },
  {
    Date: "06/15/27",
    Word: "imbue",
  },
  {
    Date: "06/16/27",
    Word: "shove",
  },
  {
    Date: "06/17/27",
    Word: "refit",
  },
  {
    Date: "06/18/27",
    Word: "scaly",
  },
  {
    Date: "06/19/27",
    Word: "baste",
  },
  {
    Date: "06/20/27",
    Word: "roger",
  },
  {
    Date: "06/21/27",
    Word: "dusky",
  },
  {
    Date: "06/22/27",
    Word: "ovate",
  },
  {
    Date: "06/23/27",
    Word: "bison",
  },
  {
    Date: "06/24/27",
    Word: "admin",
  },
  {
    Date: "06/25/27",
    Word: "hoist",
  },
  {
    Date: "06/26/27",
    Word: "prune",
  },
  {
    Date: "06/27/27",
    Word: "golly",
  },
  {
    Date: "06/28/27",
    Word: "wordy",
  },
  {
    Date: "06/29/27",
    Word: "tally",
  },
  {
    Date: "06/30/27",
    Word: "shown",
  },
  {
    Date: "07/01/27",
    Word: "valve",
  },
  {
    Date: "07/02/27",
    Word: "golem",
  },
  {
    Date: "07/03/27",
    Word: "aglow",
  },
  {
    Date: "07/04/27",
    Word: "musty",
  },
  {
    Date: "07/05/27",
    Word: "smoke",
  },
  {
    Date: "07/06/27",
    Word: "adage",
  },
  {
    Date: "07/07/27",
    Word: "lurid",
  },
  {
    Date: "07/08/27",
    Word: "ready",
  },
  {
    Date: "07/09/27",
    Word: "alibi",
  },
  {
    Date: "07/10/27",
    Word: "viral",
  },
  {
    Date: "07/11/27",
    Word: "broil",
  },
  {
    Date: "07/12/27",
    Word: "scram",
  },
  {
    Date: "07/13/27",
    Word: "bathe",
  },
  {
    Date: "07/14/27",
    Word: "wrest",
  },
  {
    Date: "07/15/27",
    Word: "leach",
  },
  {
    Date: "07/16/27",
    Word: "sunny",
  },
  {
    Date: "07/17/27",
    Word: "payee",
  },
  {
    Date: "07/18/27",
    Word: "gloat",
  },
  {
    Date: "07/19/27",
    Word: "gloss",
  },
  {
    Date: "07/20/27",
    Word: "flail",
  },
  {
    Date: "07/21/27",
    Word: "thong",
  },
  {
    Date: "07/22/27",
    Word: "chant",
  },
  {
    Date: "07/23/27",
    Word: "totem",
  },
  {
    Date: "07/24/27",
    Word: "husky",
  },
  {
    Date: "07/25/27",
    Word: "titan",
  },
  {
    Date: "07/26/27",
    Word: "hitch",
  },
  {
    Date: "07/27/27",
    Word: "prone",
  },
  {
    Date: "07/28/27",
    Word: "dizzy",
  },
  {
    Date: "07/29/27",
    Word: "decry",
  },
  {
    Date: "07/30/27",
    Word: "gaudy",
  },
  {
    Date: "07/31/27",
    Word: "soapy",
  },
  {
    Date: "08/01/27",
    Word: "crave",
  },
  {
    Date: "08/02/27",
    Word: "unset",
  },
  {
    Date: "08/03/27",
    Word: "spelt",
  },
  {
    Date: "08/04/27",
    Word: "piney",
  },
  {
    Date: "08/05/27",
    Word: "marry",
  },
  {
    Date: "08/06/27",
    Word: "adobe",
  },
  {
    Date: "08/07/27",
    Word: "elite",
  },
  {
    Date: "08/08/27",
    Word: "arbor",
  },
  {
    Date: "08/09/27",
    Word: "axial",
  },
  {
    Date: "08/10/27",
    Word: "dingo",
  },
  {
    Date: "08/11/27",
    Word: "fatty",
  },
  {
    Date: "08/12/27",
    Word: "olden",
  },
  {
    Date: "08/13/27",
    Word: "metal",
  },
  {
    Date: "08/14/27",
    Word: "gaffe",
  },
  {
    Date: "08/15/27",
    Word: "lapel",
  },
  {
    Date: "08/16/27",
    Word: "saute",
  },
  {
    Date: "08/17/27",
    Word: "glory",
  },
  {
    Date: "08/18/27",
    Word: "charm",
  },
  {
    Date: "08/19/27",
    Word: "buggy",
  },
  {
    Date: "08/20/27",
    Word: "proud",
  },
  {
    Date: "08/21/27",
    Word: "query",
  },
  {
    Date: "08/22/27",
    Word: "vocal",
  },
  {
    Date: "08/23/27",
    Word: "foray",
  },
  {
    Date: "08/24/27",
    Word: "bulky",
  },
  {
    Date: "08/25/27",
    Word: "afoul",
  },
  {
    Date: "08/26/27",
    Word: "hatch",
  },
  {
    Date: "08/27/27",
    Word: "mauve",
  },
  {
    Date: "08/28/27",
    Word: "boozy",
  },
  {
    Date: "08/29/27",
    Word: "stunt",
  },
  {
    Date: "08/30/27",
    Word: "belle",
  },
  {
    Date: "08/31/27",
    Word: "quart",
  },
  {
    Date: "09/01/27",
    Word: "cover",
  },
  {
    Date: "09/02/27",
    Word: "afoot",
  },
  {
    Date: "09/03/27",
    Word: "spear",
  },
  {
    Date: "09/04/27",
    Word: "horse",
  },
  {
    Date: "09/05/27",
    Word: "revue",
  },
  {
    Date: "09/06/27",
    Word: "wooer",
  },
  {
    Date: "09/07/27",
    Word: "utter",
  },
  {
    Date: "09/08/27",
    Word: "sumac",
  },
  {
    Date: "09/09/27",
    Word: "sting",
  },
  {
    Date: "09/10/27",
    Word: "forgo",
  },
  {
    Date: "09/11/27",
    Word: "irony",
  },
  {
    Date: "09/12/27",
    Word: "beefy",
  },
  {
    Date: "09/13/27",
    Word: "paper",
  },
  {
    Date: "09/14/27",
    Word: "flout",
  },
  {
    Date: "09/15/27",
    Word: "swung",
  },
  {
    Date: "09/16/27",
    Word: "chain",
  },
  {
    Date: "09/17/27",
    Word: "glyph",
  },
  {
    Date: "09/18/27",
    Word: "never",
  },
  {
    Date: "09/19/27",
    Word: "beret",
  },
  {
    Date: "09/20/27",
    Word: "pilot",
  },
  {
    Date: "09/21/27",
    Word: "utile",
  },
  {
    Date: "09/22/27",
    Word: "tract",
  },
  {
    Date: "09/23/27",
    Word: "sully",
  },
  {
    Date: "09/24/27",
    Word: "aunty",
  },
  {
    Date: "09/25/27",
    Word: "feign",
  },
  {
    Date: "09/26/27",
    Word: "comma",
  },
  {
    Date: "09/27/27",
    Word: "dread",
  },
  {
    Date: "09/28/27",
    Word: "grant",
  },
  {
    Date: "09/29/27",
    Word: "moody",
  },
  {
    Date: "09/30/27",
    Word: "otter",
  },
  {
    Date: "10/01/27",
    Word: "viola",
  },
  {
    Date: "10/02/27",
    Word: "salty",
  },
  {
    Date: "10/03/27",
    Word: "satyr",
  },
  {
    Date: "10/04/27",
    Word: "bitty",
  },
  {
    Date: "10/05/27",
    Word: "gruel",
  },
  {
    Date: "10/06/27",
    Word: "whelp",
  },
  {
    Date: "10/07/27",
    Word: "palsy",
  },
  {
    Date: "10/08/27",
    Word: "eagle",
  },
  {
    Date: "10/09/27",
    Word: "ditty",
  },
  {
    Date: "10/10/27",
    Word: "thrum",
  },
  {
    Date: "10/11/27",
    Word: "anode",
  },
  {
    Date: "10/12/27",
    Word: "wrong",
  },
  {
    Date: "10/13/27",
    Word: "abuse",
  },
  {
    Date: "10/14/27",
    Word: "eking",
  },
  {
    Date: "10/15/27",
    Word: "caulk",
  },
  {
    Date: "10/16/27",
    Word: "ovary",
  },
  {
    Date: "10/17/27",
    Word: "forte",
  },
  {
    Date: "10/18/27",
    Word: "banal",
  },
  {
    Date: "10/19/27",
    Word: "rodeo",
  },
  {
    Date: "10/20/27",
    Word: "knave",
  },
  {
    Date: "10/21/27",
    Word: "meter",
  },
  {
    Date: "10/22/27",
    Word: "heist",
  },
  {
    Date: "10/23/27",
    Word: "filer",
  },
  {
    Date: "10/24/27",
    Word: "panic",
  },
  {
    Date: "10/25/27",
    Word: "smear",
  },
  {
    Date: "10/26/27",
    Word: "knack",
  },
  {
    Date: "10/27/27",
    Word: "cable",
  },
  {
    Date: "10/28/27",
    Word: "aside",
  },
  {
    Date: "10/29/27",
    Word: "venue",
  },
  {
    Date: "10/30/27",
    Word: "grown",
  },
  {
    Date: "10/31/27",
    Word: "lasso",
  },
  {
    Date: "11/01/27",
    Word: "booze",
  },
  {
    Date: "11/02/27",
    Word: "broad",
  },
  {
    Date: "11/03/27",
    Word: "juror",
  },
  {
    Date: "11/04/27",
    Word: "halve",
  },
  {
    Date: "11/05/27",
    Word: "coral",
  },
  {
    Date: "11/06/27",
    Word: "email",
  },
  {
    Date: "11/07/27",
    Word: "ascot",
  },
  {
    Date: "11/08/27",
    Word: "spilt",
  },
  {
    Date: "11/09/27",
    Word: "toxic",
  },
  {
    Date: "11/10/27",
    Word: "droll",
  },
  {
    Date: "11/11/27",
    Word: "label",
  },
  {
    Date: "11/12/27",
    Word: "fecal",
  },
  {
    Date: "11/13/27",
    Word: "timer",
  },
  {
    Date: "11/14/27",
    Word: "twirl",
  },
  {
    Date: "11/15/27",
    Word: "whisk",
  },
  {
    Date: "11/16/27",
    Word: "jazzy",
  },
  {
    Date: "11/17/27",
    Word: "irate",
  },
  {
    Date: "11/18/27",
    Word: "align",
  },
  {
    Date: "11/19/27",
    Word: "preen",
  },
  {
    Date: "11/20/27",
    Word: "deuce",
  },
  {
    Date: "11/21/27",
    Word: "offer",
  },
  {
    Date: "11/22/27",
    Word: "havoc",
  },
  {
    Date: "11/23/27",
    Word: "ruler",
  },
  {
    Date: "11/24/27",
    Word: "eying",
  },
  {
    Date: "11/25/27",
    Word: "slime",
  },
  {
    Date: "11/26/27",
    Word: "rhino",
  },
  {
    Date: "11/27/27",
    Word: "puree",
  },
  {
    Date: "11/28/27",
    Word: "stony",
  },
  {
    Date: "11/29/27",
    Word: "freed",
  },
  {
    Date: "11/30/27",
    Word: "awful",
  },
  {
    Date: "12/01/27",
    Word: "macho",
  },
  {
    Date: "12/02/27",
    Word: "truck",
  },
  {
    Date: "12/03/27",
    Word: "begat",
  },
  {
    Date: "12/04/27",
    Word: "skiff",
  },
  {
    Date: "12/05/27",
    Word: "blond",
  },
  {
    Date: "12/06/27",
    Word: "child",
  },
  {
    Date: "12/07/27",
    Word: "shirk",
  },
  {
    Date: "12/08/27",
    Word: "debit",
  },
  {
    Date: "12/09/27",
    Word: "finch",
  },
  {
    Date: "12/10/27",
    Word: "snare",
  },
  {
    Date: "12/11/27",
    Word: "scuba",
  },
  {
    Date: "12/12/27",
    Word: "wheel",
  },
  {
    Date: "12/13/27",
    Word: "uncut",
  },
  {
    Date: "12/14/27",
    Word: "woody",
  },
  {
    Date: "12/15/27",
    Word: "terra",
  },
  {
    Date: "12/16/27",
    Word: "gazer",
  },
  {
    Date: "12/17/27",
    Word: "zebra",
  },
  {
    Date: "12/18/27",
    Word: "sneer",
  },
  {
    Date: "12/19/27",
    Word: "tithe",
  },
  {
    Date: "12/20/27",
    Word: "logic",
  },
  {
    Date: "12/21/27",
    Word: "puffy",
  },
  {
    Date: "12/22/27",
    Word: "maple",
  },
  {
    Date: "12/23/27",
    Word: "woman",
  },
  {
    Date: "12/24/27",
    Word: "parse",
  },
  {
    Date: "12/25/27",
    Word: "bloat",
  },
  {
    Date: "12/26/27",
    Word: "exult",
  },
  {
    Date: "12/27/27",
    Word: "torus",
  },
  {
    Date: "12/28/27",
    Word: "depot",
  },
  {
    Date: "12/29/27",
    Word: "tonal",
  },
  {
    Date: "12/30/27",
    Word: "oaken",
  },
  {
    Date: "12/31/27",
    Word: "rally",
  },
  {
    Date: "01/01/28",
    Word: "quill",
  },
  {
    Date: "01/02/28",
    Word: "stamp",
  },
  {
    Date: "01/03/28",
    Word: "wiser",
  },
  {
    Date: "01/04/28",
    Word: "route",
  },
  {
    Date: "01/05/28",
    Word: "agate",
  },
  {
    Date: "01/06/28",
    Word: "witch",
  },
  {
    Date: "01/07/28",
    Word: "testy",
  },
  {
    Date: "01/08/28",
    Word: "hinge",
  },
  {
    Date: "01/09/28",
    Word: "rebel",
  },
  {
    Date: "01/10/28",
    Word: "early",
  },
  {
    Date: "01/11/28",
    Word: "plaid",
  },
  {
    Date: "01/12/28",
    Word: "blitz",
  },
  {
    Date: "01/13/28",
    Word: "ridge",
  },
  {
    Date: "01/14/28",
    Word: "audit",
  },
  {
    Date: "01/15/28",
    Word: "whiff",
  },
  {
    Date: "01/16/28",
    Word: "weigh",
  },
  {
    Date: "01/17/28",
    Word: "aping",
  },
  {
    Date: "01/18/28",
    Word: "metro",
  },
  {
    Date: "01/19/28",
    Word: "dross",
  },
  {
    Date: "01/20/28",
    Word: "chock",
  },
  {
    Date: "01/21/28",
    Word: "olive",
  },
  {
    Date: "01/22/28",
    Word: "guppy",
  },
  {
    Date: "01/23/28",
    Word: "polka",
  },
  {
    Date: "01/24/28",
    Word: "blaze",
  },
  {
    Date: "01/25/28",
    Word: "clack",
  },
  {
    Date: "01/26/28",
    Word: "clock",
  },
  {
    Date: "01/27/28",
    Word: "hurry",
  },
  {
    Date: "01/28/28",
    Word: "fugue",
  },
  {
    Date: "01/29/28",
    Word: "gamut",
  },
  {
    Date: "01/30/28",
    Word: "seedy",
  },
  {
    Date: "01/31/28",
    Word: "debut",
  },
  {
    Date: "02/01/28",
    Word: "meaty",
  },
  {
    Date: "02/02/28",
    Word: "jaunt",
  },
  {
    Date: "02/03/28",
    Word: "large",
  },
  {
    Date: "02/04/28",
    Word: "float",
  },
  {
    Date: "02/05/28",
    Word: "hymen",
  },
  {
    Date: "02/06/28",
    Word: "liver",
  },
  {
    Date: "02/07/28",
    Word: "drove",
  },
  {
    Date: "02/08/28",
    Word: "surly",
  },
  {
    Date: "02/09/28",
    Word: "steer",
  },
  {
    Date: "02/10/28",
    Word: "moult",
  },
  {
    Date: "02/11/28",
    Word: "death",
  },
  {
    Date: "02/12/28",
    Word: "FALSE",
  },
  {
    Date: "02/13/28",
    Word: "shaft",
  },
  {
    Date: "02/14/28",
    Word: "thigh",
  },
  {
    Date: "02/15/28",
    Word: "edify",
  },
  {
    Date: "02/16/28",
    Word: "harpy",
  },
  {
    Date: "02/17/28",
    Word: "epoch",
  },
  {
    Date: "02/18/28",
    Word: "shrug",
  },
  {
    Date: "02/19/28",
    Word: "soggy",
  },
  {
    Date: "02/20/28",
    Word: "shout",
  },
  {
    Date: "02/21/28",
    Word: "towel",
  },
  {
    Date: "02/22/28",
    Word: "siege",
  },
  {
    Date: "02/23/28",
    Word: "prize",
  },
  {
    Date: "02/24/28",
    Word: "baggy",
  },
  {
    Date: "02/25/28",
    Word: "churn",
  },
  {
    Date: "02/26/28",
    Word: "cocoa",
  },
  {
    Date: "02/27/28",
    Word: "prime",
  },
  {
    Date: "02/28/28",
    Word: "brisk",
  },
  {
    Date: "02/29/28",
    Word: "class",
  },
  {
    Date: "03/01/28",
    Word: "dutch",
  },
  {
    Date: "03/02/28",
    Word: "lumen",
  },
  {
    Date: "03/03/28",
    Word: "heart",
  },
  {
    Date: "03/04/28",
    Word: "break",
  },
  {
    Date: "03/05/28",
    Word: "quell",
  },
  {
    Date: "03/06/28",
    Word: "arose",
  },
  {
    Date: "03/07/28",
    Word: "skill",
  },
  {
    Date: "03/08/28",
    Word: "shunt",
  },
  {
    Date: "03/09/28",
    Word: "weary",
  },
  {
    Date: "03/10/28",
    Word: "flyer",
  },
  {
    Date: "03/11/28",
    Word: "tying",
  },
  {
    Date: "03/12/28",
    Word: "lanky",
  },
  {
    Date: "03/13/28",
    Word: "quail",
  },
  {
    Date: "03/14/28",
    Word: "bleep",
  },
  {
    Date: "03/15/28",
    Word: "deign",
  },
  {
    Date: "03/16/28",
    Word: "tamer",
  },
  {
    Date: "03/17/28",
    Word: "digit",
  },
  {
    Date: "03/18/28",
    Word: "decal",
  },
  {
    Date: "03/19/28",
    Word: "speck",
  },
  {
    Date: "03/20/28",
    Word: "coach",
  },
  {
    Date: "03/21/28",
    Word: "cream",
  },
  {
    Date: "03/22/28",
    Word: "spade",
  },
  {
    Date: "03/23/28",
    Word: "lumpy",
  },
  {
    Date: "03/24/28",
    Word: "shire",
  },
  {
    Date: "03/25/28",
    Word: "serve",
  },
  {
    Date: "03/26/28",
    Word: "funky",
  },
  {
    Date: "03/27/28",
    Word: "tribe",
  },
  {
    Date: "03/28/28",
    Word: "merry",
  },
  {
    Date: "03/29/28",
    Word: "melee",
  },
  {
    Date: "03/30/28",
    Word: "twine",
  },
  {
    Date: "03/31/28",
    Word: "guile",
  },
  {
    Date: "04/01/28",
    Word: "bough",
  },
  {
    Date: "04/02/28",
    Word: "aging",
  },
  {
    Date: "04/03/28",
    Word: "arena",
  },
  {
    Date: "04/04/28",
    Word: "niche",
  },
  {
    Date: "04/05/28",
    Word: "aisle",
  },
  {
    Date: "04/06/28",
    Word: "shore",
  },
  {
    Date: "04/07/28",
    Word: "widen",
  },
  {
    Date: "04/08/28",
    Word: "skier",
  },
  {
    Date: "04/09/28",
    Word: "slack",
  },
  {
    Date: "04/10/28",
    Word: "wince",
  },
  {
    Date: "04/11/28",
    Word: "dwell",
  },
  {
    Date: "04/12/28",
    Word: "earth",
  },
  {
    Date: "04/13/28",
    Word: "flaky",
  },
  {
    Date: "04/14/28",
    Word: "skirt",
  },
  {
    Date: "04/15/28",
    Word: "focal",
  },
  {
    Date: "04/16/28",
    Word: "tried",
  },
  {
    Date: "04/17/28",
    Word: "spurn",
  },
  {
    Date: "04/18/28",
    Word: "ovine",
  },
  {
    Date: "04/19/28",
    Word: "print",
  },
  {
    Date: "04/20/28",
    Word: "stave",
  },
  {
    Date: "04/21/28",
    Word: "pence",
  },
  {
    Date: "04/22/28",
    Word: "dowel",
  },
  {
    Date: "04/23/28",
    Word: "surer",
  },
  {
    Date: "04/24/28",
    Word: "dense",
  },
  {
    Date: "04/25/28",
    Word: "about",
  },
  {
    Date: "04/26/28",
    Word: "ficus",
  },
  {
    Date: "04/27/28",
    Word: "ozone",
  },
  {
    Date: "04/28/28",
    Word: "liner",
  },
  {
    Date: "04/29/28",
    Word: "dress",
  },
  {
    Date: "04/30/28",
    Word: "robin",
  },
  {
    Date: "05/01/28",
    Word: "envoy",
  },
  {
    Date: "05/02/28",
    Word: "manga",
  },
  {
    Date: "05/03/28",
    Word: "hyper",
  },
  {
    Date: "05/04/28",
    Word: "could",
  },
  {
    Date: "05/05/28",
    Word: "fluff",
  },
  {
    Date: "05/06/28",
    Word: "chaff",
  },
  {
    Date: "05/07/28",
    Word: "glove",
  },
  {
    Date: "05/08/28",
    Word: "gorge",
  },
  {
    Date: "05/09/28",
    Word: "swami",
  },
  {
    Date: "05/10/28",
    Word: "teeth",
  },
  {
    Date: "05/11/28",
    Word: "model",
  },
  {
    Date: "05/12/28",
    Word: "crypt",
  },
  {
    Date: "05/13/28",
    Word: "stage",
  },
  {
    Date: "05/14/28",
    Word: "score",
  },
  {
    Date: "05/15/28",
    Word: "abase",
  },
  {
    Date: "05/16/28",
    Word: "stoke",
  },
  {
    Date: "05/17/28",
    Word: "small",
  },
  {
    Date: "05/18/28",
    Word: "poker",
  },
  {
    Date: "05/19/28",
    Word: "ferry",
  },
  {
    Date: "05/20/28",
    Word: "gonad",
  },
  {
    Date: "05/21/28",
    Word: "blurb",
  },
  {
    Date: "05/22/28",
    Word: "chasm",
  },
  {
    Date: "05/23/28",
    Word: "reply",
  },
  {
    Date: "05/24/28",
    Word: "fairy",
  },
  {
    Date: "05/25/28",
    Word: "slice",
  },
  {
    Date: "05/26/28",
    Word: "mouth",
  },
  {
    Date: "05/27/28",
    Word: "actor",
  },
  {
    Date: "05/28/28",
    Word: "rouse",
  },
  {
    Date: "05/29/28",
    Word: "cello",
  },
  {
    Date: "05/30/28",
    Word: "annul",
  },
  {
    Date: "05/31/28",
    Word: "queen",
  },
  {
    Date: "06/01/28",
    Word: "scary",
  },
  {
    Date: "06/02/28",
    Word: "march",
  },
  {
    Date: "06/03/28",
    Word: "shirt",
  },
  {
    Date: "06/04/28",
    Word: "award",
  },
  {
    Date: "06/05/28",
    Word: "avian",
  },
  {
    Date: "06/06/28",
    Word: "idiot",
  },
  {
    Date: "06/07/28",
    Word: "plant",
  },
  {
    Date: "06/08/28",
    Word: "scrub",
  },
  {
    Date: "06/09/28",
    Word: "spire",
  },
  {
    Date: "06/10/28",
    Word: "pupal",
  },
  {
    Date: "06/11/28",
    Word: "excel",
  },
  {
    Date: "06/12/28",
    Word: "onion",
  },
  {
    Date: "06/13/28",
    Word: "rajah",
  },
  {
    Date: "06/14/28",
    Word: "rifle",
  },
  {
    Date: "06/15/28",
    Word: "abbey",
  },
  {
    Date: "06/16/28",
    Word: "quest",
  },
  {
    Date: "06/17/28",
    Word: "gusty",
  },
  {
    Date: "06/18/28",
    Word: "theme",
  },
  {
    Date: "06/19/28",
    Word: "under",
  },
  {
    Date: "06/20/28",
    Word: "erode",
  },
  {
    Date: "06/21/28",
    Word: "orbit",
  },
  {
    Date: "06/22/28",
    Word: "lyric",
  },
  {
    Date: "06/23/28",
    Word: "unite",
  },
  {
    Date: "06/24/28",
    Word: "straw",
  },
  {
    Date: "06/25/28",
    Word: "sight",
  },
  {
    Date: "06/26/28",
    Word: "cargo",
  },
  {
    Date: "06/27/28",
    Word: "hence",
  },
  {
    Date: "06/28/28",
    Word: "guise",
  },
  {
    Date: "06/29/28",
    Word: "karma",
  },
  {
    Date: "06/30/28",
    Word: "bring",
  },
  {
    Date: "07/01/28",
    Word: "liken",
  },
  {
    Date: "07/02/28",
    Word: "helix",
  },
  {
    Date: "07/03/28",
    Word: "fight",
  },
  {
    Date: "07/04/28",
    Word: "cycle",
  },
  {
    Date: "07/05/28",
    Word: "eaten",
  },
  {
    Date: "07/06/28",
    Word: "fleck",
  },
  {
    Date: "07/07/28",
    Word: "gayer",
  },
  {
    Date: "07/08/28",
    Word: "aroma",
  },
  {
    Date: "07/09/28",
    Word: "dummy",
  },
  {
    Date: "07/10/28",
    Word: "windy",
  },
  {
    Date: "07/11/28",
    Word: "humph",
  },
  {
    Date: "07/12/28",
    Word: "sport",
  },
  {
    Date: "07/13/28",
    Word: "haunt",
  },
];

const dayPosition = 0;

function wordIndex() {
  for (let i = 0; i < wordBank.length; i++) {
    if (today == wordBank[i].Date) {
      let dayPosition = i;
      return i;
    }
  }
}

const position = wordBank[wordIndex()].Word;

const response = position.toUpperCase();
const answerFormat = [
  response[0],
  response[1],
  response[2],
  response[3],
  response[4],
];

var answer = answerFormat;

yWordPosition = wordIndex() - 1;

document.getElementById("yword").innerHTML =
  wordBank[yWordPosition].Word.toUpperCase();

var guess1 = [];
var guess2 = [];
var guess3 = [];
var guess4 = [];
var guess5 = [];
var guess6 = [];

var guessCounter = 0;
var keyNum = 0;
var sharedScore = "";
var winCondition = "";

function arrayMatch(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

function yellowLetter(a, b) {
  let res = 0;
  for (let i = 0; i < 5; i++) {
    if (a == b[i]) {
      res++;
    }
  }

  if (res == 2) {
    return "double";
  } else if (res == 1) {
    return "single";
  } else {
    return false;
  }
}

function greenLetter(a, b) {
  if (a[0] === b[0]) {
    return true;
  }
}

const guessCreate1 = () => {
  guess1.push(document.getElementById("guess1char1").innerHTML);
  guess1.push(document.getElementById("guess1char2").innerHTML);
  guess1.push(document.getElementById("guess1char3").innerHTML);
  guess1.push(document.getElementById("guess1char4").innerHTML);
  guess1.push(document.getElementById("guess1char5").innerHTML);

  if (arrayMatch(answer, guess1) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
};

const guessCreate2 = () => {
  guess2.push(document.getElementById("guess2char1").innerHTML);
  guess2.push(document.getElementById("guess2char2").innerHTML);
  guess2.push(document.getElementById("guess2char3").innerHTML);
  guess2.push(document.getElementById("guess2char4").innerHTML);
  guess2.push(document.getElementById("guess2char5").innerHTML);

  if (arrayMatch(answer, guess2) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    shareScore();
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
};

const guessCreate3 = () => {
  guess3.push(document.getElementById("guess3char1").innerHTML);
  guess3.push(document.getElementById("guess3char2").innerHTML);
  guess3.push(document.getElementById("guess3char3").innerHTML);
  guess3.push(document.getElementById("guess3char4").innerHTML);
  guess3.push(document.getElementById("guess3char5").innerHTML);

  if (arrayMatch(answer, guess3) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    shareScore();
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
};

const guessCreate4 = () => {
  guess4.push(document.getElementById("guess4char1").innerHTML);
  guess4.push(document.getElementById("guess4char2").innerHTML);
  guess4.push(document.getElementById("guess4char3").innerHTML);
  guess4.push(document.getElementById("guess4char4").innerHTML);
  guess4.push(document.getElementById("guess4char5").innerHTML);

  if (arrayMatch(answer, guess4) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    shareScore();
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
};

const guessCreate5 = () => {
  guess5.push(document.getElementById("guess5char1").innerHTML);
  guess5.push(document.getElementById("guess5char2").innerHTML);
  guess5.push(document.getElementById("guess5char3").innerHTML);
  guess5.push(document.getElementById("guess5char4").innerHTML);
  guess5.push(document.getElementById("guess5char5").innerHTML);

  if (arrayMatch(answer, guess5) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    shareScore();
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
};

const guessCreate6 = () => {
  guess6.push(document.getElementById("guess6char1").innerHTML);
  guess6.push(document.getElementById("guess6char2").innerHTML);
  guess6.push(document.getElementById("guess6char3").innerHTML);
  guess6.push(document.getElementById("guess6char4").innerHTML);
  guess6.push(document.getElementById("guess6char5").innerHTML);

  if (arrayMatch(answer, guess6) === true) {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    shareScore();
    document.getElementById("shareButton").style.visibility = "visible";
    winCondition = "yes";
  } else {
    document.getElementById("kordle").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("youLose").style.display = "block";
  }
};

const guess1delete = () => {
  if (document.getElementById("guess1char5").innerHTML != false) {
    document.getElementById("guess1char5").innerHTML = "";
  } else if (document.getElementById("guess1char4").innerHTML != false) {
    document.getElementById("guess1char4").innerHTML = "";
  } else if (document.getElementById("guess1char3").innerHTML != false) {
    document.getElementById("guess1char3").innerHTML = "";
  } else if (document.getElementById("guess1char2").innerHTML != false) {
    document.getElementById("guess1char2").innerHTML = "";
  } else if (document.getElementById("guess1char1").innerHTML != false) {
    document.getElementById("guess1char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

const guess2delete = () => {
  if (document.getElementById("guess2char5").innerHTML != false) {
    document.getElementById("guess2char5").innerHTML = "";
  } else if (document.getElementById("guess2char4").innerHTML != false) {
    document.getElementById("guess2char4").innerHTML = "";
  } else if (document.getElementById("guess2char3").innerHTML != false) {
    document.getElementById("guess2char3").innerHTML = "";
  } else if (document.getElementById("guess2char2").innerHTML != false) {
    document.getElementById("guess2char2").innerHTML = "";
  } else if (document.getElementById("guess2char1").innerHTML != false) {
    document.getElementById("guess2char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

const guess3delete = () => {
  if (document.getElementById("guess3char5").innerHTML != false) {
    document.getElementById("guess3char5").innerHTML = "";
  } else if (document.getElementById("guess3char4").innerHTML != false) {
    document.getElementById("guess3char4").innerHTML = "";
  } else if (document.getElementById("guess3char3").innerHTML != false) {
    document.getElementById("guess3char3").innerHTML = "";
  } else if (document.getElementById("guess3char2").innerHTML != false) {
    document.getElementById("guess3char2").innerHTML = "";
  } else if (document.getElementById("guess3char1").innerHTML != false) {
    document.getElementById("guess3char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

const guess4delete = () => {
  if (document.getElementById("guess4char5").innerHTML != false) {
    document.getElementById("guess4char5").innerHTML = "";
  } else if (document.getElementById("guess4char4").innerHTML != false) {
    document.getElementById("guess4char4").innerHTML = "";
  } else if (document.getElementById("guess4char3").innerHTML != false) {
    document.getElementById("guess4char3").innerHTML = "";
  } else if (document.getElementById("guess4char2").innerHTML != false) {
    document.getElementById("guess4char2").innerHTML = "";
  } else if (document.getElementById("guess4char1").innerHTML != false) {
    document.getElementById("guess4char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

const guess5delete = () => {
  if (document.getElementById("guess5char5").innerHTML != false) {
    document.getElementById("guess5char5").innerHTML = "";
  } else if (document.getElementById("guess5char4").innerHTML != false) {
    document.getElementById("guess5char4").innerHTML = "";
  } else if (document.getElementById("guess5char3").innerHTML != false) {
    document.getElementById("guess5char3").innerHTML = "";
  } else if (document.getElementById("guess5char2").innerHTML != false) {
    document.getElementById("guess5char2").innerHTML = "";
  } else if (document.getElementById("guess5char1").innerHTML != false) {
    document.getElementById("guess5char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

const guess6delete = () => {
  if (document.getElementById("guess6char5").innerHTML != false) {
    document.getElementById("guess6char5").innerHTML = "";
  } else if (document.getElementById("guess6char4").innerHTML != false) {
    document.getElementById("guess6char4").innerHTML = "";
  } else if (document.getElementById("guess6char3").innerHTML != false) {
    document.getElementById("guess6char3").innerHTML = "";
  } else if (document.getElementById("guess6char2").innerHTML != false) {
    document.getElementById("guess6char2").innerHTML = "";
  } else if (document.getElementById("guess6char1").innerHTML != false) {
    document.getElementById("guess6char1").innerHTML = "";
  } else {
    console.log("nothing to delete");
  }
};

/*
const letterMatch = () => {
  if( guess1.length < answer.length )
        return letterMatch(b, a)

    for( var i = 0, len = answer.length; i < len; i++ )
        if(guess1.indexOf(a[i]) != -1)
            return true;

    return false
}
*/

//Keyboard scripting

const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys =
      this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach((element) => {
      element.addEventListener("focus", () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "_",
      "done",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      "backspace",
    ];

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.id = keyLayout.indexOf(key) + "key";
      const insertLineBreak = ["P", "_"].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("delete");

          keyElement.addEventListener("click", () => {
            if (guessCounter === 0) {
              guess1delete();
            } else if (guessCounter === 1) {
              guess2delete();
            } else if (guessCounter === 2) {
              guess3delete();
            } else if (guessCounter === 3) {
              guess4delete();
            } else if (guessCounter === 4) {
              guess5delete();
            } else if (guessCounter === 5) {
              guess6delete();
            }
          });

          break;

        case "done":
          keyElement.classList.add(
            "keyboard__key--wide",
            "keyboard__key--dark"
          );
          keyElement.innerHTML = createIconHTML("Check");

          keyElement.addEventListener("click", () => {
            guessCounter++;
            console.log(guessCounter);

            const hideWrongLetters = function () {};

            //First Guess
            if (document.getElementById("guess1char5").innerHTML === "") {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
              console.log(guessCounter);
            } else {
              //Create string with all characters
              guessCreate1();
              hideWrongLetters();

              //First Character Logic

              if (guess1[0] === answer[0]) {
                document.getElementById("guess11").style.backgroundColor =
                  "Green";
                const greenKey11 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey11).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess1[0], answer) !== false) {
                document.getElementById("guess11").style.backgroundColor =
                  "yellow";
                const yellowKey11 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey11).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess11").style.backgroundColor =
                  "#858585";
                const greyKey11 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey11).style.backgroundColor =
                  "black";
              }

              //Second Character Logic

              if (guess1[1] === answer[1]) {
                document.getElementById("guess12").style.backgroundColor =
                  "Green";
                const greenKey12 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey12).style.backgroundColor =
                  "green";
              } else if (
                guess1[1] === guess1[0] &&
                yellowLetter(guess1[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess1[1], answer));
                document.getElementById("guess12").style.backgroundColor =
                  "yellow";
                const yellowKey12 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey12).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess1[1], answer) !== false &&
                  guess1[1] !== guess1[0]
                ) {
                  document.getElementById("guess12").style.backgroundColor =
                    "yellow";
                  const yellowKey12 =
                    keyLayout.indexOf(
                      document.getElementById("guess1char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey12).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess1[1], answer) !== false &&
                guess1[1] !== guess1[0]
              ) {
                document.getElementById("guess12").style.backgroundColor =
                  "yellow";
                const yellowKey12 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey12).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess12").style.backgroundColor =
                  "#858585";
                const greyKey12 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey12).style.backgroundColor =
                  "black";
              }

              //Third Character Logic
              if (guess1[2] === answer[2]) {
                document.getElementById("guess13").style.backgroundColor =
                  "Green";
                const greenKey13 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey13).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess1[2], answer) !== false) {
                if (guess1[2] !== guess1[1] && guess1[2] !== guess1[0]) {
                  document.getElementById("guess13").style.backgroundColor =
                    "yellow";
                  const yellowKey13 =
                    keyLayout.indexOf(
                      document.getElementById("guess1char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey13).style.backgroundColor =
                    "#CCCC00";
                } else if (guess1[2] === guess1[0] || guess1[2] === guess1[1]) {
                  if (yellowLetter(guess1[2], answer) === "double") {
                    document.getElementById("guess13").style.backgroundColor =
                      "yellow";
                    const yellowKey13 =
                      keyLayout.indexOf(
                        document.getElementById("guess1char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey13).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess13").style.backgroundColor =
                  "#858585";
                const greyKey13 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey13).style.backgroundColor =
                  "black";
              }

              //Fourth Character Logic
              if (guess1[3] === answer[3]) {
                document.getElementById("guess14").style.backgroundColor =
                  "Green";
                const greenKey14 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey14).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess1[3], answer) !== false) {
                if (
                  guess1[3] !== guess1[2] &&
                  guess1[3] !== guess1[1] &&
                  guess1[3] !== guess1[0]
                ) {
                  document.getElementById("guess14").style.backgroundColor =
                    "yellow";
                  const yellowKey14 =
                    keyLayout.indexOf(
                      document.getElementById("guess1char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey14).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess1[3] === guess1[2] ||
                  guess1[3] === guess1[1] ||
                  guess1[3] === guess1[0]
                ) {
                  if (yellowLetter(guess1[3], answer) === "double") {
                    document.getElementById("guess14").style.backgroundColor =
                      "yellow";
                    const yellowKey14 =
                      keyLayout.indexOf(
                        document.getElementById("guess1char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey14).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess14").style.backgroundColor =
                  "#858585";
                const greyKey14 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey14).style.backgroundColor =
                  "black";
              }

              //Fifth Character Logic

              if (guess1[4] === answer[4]) {
                document.getElementById("guess15").style.backgroundColor =
                  "Green";
                const greenKey15 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey15).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess1[4], answer) !== false) {
                console.log("uhp");
                if (
                  guess1[4] !== guess1[3] &&
                  guess1[4] !== guess1[2] &&
                  guess1[4] !== guess1[1] &&
                  guess1[4] !== guess1[0]
                ) {
                  document.getElementById("guess15").style.backgroundColor =
                    "yellow";
                  const yellowKey15 =
                    keyLayout.indexOf(
                      document.getElementById("guess1char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey15).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess1[4] === guess1[3] ||
                  guess1[4] === guess1[2] ||
                  guess1[4] === guess1[1] ||
                  guess1[4] === guess1[0]
                ) {
                  if (yellowLetter(guess1[4], answer) === "double") {
                    document.getElementById("guess15").style.backgroundColor =
                      "yellow";
                    const yellowKey15 =
                      keyLayout.indexOf(
                        document.getElementById("guess1char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey15).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess15").style.backgroundColor =
                  "#858585";
                const greyKey15 =
                  keyLayout.indexOf(
                    document.getElementById("guess1char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey15).style.backgroundColor =
                  "black";
              }
            }

            //*** SECOND Guess ***

            //Second Guess
            if (
              guessCounter === 2 &&
              document.getElementById("guess2char5").innerHTML === ""
            ) {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("wrong").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
            } else if (
              guessCounter === 2 &&
              document.getElementById("guess2char5").innerHTML != ""
            ) {
              //Create string with all characters
              guessCreate2();

              //21 Character Logic

              if (guess2[0] === answer[0]) {
                document.getElementById("guess21").style.backgroundColor =
                  "Green";
                const greenKey21 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey21).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess2[0], answer) !== false) {
                document.getElementById("guess21").style.backgroundColor =
                  "yellow";
                const yellowKey21 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey21).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess21").style.backgroundColor =
                  "#858585";
                const greyKey21 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey21).style.backgroundColor =
                  "black";
              }

              //22 Character Logic

              if (guess2[1] === answer[1]) {
                document.getElementById("guess22").style.backgroundColor =
                  "Green";
                const greenKey22 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey22).style.backgroundColor =
                  "green";
              } else if (
                guess2[1] === guess2[0] &&
                yellowLetter(guess2[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess2[1], answer));
                document.getElementById("guess22").style.backgroundColor =
                  "yellow";
                const yellowKey22 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey22).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess2[1], answer) !== false &&
                  guess2[1] !== guess2[0]
                ) {
                  document.getElementById("guess22").style.backgroundColor =
                    "yellow";
                  const yellowKey22 =
                    keyLayout.indexOf(
                      document.getElementById("guess2char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey22).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess2[1], answer) !== false &&
                guess2[1] !== guess2[0]
              ) {
                document.getElementById("guess22").style.backgroundColor =
                  "yellow";
                const yellowKey22 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey22).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess22").style.backgroundColor =
                  "#858585";
                const greyKey22 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey22).style.backgroundColor =
                  "black";
              }

              //23 Character Logic
              if (guess2[2] === answer[2]) {
                document.getElementById("guess23").style.backgroundColor =
                  "Green";
                const greenKey23 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey23).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess2[2], answer) !== false) {
                if (guess2[2] !== guess2[1] && guess2[2] !== guess2[0]) {
                  document.getElementById("guess23").style.backgroundColor =
                    "yellow";
                  const yellowKey23 =
                    keyLayout.indexOf(
                      document.getElementById("guess2char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey23).style.backgroundColor =
                    "#CCCC00";
                } else if (guess2[2] === guess2[0] || guess2[2] === guess2[1]) {
                  if (yellowLetter(guess2[2], answer) === "double") {
                    document.getElementById("guess23").style.backgroundColor =
                      "yellow";
                    const yellowKey23 =
                      keyLayout.indexOf(
                        document.getElementById("guess2char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey23).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess23").style.backgroundColor =
                  "#858585";
                const greyKey23 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey23).style.backgroundColor =
                  "black";
              }

              //24 Character Logic
              if (guess2[3] === answer[3]) {
                document.getElementById("guess24").style.backgroundColor =
                  "Green";
                const greenKey24 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey24).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess2[3], answer) !== false) {
                if (
                  guess2[3] !== guess2[2] &&
                  guess2[3] !== guess2[1] &&
                  guess2[3] !== guess2[0]
                ) {
                  document.getElementById("guess24").style.backgroundColor =
                    "yellow";
                  const yellowKey24 =
                    keyLayout.indexOf(
                      document.getElementById("guess2char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey24).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess2[3] === guess2[2] ||
                  guess2[3] === guess2[1] ||
                  guess2[3] === guess2[0]
                ) {
                  if (yellowLetter(guess2[3], answer) === "double") {
                    document.getElementById("guess24").style.backgroundColor =
                      "yellow";
                    const yellowKey24 =
                      keyLayout.indexOf(
                        document.getElementById("guess2char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey24).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess24").style.backgroundColor =
                  "#858585";
                const greyKey24 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey24).style.backgroundColor =
                  "black";
              }

              //25 Character Logic

              if (guess2[4] === answer[4]) {
                document.getElementById("guess25").style.backgroundColor =
                  "Green";
                const greenKey25 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey25).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess2[4], answer) !== false) {
                if (
                  guess2[4] !== guess2[3] &&
                  guess2[4] !== guess2[2] &&
                  guess2[4] !== guess2[1] &&
                  guess2[4] !== guess2[0]
                ) {
                  document.getElementById("guess25").style.backgroundColor =
                    "yellow";
                  const yellowKey25 =
                    keyLayout.indexOf(
                      document.getElementById("guess2char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey25).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess2[4] === guess2[3] ||
                  guess2[4] === guess2[2] ||
                  guess2[4] === guess2[1] ||
                  guess2[4] === guess2[0]
                ) {
                  if (yellowLetter(guess2[4], answer) === "double") {
                    document.getElementById("guess25").style.backgroundColor =
                      "yellow";
                    const yellowKey25 =
                      keyLayout.indexOf(
                        document.getElementById("guess2char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey25).style.backgroundColor =
                      "#CCCC00";
                  } else {
                    document.getElementById("guess25").style.backgroundColor =
                      "#858585";
                  }
                }
              } else {
                document.getElementById("guess25").style.backgroundColor =
                  "#858585";
                const greyKey25 =
                  keyLayout.indexOf(
                    document.getElementById("guess2char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey25).style.backgroundColor =
                  "black";
              }
            }

            //*** THIRD Guess ***

            if (
              guessCounter === 3 &&
              document.getElementById("guess3char5").innerHTML === ""
            ) {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("wrong").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
            } else if (
              guessCounter === 3 &&
              document.getElementById("guess3char5").innerHTML != ""
            ) {
              //Create string with all characters
              guessCreate3();

              //31 Character Logic

              if (guess3[0] === answer[0]) {
                document.getElementById("guess31").style.backgroundColor =
                  "Green";
                const greenKey31 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey31).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess3[0], answer) !== false) {
                document.getElementById("guess31").style.backgroundColor =
                  "yellow";
                const yellowKey31 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey31).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess31").style.backgroundColor =
                  "#858585";
                const greyKey31 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey31).style.backgroundColor =
                  "black";
              }

              //32 Character Logic

              if (guess3[1] === answer[1]) {
                document.getElementById("guess32").style.backgroundColor =
                  "Green";
                const greenKey32 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey32).style.backgroundColor =
                  "green";
              } else if (
                guess3[1] === guess3[0] &&
                yellowLetter(guess3[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess3[1], answer));
                document.getElementById("guess32").style.backgroundColor =
                  "yellow";
                const yellowKey32 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey32).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess3[1], answer) !== false &&
                  guess3[1] !== guess3[0]
                ) {
                  document.getElementById("guess32").style.backgroundColor =
                    "yellow";
                  const yellowKey32 =
                    keyLayout.indexOf(
                      document.getElementById("guess3char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey32).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess3[1], answer) !== false &&
                guess3[1] !== guess3[0]
              ) {
                document.getElementById("guess32").style.backgroundColor =
                  "yellow";
                const yellowKey32 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey32).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess32").style.backgroundColor =
                  "#858585";
                const greyKey32 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey32).style.backgroundColor =
                  "black";
              }

              //33 Character Logic
              if (guess3[2] === answer[2]) {
                document.getElementById("guess33").style.backgroundColor =
                  "Green";
                const greenKey33 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey33).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess3[2], answer) !== false) {
                if (guess3[2] !== guess3[1] && guess3[2] !== guess3[0]) {
                  document.getElementById("guess33").style.backgroundColor =
                    "yellow";
                  const yellowKey33 =
                    keyLayout.indexOf(
                      document.getElementById("guess3char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey33).style.backgroundColor =
                    "#CCCC00";
                } else if (guess3[2] === guess3[0] || guess3[2] === guess3[1]) {
                  if (yellowLetter(guess3[2], answer) === "double") {
                    document.getElementById("guess33").style.backgroundColor =
                      "yellow";
                    const yellowKey33 =
                      keyLayout.indexOf(
                        document.getElementById("guess3char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey33).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess33").style.backgroundColor =
                  "#858585";
                const greyKey33 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey33).style.backgroundColor =
                  "black";
              }

              //34 Character Logic
              if (guess3[3] === answer[3]) {
                document.getElementById("guess34").style.backgroundColor =
                  "Green";
                const greenKey34 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey34).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess3[3], answer) !== false) {
                if (
                  guess3[3] !== guess3[2] &&
                  guess3[3] !== guess3[1] &&
                  guess3[3] !== guess3[0]
                ) {
                  document.getElementById("guess34").style.backgroundColor =
                    "yellow";
                  const yellowKey34 =
                    keyLayout.indexOf(
                      document.getElementById("guess3char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey34).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess3[3] === guess3[2] ||
                  guess3[3] === guess3[1] ||
                  guess3[3] === guess3[0]
                ) {
                  if (yellowLetter(guess3[3], answer) === "double") {
                    document.getElementById("guess34").style.backgroundColor =
                      "yellow";
                    const yellowKey34 =
                      keyLayout.indexOf(
                        document.getElementById("guess3char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey34).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess34").style.backgroundColor =
                  "#858585";
                const greyKey34 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey34).style.backgroundColor =
                  "black";
              }

              //35 Character Logic

              if (guess3[4] === answer[4]) {
                document.getElementById("guess35").style.backgroundColor =
                  "Green";
                const greenKey35 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey35).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess3[4], answer) !== false) {
                if (
                  guess3[4] !== guess3[3] &&
                  guess3[4] !== guess3[2] &&
                  guess3[4] !== guess3[1] &&
                  guess3[4] !== guess3[0]
                ) {
                  document.getElementById("guess35").style.backgroundColor =
                    "yellow";
                  const yellowKey35 =
                    keyLayout.indexOf(
                      document.getElementById("guess3char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey35).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess3[4] === guess3[3] ||
                  guess3[4] === guess3[2] ||
                  guess3[4] === guess3[1] ||
                  guess3[4] === guess3[0]
                ) {
                  if (yellowLetter(guess3[4], answer) === "double") {
                    document.getElementById("guess35").style.backgroundColor =
                      "yellow";
                    const yellowKey35 =
                      keyLayout.indexOf(
                        document.getElementById("guess3char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey35).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess35").style.backgroundColor =
                  "#858585";
                const greyKey35 =
                  keyLayout.indexOf(
                    document.getElementById("guess3char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey35).style.backgroundColor =
                  "black";
              }
            }

            //*** FOURTH Guess ***

            if (
              guessCounter === 4 &&
              document.getElementById("guess4char5").innerHTML === ""
            ) {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("wrong").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
            } else if (
              guessCounter === 4 &&
              document.getElementById("guess4char5").innerHTML != ""
            ) {
              //Create string with all characters
              guessCreate4();

              //41 Character Logic

              if (guess4[0] === answer[0]) {
                document.getElementById("guess41").style.backgroundColor =
                  "Green";
                const greenKey41 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey41).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess4[0], answer) !== false) {
                document.getElementById("guess41").style.backgroundColor =
                  "yellow";
                const yellowKey41 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey41).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess41").style.backgroundColor =
                  "#858585";
                const greyKey41 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey41).style.backgroundColor =
                  "black";
              }

              //42 Character Logic

              if (guess4[1] === answer[1]) {
                document.getElementById("guess42").style.backgroundColor =
                  "Green";
                const greenKey42 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey42).style.backgroundColor =
                  "green";
              } else if (
                guess4[1] === guess4[0] &&
                yellowLetter(guess4[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess4[1], answer));
                document.getElementById("guess42").style.backgroundColor =
                  "yellow";
                const yellowKey42 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey42).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess4[1], answer) !== false &&
                  guess4[1] !== guess4[0]
                ) {
                  document.getElementById("guess42").style.backgroundColor =
                    "yellow";
                  const yellowKey42 =
                    keyLayout.indexOf(
                      document.getElementById("guess4char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey42).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess4[1], answer) !== false &&
                guess4[1] !== guess4[0]
              ) {
                document.getElementById("guess42").style.backgroundColor =
                  "yellow";
                const yellowKey42 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey42).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess42").style.backgroundColor =
                  "#858585";
                const greyKey42 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey42).style.backgroundColor =
                  "black";
              }

              //43 Character Logic
              if (guess4[2] === answer[2]) {
                document.getElementById("guess43").style.backgroundColor =
                  "Green";
                const greenKey43 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey43).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess4[2], answer) !== false) {
                if (guess4[2] !== guess4[1] && guess4[2] !== guess4[0]) {
                  document.getElementById("guess43").style.backgroundColor =
                    "yellow";
                  const yellowKey43 =
                    keyLayout.indexOf(
                      document.getElementById("guess4char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey43).style.backgroundColor =
                    "#CCCC00";
                } else if (guess4[2] === guess4[0] || guess4[2] === guess4[1]) {
                  if (yellowLetter(guess4[2], answer) === "double") {
                    document.getElementById("guess43").style.backgroundColor =
                      "yellow";
                    const yellowKey43 =
                      keyLayout.indexOf(
                        document.getElementById("guess4char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey43).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess43").style.backgroundColor =
                  "#858585";
                const greyKey43 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey43).style.backgroundColor =
                  "black";
              }

              //44 Character Logic
              if (guess4[3] === answer[3]) {
                document.getElementById("guess44").style.backgroundColor =
                  "Green";
                const greenKey44 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey44).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess4[3], answer) !== false) {
                if (
                  guess4[3] !== guess4[2] &&
                  guess4[3] !== guess4[1] &&
                  guess4[3] !== guess4[0]
                ) {
                  document.getElementById("guess44").style.backgroundColor =
                    "yellow";
                  const yellowKey44 =
                    keyLayout.indexOf(
                      document.getElementById("guess4char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey44).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess4[3] === guess4[2] ||
                  guess4[3] === guess4[1] ||
                  guess4[3] === guess4[0]
                ) {
                  if (yellowLetter(guess4[3], answer) === "double") {
                    document.getElementById("guess44").style.backgroundColor =
                      "yellow";
                    const yellowKey44 =
                      keyLayout.indexOf(
                        document.getElementById("guess4char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey44).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess44").style.backgroundColor =
                  "#858585";
                const greyKey44 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey44).style.backgroundColor =
                  "black";
              }

              //45 Character Logic

              if (guess4[4] === answer[4]) {
                document.getElementById("guess45").style.backgroundColor =
                  "Green";
                const greenKey45 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey45).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess4[4], answer) !== false) {
                if (
                  guess4[4] !== guess4[3] &&
                  guess4[4] !== guess4[2] &&
                  guess4[4] !== guess4[1] &&
                  guess4[4] !== guess4[0]
                ) {
                  document.getElementById("guess45").style.backgroundColor =
                    "yellow";
                  const yellowKey45 =
                    keyLayout.indexOf(
                      document.getElementById("guess4char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey45).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess4[4] === guess4[3] ||
                  guess4[4] === guess4[2] ||
                  guess4[4] === guess4[1] ||
                  guess4[4] === guess4[0]
                ) {
                  if (yellowLetter(guess4[4], answer) === "double") {
                    document.getElementById("guess45").style.backgroundColor =
                      "yellow";
                    const yellowKey45 =
                      keyLayout.indexOf(
                        document.getElementById("guess4char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey45).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess45").style.backgroundColor =
                  "#858585";
                const greyKey45 =
                  keyLayout.indexOf(
                    document.getElementById("guess4char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey45).style.backgroundColor =
                  "black";
              }
            }

            //*** FIFTH Guess ***

            if (
              guessCounter === 5 &&
              document.getElementById("guess5char5").innerHTML === ""
            ) {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("wrong").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
            } else if (
              guessCounter === 5 &&
              document.getElementById("guess5char5").innerHTML != ""
            ) {
              //Create string with all characters
              guessCreate5();

              //51 Character Logic

              if (guess5[0] === answer[0]) {
                document.getElementById("guess51").style.backgroundColor =
                  "Green";
                const greenKey51 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey51).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess5[0], answer) !== false) {
                document.getElementById("guess51").style.backgroundColor =
                  "yellow";
                const yellowKey51 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey51).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess51").style.backgroundColor =
                  "#858585";
                const greyKey51 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey51).style.backgroundColor =
                  "black";
              }

              //52 Character Logic

              if (guess5[1] === answer[1]) {
                document.getElementById("guess52").style.backgroundColor =
                  "Green";
                const greenKey52 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey52).style.backgroundColor =
                  "green";
              } else if (
                guess5[1] === guess5[0] &&
                yellowLetter(guess5[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess5[1], answer));
                document.getElementById("guess52").style.backgroundColor =
                  "yellow";
                const yellowKey52 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey52).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess5[1], answer) !== false &&
                  guess5[1] !== guess5[0]
                ) {
                  document.getElementById("guess52").style.backgroundColor =
                    "yellow";
                  const yellowKey52 =
                    keyLayout.indexOf(
                      document.getElementById("guess5char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey52).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess5[1], answer) !== false &&
                guess5[1] !== guess5[0]
              ) {
                document.getElementById("guess52").style.backgroundColor =
                  "yellow";
                const yellowKey52 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey52).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess52").style.backgroundColor =
                  "#858585";
                const greyKey52 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey52).style.backgroundColor =
                  "black";
              }

              //53 Character Logic
              if (guess5[2] === answer[2]) {
                document.getElementById("guess53").style.backgroundColor =
                  "Green";
                const greenKey53 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey53).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess5[2], answer) !== false) {
                if (guess5[2] !== guess5[1] && guess5[2] !== guess5[0]) {
                  document.getElementById("guess53").style.backgroundColor =
                    "yellow";
                  const yellowKey53 =
                    keyLayout.indexOf(
                      document.getElementById("guess5char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey53).style.backgroundColor =
                    "#CCCC00";
                } else if (guess5[2] === guess5[0] || guess5[2] === guess5[1]) {
                  if (yellowLetter(guess5[2], answer) === "double") {
                    document.getElementById("guess53").style.backgroundColor =
                      "yellow";
                    const yellowKey53 =
                      keyLayout.indexOf(
                        document.getElementById("guess5char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey53).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess53").style.backgroundColor =
                  "#858585";
                const greyKey53 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey53).style.backgroundColor =
                  "black";
              }

              //54 Character Logic
              if (guess5[3] === answer[3]) {
                document.getElementById("guess54").style.backgroundColor =
                  "Green";
                const greenKey54 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey54).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess5[3], answer) !== false) {
                if (
                  guess5[3] !== guess5[2] &&
                  guess5[3] !== guess5[1] &&
                  guess5[3] !== guess5[0]
                ) {
                  document.getElementById("guess54").style.backgroundColor =
                    "yellow";
                  const yellowKey54 =
                    keyLayout.indexOf(
                      document.getElementById("guess5char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey54).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess5[3] === guess5[2] ||
                  guess5[3] === guess5[1] ||
                  guess5[3] === guess5[0]
                ) {
                  if (yellowLetter(guess5[3], answer) === "double") {
                    document.getElementById("guess54").style.backgroundColor =
                      "yellow";
                    const yellowKey54 =
                      keyLayout.indexOf(
                        document.getElementById("guess5char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey54).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess54").style.backgroundColor =
                  "#858585";
                const greyKey54 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey54).style.backgroundColor =
                  "black";
              }

              //55 Character Logic

              if (guess5[4] === answer[4]) {
                document.getElementById("guess55").style.backgroundColor =
                  "Green";
                const greenKey55 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey55).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess5[4], answer) !== false) {
                if (
                  guess5[4] !== guess5[3] &&
                  guess5[4] !== guess5[2] &&
                  guess5[4] !== guess5[1] &&
                  guess5[4] !== guess5[0]
                ) {
                  document.getElementById("guess55").style.backgroundColor =
                    "yellow";
                  const yellowKey55 =
                    keyLayout.indexOf(
                      document.getElementById("guess5char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey55).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess5[4] === guess5[3] ||
                  guess5[4] === guess5[2] ||
                  guess5[4] === guess5[1] ||
                  guess5[4] === guess5[0]
                ) {
                  if (yellowLetter(guess5[4], answer) === "double") {
                    document.getElementById("guess55").style.backgroundColor =
                      "yellow";
                    const yellowKey55 =
                      keyLayout.indexOf(
                        document.getElementById("guess5char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey55).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess55").style.backgroundColor =
                  "#858585";
                const greyKey55 =
                  keyLayout.indexOf(
                    document.getElementById("guess5char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey55).style.backgroundColor =
                  "black";
              }
            }

            //*** SIXTH Guess ***

            if (
              guessCounter === 6 &&
              document.getElementById("guess6char5").innerHTML === ""
            ) {
              document.getElementById("kordle").style.display = "none";
              document.getElementById("wrong").style.display = "none";
              document.getElementById("fullWord").style.display = "block";
              guessCounter--;
            } else if (
              guessCounter === 6 &&
              document.getElementById("guess6char5").innerHTML != ""
            ) {
              //Create string with all characters
              guessCreate6();

              //61 Character Logic

              if (guess6[0] === answer[0]) {
                document.getElementById("guess61").style.backgroundColor =
                  "Green";
                const greenKey61 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char1").innerHTML
                  ) + "key";
                document.getElementById(greenKey61).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess6[0], answer) !== false) {
                document.getElementById("guess61").style.backgroundColor =
                  "yellow";
                const yellowKey61 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char1").innerHTML
                  ) + "key";
                document.getElementById(yellowKey61).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess61").style.backgroundColor =
                  "#858585";
                const greyKey61 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char1").innerHTML
                  ) + "key";
                document.getElementById(greyKey61).style.backgroundColor =
                  "black";
              }

              //62 Character Logic

              if (guess6[1] === answer[1]) {
                document.getElementById("guess62").style.backgroundColor =
                  "Green";
                const greenKey62 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char2").innerHTML
                  ) + "key";
                document.getElementById(greenKey62).style.backgroundColor =
                  "green";
              } else if (
                guess6[1] === guess6[0] &&
                yellowLetter(guess6[1], answer) === "double"
              ) {
                console.log(yellowLetter(guess6[1], answer));
                document.getElementById("guess62").style.backgroundColor =
                  "yellow";
                const yellowKey62 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey62).style.backgroundColor =
                  "#CCCC00";
                if (
                  yellowLetter(guess6[1], answer) !== false &&
                  guess6[1] !== guess6[0]
                ) {
                  document.getElementById("guess62").style.backgroundColor =
                    "yellow";
                  const yellowKey62 =
                    keyLayout.indexOf(
                      document.getElementById("guess6char2").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey62).style.backgroundColor =
                    "#CCCC00";
                } else {
                  console.log("here");
                }
              } else if (
                yellowLetter(guess6[1], answer) !== false &&
                guess6[1] !== guess6[0]
              ) {
                document.getElementById("guess62").style.backgroundColor =
                  "yellow";
                const yellowKey62 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char2").innerHTML
                  ) + "key";
                document.getElementById(yellowKey62).style.backgroundColor =
                  "#CCCC00";
              } else {
                document.getElementById("guess62").style.backgroundColor =
                  "#858585";
                const greyKey62 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char2").innerHTML
                  ) + "key";
                document.getElementById(greyKey62).style.backgroundColor =
                  "black";
              }

              //63 Character Logic
              if (guess6[2] === answer[2]) {
                document.getElementById("guess63").style.backgroundColor =
                  "Green";
                const greenKey63 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char3").innerHTML
                  ) + "key";
                document.getElementById(greenKey63).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess6[2], answer) !== false) {
                if (guess6[2] !== guess6[1] && guess6[2] !== guess6[0]) {
                  document.getElementById("guess63").style.backgroundColor =
                    "yellow";
                  const yellowKey63 =
                    keyLayout.indexOf(
                      document.getElementById("guess6char3").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey63).style.backgroundColor =
                    "#CCCC00";
                } else if (guess6[2] === guess6[0] || guess6[2] === guess6[1]) {
                  if (yellowLetter(guess6[2], answer) === "double") {
                    document.getElementById("guess63").style.backgroundColor =
                      "yellow";
                    const yellowKey63 =
                      keyLayout.indexOf(
                        document.getElementById("guess6char3").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey63).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess63").style.backgroundColor =
                  "#858585";
                const greyKey63 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char3").innerHTML
                  ) + "key";
                document.getElementById(greyKey63).style.backgroundColor =
                  "black";
              }

              //64 Character Logic
              if (guess6[3] === answer[3]) {
                document.getElementById("guess64").style.backgroundColor =
                  "Green";
                const greenKey64 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char4").innerHTML
                  ) + "key";
                document.getElementById(greenKey64).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess6[3], answer) !== false) {
                if (
                  guess6[3] !== guess6[2] &&
                  guess6[3] !== guess6[1] &&
                  guess6[3] !== guess6[0]
                ) {
                  document.getElementById("guess64").style.backgroundColor =
                    "yellow";
                  const yellowKey64 =
                    keyLayout.indexOf(
                      document.getElementById("guess6char4").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey64).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess6[3] === guess6[2] ||
                  guess6[3] === guess6[1] ||
                  guess6[3] === guess6[0]
                ) {
                  if (yellowLetter(guess6[3], answer) === "double") {
                    document.getElementById("guess64").style.backgroundColor =
                      "yellow";
                    const yellowKey64 =
                      keyLayout.indexOf(
                        document.getElementById("guess6char4").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey64).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess64").style.backgroundColor =
                  "#858585";
                const greyKey64 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char4").innerHTML
                  ) + "key";
                document.getElementById(greyKey64).style.backgroundColor =
                  "black";
              }

              //65 Character Logic

              if (guess6[4] === answer[4]) {
                document.getElementById("guess65").style.backgroundColor =
                  "Green";
                const greenKey65 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char5").innerHTML
                  ) + "key";
                document.getElementById(greenKey65).style.backgroundColor =
                  "green";
              } else if (yellowLetter(guess6[4], answer) !== false) {
                if (
                  guess6[4] !== guess6[3] &&
                  guess6[4] !== guess6[2] &&
                  guess6[4] !== guess6[1] &&
                  guess6[4] !== guess6[0]
                ) {
                  document.getElementById("guess65").style.backgroundColor =
                    "yellow";
                  const yellowKey65 =
                    keyLayout.indexOf(
                      document.getElementById("guess6char5").innerHTML
                    ) + "key";
                  document.getElementById(yellowKey65).style.backgroundColor =
                    "#CCCC00";
                } else if (
                  guess6[4] === guess6[3] ||
                  guess6[4] === guess6[2] ||
                  guess6[4] === guess6[1] ||
                  guess6[4] === guess6[0]
                ) {
                  if (yellowLetter(guess6[4], answer) === "double") {
                    document.getElementById("guess65").style.backgroundColor =
                      "yellow";
                    const yellowKey65 =
                      keyLayout.indexOf(
                        document.getElementById("guess6char5").innerHTML
                      ) + "key";
                    document.getElementById(yellowKey65).style.backgroundColor =
                      "#CCCC00";
                  }
                }
              } else {
                document.getElementById("guess65").style.backgroundColor =
                  "#858585";
                const greyKey65 =
                  keyLayout.indexOf(
                    document.getElementById("guess6char5").innerHTML
                  ) + "key";
                document.getElementById(greyKey65).style.backgroundColor =
                  "black";
              }
            }
            if (winCondition === "yes") {
              shareScore();
            }
          });

          break;

        //Main function to fill guesses

        default:
          keyElement.textContent = key.toUpperCase();

          keyElement.addEventListener("click", keyAdd);

          function keyAdd() {
            document.getElementById("fullWord").style.display = "none";
            document.getElementById("wrong").style.display = "none";
            document.getElementById("youWin").style.display = "none";
            document.getElementById("youLose").style.display = "none";

            document.getElementById("kordle").style.display = "block";

            //first guess
            if (document.getElementById("guess1char1").innerHTML === "") {
              document.getElementById("guess1char1").innerHTML =
                keyElement.textContent;
            } else if (
              document.getElementById("guess1char2").innerHTML === ""
            ) {
              document.getElementById("guess1char2").innerHTML =
                keyElement.textContent;
            } else if (
              document.getElementById("guess1char3").innerHTML === ""
            ) {
              document.getElementById("guess1char3").innerHTML =
                keyElement.textContent;
            } else if (
              document.getElementById("guess1char4").innerHTML === ""
            ) {
              document.getElementById("guess1char4").innerHTML =
                keyElement.textContent;
            } else if (
              document.getElementById("guess1char5").innerHTML === ""
            ) {
              document.getElementById("guess1char5").innerHTML =
                keyElement.textContent;
            }

            //second guess
            if (
              guessCounter === 1 &&
              document.getElementById("guess2char1").innerHTML === ""
            ) {
              document.getElementById("guess2char1").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 1 &&
              document.getElementById("guess2char2").innerHTML === ""
            ) {
              document.getElementById("guess2char2").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 1 &&
              document.getElementById("guess2char3").innerHTML === ""
            ) {
              document.getElementById("guess2char3").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 1 &&
              document.getElementById("guess2char4").innerHTML === ""
            ) {
              document.getElementById("guess2char4").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 1 &&
              document.getElementById("guess2char5").innerHTML === ""
            ) {
              document.getElementById("guess2char5").innerHTML =
                keyElement.textContent;
            }

            //third guess
            if (
              guessCounter === 2 &&
              document.getElementById("guess3char1").innerHTML === ""
            ) {
              document.getElementById("guess3char1").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 2 &&
              document.getElementById("guess3char2").innerHTML === ""
            ) {
              document.getElementById("guess3char2").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 2 &&
              document.getElementById("guess3char3").innerHTML === ""
            ) {
              document.getElementById("guess3char3").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 2 &&
              document.getElementById("guess3char4").innerHTML === ""
            ) {
              document.getElementById("guess3char4").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 2 &&
              document.getElementById("guess3char5").innerHTML === ""
            ) {
              document.getElementById("guess3char5").innerHTML =
                keyElement.textContent;
            }

            //fourth guess
            if (
              guessCounter === 3 &&
              document.getElementById("guess4char1").innerHTML === ""
            ) {
              document.getElementById("guess4char1").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 3 &&
              document.getElementById("guess4char2").innerHTML === ""
            ) {
              document.getElementById("guess4char2").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 3 &&
              document.getElementById("guess4char3").innerHTML === ""
            ) {
              document.getElementById("guess4char3").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 3 &&
              document.getElementById("guess4char4").innerHTML === ""
            ) {
              document.getElementById("guess4char4").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 3 &&
              document.getElementById("guess4char5").innerHTML === ""
            ) {
              document.getElementById("guess4char5").innerHTML =
                keyElement.textContent;
            }

            //fifth guess
            if (
              guessCounter === 4 &&
              document.getElementById("guess5char1").innerHTML === ""
            ) {
              document.getElementById("guess5char1").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 4 &&
              document.getElementById("guess5char2").innerHTML === ""
            ) {
              document.getElementById("guess5char2").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 4 &&
              document.getElementById("guess5char3").innerHTML === ""
            ) {
              document.getElementById("guess5char3").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 4 &&
              document.getElementById("guess5char4").innerHTML === ""
            ) {
              document.getElementById("guess5char4").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 4 &&
              document.getElementById("guess5char5").innerHTML === ""
            ) {
              document.getElementById("guess5char5").innerHTML =
                keyElement.textContent;
            }

            //sixth guess
            if (
              guessCounter === 5 &&
              document.getElementById("guess6char1").innerHTML === ""
            ) {
              document.getElementById("guess6char1").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 5 &&
              document.getElementById("guess6char2").innerHTML === ""
            ) {
              document.getElementById("guess6char2").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 5 &&
              document.getElementById("guess6char3").innerHTML === ""
            ) {
              document.getElementById("guess6char3").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 5 &&
              document.getElementById("guess6char4").innerHTML === ""
            ) {
              document.getElementById("guess6char4").innerHTML =
                keyElement.textContent;
            } else if (
              guessCounter === 5 &&
              document.getElementById("guess6char5").innerHTML === ""
            ) {
              document.getElementById("guess6char5").innerHTML =
                keyElement.textContent;
            }
          }
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  },
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});

function shareScore() {
  firstLine = [];
  secondLine = [];
  thirdLine = [];
  fourthLine = [];
  fifthLine = [];
  sixthLine = [];
  greenSquare = "🟩";
  yellowSquare = "🟨";
  blackSquare = "⬛";
  linebreak = `\r\n`;

  //First Row

  if (
    window
      .getComputedStyle(document.getElementById("guess11"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    firstLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess11"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    firstLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess11"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    firstLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess12"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    firstLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess12"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    firstLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess12"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    firstLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess13"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    firstLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess13"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    firstLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess13"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    firstLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess14"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    firstLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess14"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    firstLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess14"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    firstLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess15"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    firstLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess15"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    firstLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess15"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    firstLine.push(blackSquare);
  }

  //Second Row
  if (
    window
      .getComputedStyle(document.getElementById("guess21"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    secondLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess21"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    secondLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess21"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    secondLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess22"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    secondLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess22"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    secondLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess22"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    secondLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess23"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    secondLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess23"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    secondLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess23"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    secondLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess24"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    secondLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess24"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    secondLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess24"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    secondLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess25"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    secondLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess25"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    secondLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess25"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    secondLine.push(blackSquare);
  }

  //Third Row

  if (
    window
      .getComputedStyle(document.getElementById("guess31"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    thirdLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess31"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    thirdLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess31"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    thirdLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess32"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    thirdLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess32"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    thirdLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess32"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    thirdLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess33"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    thirdLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess33"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    thirdLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess33"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    thirdLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess34"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    thirdLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess34"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    thirdLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess34"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    thirdLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess35"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    thirdLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess35"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    thirdLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess35"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    thirdLine.push(blackSquare);
  }

  //Fourth Row

  if (
    window
      .getComputedStyle(document.getElementById("guess41"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fourthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess41"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fourthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess41"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fourthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess42"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fourthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess42"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fourthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess42"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fourthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess43"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fourthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess43"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fourthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess43"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fourthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess44"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fourthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess44"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fourthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess44"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fourthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess45"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fourthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess45"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fourthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess45"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fourthLine.push(blackSquare);
  }

  //Fifth Row

  if (
    window
      .getComputedStyle(document.getElementById("guess51"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fifthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess51"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fifthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess51"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fifthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess52"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fifthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess52"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fifthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess52"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fifthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess53"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fifthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess53"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fifthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess53"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fifthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess54"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fifthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess54"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fifthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess54"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fifthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess55"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    fifthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess55"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    fifthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess55"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    fifthLine.push(blackSquare);
  }

  //Sixth Row

  if (
    window
      .getComputedStyle(document.getElementById("guess61"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    sixthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess61"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    sixthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess61"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    sixthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess62"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    sixthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess62"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    sixthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess62"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    sixthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess63"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    sixthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess63"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    sixthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess63"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    sixthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess64"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    sixthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess64"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    sixthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess64"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    sixthLine.push(blackSquare);
  }

  if (
    window
      .getComputedStyle(document.getElementById("guess65"), null)
      .getPropertyValue("background-color") === "rgb(0, 128, 0)"
  ) {
    sixthLine.push(greenSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess65"), null)
      .getPropertyValue("background-color") === "rgb(255, 255, 0)"
  ) {
    sixthLine.push(yellowSquare);
  } else if (
    window
      .getComputedStyle(document.getElementById("guess65"), null)
      .getPropertyValue("background-color") === "rgb(133, 133, 133)"
  ) {
    sixthLine.push(blackSquare);
  }

  /* Copy the text inside the text field */
  //  navigator.clipboard.writeText("Kordle" + linebreak + firstLine.join('') + linebreak + secondLine.join('') + linebreak + thirdLine.join('') + linebreak + fourthLine.join('') + linebreak + fifthLine.join('')+ linebreak + sixthLine.join(''));

  if (guess2.length === 0) {
    sharedScore = "Kordle 1/6" + linebreak + firstLine.join("");
    console.log("here");
    console.log(firstLine);
  } else if (guess3.length === 0) {
    sharedScore =
      "Kordle 2/6" +
      linebreak +
      firstLine.join("") +
      linebreak +
      secondLine.join("");
  } else if (guess4.length === 0) {
    sharedScore =
      "Kordle 3/6" +
      linebreak +
      firstLine.join("") +
      linebreak +
      secondLine.join("") +
      linebreak +
      thirdLine.join("");
  } else if (guess5.length === 0) {
    sharedScore =
      "Kordle 4/6" +
      linebreak +
      firstLine.join("") +
      linebreak +
      secondLine.join("") +
      linebreak +
      thirdLine.join("") +
      linebreak +
      fourthLine.join("");
  } else if (guess6.length === 0) {
    sharedScore =
      "Kordle 5/6" +
      linebreak +
      firstLine.join("") +
      linebreak +
      secondLine.join("") +
      linebreak +
      thirdLine.join("") +
      linebreak +
      fourthLine.join("") +
      linebreak +
      fifthLine.join("");
  } else if (guess6.length != 0) {
    sharedScore =
      "Kordle 6/6" +
      linebreak +
      firstLine.join("") +
      linebreak +
      secondLine.join("") +
      linebreak +
      thirdLine.join("") +
      linebreak +
      fourthLine.join("") +
      linebreak +
      fifthLine.join("") +
      linebreak +
      sixthLine.join("");
  } else {
    console.log("uh oh");
  }
}

// Share Button Code
shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        text: sharedScore,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // fallback
  }
});
