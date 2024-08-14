const tableData = [
    {
        timestamp: 92.0,
        move: "d4",
        prev: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
        next: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "ladies and gentlemen welcome back to the Grand chess tour 2024 uh this event is a classical chess tournament being played in Bucharest Romania and this is the fourth round recap now this is also a little bit of a test of you you the viewer watching this right now because we don't have Magnus Carlson and we don't have hikara nakamuro participating and I asked you in yesterday's video well if you watched yesterday some of you might be watching this at some point in the future so it was not yesterday for you but I asked in yesterday's video if you actually do care about events without the two superstars of Chess participating and the response was quite positive so we will continue to this coverage uh alongside uh other content now I do apologize uh for flashing my uh my my muscles on camera and potentially intimidating some of you I I know I know these are these are the shoulders that can lateral raise 15 PBS 10 times four sets I mean hey don't say I didn't warn you can overhead press 100 lb though anyway today's recap is two games that's it all you got to do is last through two chess games and um I'll let you go all right you got to learn a couple of things though we have Fabiano Carana versus Bogdan Daniel deak who's the number one ranked player from Romania some of you correctly pointed out in yesterday's video that's actually supposed to be Richard report nope report was Romanian for like two years and now he's Hungarian again like not by birth or by ancestry like by Federation um and then we have paganda versus an Gary"
    },
    {
        timestamp: 103.6,
        move: "Nb1",
        prev: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: "pranda put on a a a clinic today and it's it's quite nice and quite fascinating watching all these stars of India play chat Fabiano Carana meanwhile you know super boss super Chad trying to"
    },
    {
        timestamp: 108.2,
        move: "Nb1",
        prev: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: "be the uh number two ranked player in the world so Fabby opens with D4 Knight F6 C4 E6 Knight C3 now this is multiple"
    },
    {
        timestamp: 115.6,
        move: "Bb4",
        prev: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR",
        caption: "games of this event now where players have actually baited Bogan uh Daniel"
    },
    {
        timestamp: 130.2,
        move: "a3",
        prev: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR",
        next: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/P1N1P3/1P3PPP/R1BQKBNR",
        caption: "deak into playing the NSO Indian again black utilizes this move order so that they don't have to commit a pawn to D5 and first they wait for a move from the white side and and Fabiano happily plays into this now couple of rounds ago"
    },
    {
        timestamp: 139.2,
        move: "e3",
        prev: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR",
        caption: "gukesh played E3 Bishop D2 that's a sideline nobody plays old you kind of main lines anymore E3 and now we wait will Fabby play Knight E2 will he play"
    },
    {
        timestamp: 142.6,
        move: "Bd2",
        prev: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR",
        next: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP1B1PPP/R2QKBNR",
        caption: "Bishop D3 and then Knight E2 what is he going to do he plays A3 now what's funny"
    },
    {
        timestamp: 144.4,
        move: "a3",
        prev: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR",
        next: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/P1N1P3/1P3PPP/R1BQKBNR",
        caption: "when I saw this is that I have played"
    },
    {
        timestamp: 153.8,
        move: "d5",
        prev: "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR",
        next: "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1P1P3/5PPP/R1BQKBNR",
        caption: "this myself and I thought it sucked the reason that you play A3 is you just want this to happen but you will remember a"
    },
    {
        timestamp: 156.0,
        move: "Bd3",
        prev: "rnbq1rk1/ppp2ppp/5n2/3p4/3P4/P1P1P3/5PPP/R1BQKBNR",
        next: "rnbq1rk1/ppp2ppp/5n2/3p4/3P4/P1PBP3/5PPP/R1BQK1NR",
        caption: "couple of games ago couple of excuse me"
    },
    {
        timestamp: 157.0,
        move: "c5",
        prev: "rnbq1rk1/ppp2ppp/5n2/3p4/3P4/P1PBP3/5PPP/R1BQK1NR",
        next: "rnbq1rk1/pp3ppp/5n2/2pp4/3P4/P1PBP3/5PPP/R1BQK1NR",
        caption: ""
    },
    {
        timestamp: 157.8,
        move: "Ne2",
        prev: "rnbq1rk1/pp3ppp/5n2/2pp4/3P4/P1PBP3/5PPP/R1BQK1NR",
        next: "rnbq1rk1/pp3ppp/5n2/2pp4/3P4/P1PBP3/4NPPP/R1BQK2R",
        caption: "in yesterday's recap I don't know why I"
    },
    {
        timestamp: 162.0,
        move: "Nc6",
        prev: "rnbq1rk1/pp3ppp/5n2/2pp4/3P4/P1PBP3/4NPPP/R1BQK2R",
        next: "r1bq1rk1/pp3ppp/2n2n2/2pp4/3P4/P1PBP3/4NPPP/R1BQK2R",
        caption: "said a couple of games ago a couple of rounds ago GES played uh castles and"
    },
    {
        timestamp: 175.4,
        move: "f3",
        prev: "r1bq1rk1/pp3ppp/2n2n2/2pp4/3P4/P1PBP3/4NPPP/R1BQK2R",
        next: "r1bq1rk1/pp3ppp/2n2n2/2pp4/3P4/P1PBPP2/4N1PP/R1BQK2R",
        caption: "Bishop D2 so that if the Knight gets taken you take with the bishop you don't damage your pawns why would you Force black into playing this well you kind of forc them into doing something now the reason that this is any good at all right is because there is one line in"
    },
    {
        timestamp: 185.4,
        move: "c5",
        prev: "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR",
        next: "rnbq1rk1/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR",
        caption: "particular that goes like this D5 take take take Bishop to D3 black plays C5 you play Knight E2 Knight C6 and then"
    },
    {
        timestamp: 190.8,
        move: "Bd3",
        prev: "rnbq1rk1/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR",
        next: "rnbq1rk1/pp1p1ppp/4pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        caption: "what you do in this position very strange move you play F3 this was played in the world"
    },
    {
        timestamp: 209.0,
        move: "Nc6",
        prev: "rnbq1rk1/pp1p1ppp/4pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        caption: "championship match between a guy named Magnus Carlson and vvan Anand and why just gets very nice attacking ideas going over here now nobody plays like this because it's bad what they do now is they play C5 and I actually had this played against me in a classical game"
    },
    {
        timestamp: 238.4,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "and I remember just sitting at the board going this really sucks like this opening has one major idea and it's to create a kingside attack and if you literally don't get that your position is very miserable black can very easily lock the position up and let's you know you can play knight2 and okay I mean you can play D6 or something like that so you you still have some attacking chances but if black like doesn't Rush black just plays like D6 H6 A6 just waights you don't get much now I was"
    },
    {
        timestamp: 240.4,
        move: "Ra1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        caption: "very curious how fabbi would handle this"
    },
    {
        timestamp: 245.2,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "position and he played rugby"
    },
    {
        timestamp: 246.6,
        move: "d6",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "one now longtime subscribers of this"
    },
    {
        timestamp: 256.4,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "channel are familiar with the song rugby one there's a song written by uh I think it was Olivia Rodrigo and the song goes"
    },
    {
        timestamp: 258.2,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: ""
    },
    {
        timestamp: 261.2,
        move: "Na5",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp1p1ppp/4pn2/n1p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "Rook B1 Rook B1 make a move that makes"
    },
    {
        timestamp: 267.6,
        move: "Nc6",
        prev: "r1bq1rk1/pp1p1ppp/4pn2/n1p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "no sense and yeah I don't understand for the"
    },
    {
        timestamp: 268.6,
        move: "d6",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: ""
    },
    {
        timestamp: 274.2,
        move: "Ne2",
        prev: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/4NPPP/1RBQK2R",
        caption: "first time time in the history of this channel I may actually sing that song a second time"
    },
    {
        timestamp: 275.8,
        move: "e5",
        prev: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/4NPPP/1RBQK2R",
        next: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQK2R",
        caption: ""
    },
    {
        timestamp: 279.6,
        move: "O-O",
        prev: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQK2R",
        next: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        caption: "because what I mean of course I get it all right I get it you're blocked by the"
    },
    {
        timestamp: 282.4,
        move: "b6",
        prev: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        next: "r1bq1rk1/p4ppp/1pnp1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        caption: "pawn here you're not but what about the"
    },
    {
        timestamp: 286.4,
        move: "Na5",
        prev: "r1bq1rk1/p4ppp/1pnp1n2/2pPp3/2P5/P1PBP3/4NPPP/1RBQ1RK1",
        next: "r1bq1rk1/p4ppp/1p1p1n2/n1pPp3/2P5/P1PBP3/4NPPP/1RBQ1RK1",
        caption: "rest of the like you still haven't solved the problem of the opening now bogdon plays D6 okay bogdon spent 17"
    },
    {
        timestamp: 291.2,
        move: "Ba6",
        prev: "r1bq1rk1/p4ppp/1p1p1n2/n1pPp3/2P1P3/P1PB4/4NPPP/1RBQ1RK1",
        next: "r2q1rk1/p4ppp/bp1p1n2/n1pPp3/2P1P3/P1PB4/4NPPP/1RBQ1RK1",
        caption: "minutes playing this move which is why"
    },
    {
        timestamp: 292.2,
        move: "Ng3",
        prev: "r2q1rk1/p4ppp/bp1p1n2/n1pPp3/2P1P3/P1PB4/4NPPP/1RBQ1RK1",
        next: "r2q1rk1/p4ppp/bp1p1n2/n1pPp3/2P1P3/P1PB2N1/5PPP/1RBQ1RK1",
        caption: "we're never getting chess on TV but you"
    },
    {
        timestamp: 293.6,
        move: "Bxc4",
        prev: "r2q1rk1/p4ppp/bp1p1n2/n1pPp3/2P1P3/P1PB2N1/5PPP/1RBQ1RK1",
        next: "r2q1rk1/p4ppp/1p1p1n2/n1pPp3/2b1P3/P1PB2N1/5PPP/1RBQ1RK1",
        caption: "know again uh I he could have played B6"
    },
    {
        timestamp: 299.4,
        move: "Re8",
        prev: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        next: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        caption: "he could have played D6 he could have played H6 he could have played Knight A5"
    },
    {
        timestamp: 300.2,
        move: "f3",
        prev: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        next: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBPP2/4N1PP/1RBQ1RK1",
        caption: ""
    },
    {
        timestamp: 301.4,
        move: "b6",
        prev: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBPP2/4N1PP/1RBQ1RK1",
        next: "r1bqr1k1/p4ppp/1pnp1n2/2p1p3/2PP4/P1PBPP2/4N1PP/1RBQ1RK1",
        caption: "which is a common idea in the NSO to"
    },
    {
        timestamp: 315.0,
        move: "e5",
        prev: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/4NPPP/1RBQK2R",
        next: "r1bq1rk1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQK2R",
        caption: "then you know Target The Pawn on C4 the reason he spent a bunch of time is he was trying to understand why would Fabiano Carana the second ranked player in the world play Rook B1 in this position so he played D6 right and Fabby played Knight E2 which was always the"
    },
    {
        timestamp: 318.0,
        move: "f3",
        prev: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBP3/4NPPP/1RBQ1RK1",
        next: "r1bqr1k1/pp3ppp/2np1n2/2p1p3/2PP4/P1PBPP2/4N1PP/1RBQ1RK1",
        caption: "idea now again I told you I've seen this"
    },
    {
        timestamp: 327.6,
        move: "h6",
        prev: "r1bqr1k1/p4ppp/1pnp1n2/2p1p3/2PPP3/P1PB1P2/4N1PP/1RBQ1RK1",
        next: "r1bqr1k1/p4pp1/1pnp1n1p/2p1p3/2PPP3/P1PB1P2/4N1PP/1RBQ1RK1",
        caption: "position a lot right E5 is very normal White Castles and then black can either shove the bishop in here or just kind of like hang out just kind of not do"
    },
    {
        timestamp: 337.4,
        move: "h6",
        prev: "r1bqr1k1/p4ppp/1pnp1n2/2p1p3/2PPP3/P1PB1P2/4N1PP/1RBQ1RK1",
        next: "r1bqr1k1/p4pp1/1pnp1n1p/2p1p3/2PPP3/P1PB1P2/4N1PP/1RBQ1RK1",
        caption: "anything and then if you play D5 with white you have Knight A5 Bishop C4 and I'm targeting this weak Pawn on C4 now there are lines where white actually"
    },
    {
        timestamp: 343.0,
        move: "Ne7",
        prev: "r1bqr1k1/p4pp1/1pnp1n1p/2pPp3/2P1P3/P1PB1P2/4N1PP/1RBQ1RK1",
        next: "r1bqr1k1/p3npp1/1p1p1n1p/2pPp3/2P1P3/P1PB1P2/4N1PP/1RBQ1RK1",
        caption: "just straight up gives the pawn up like white plays Knight G3 and if black goes here you can take and you can start an"
    },
    {
        timestamp: 345.2,
        move: "cxd4",
        prev: "r1bqr1k1/p4ppp/1pnp1n2/2p1p3/2PPP3/P1PB1P2/4N1PP/1RBQ1RK1",
        next: "r1bqr1k1/p4ppp/1pnp1n2/4p3/2PpP3/P1PB1P2/4N1PP/1RBQ1RK1",
        caption: "attack you basically don't care about"
    },
    {
        timestamp: 361.8,
        move: "Bg5",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/8/2PpP3/P2B1P2/6PP/1RBQ1RK1",
        next: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: "the pawn at all um Rook E8 is the move played by bdan we have F3 we have B6 and now fa plays this move E4 and fabbi kind of you know fabbi is really peing my curiosity in the line because several years ago I stopped"
    },
    {
        timestamp: 368.0,
        move: "a6",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bqr1k1/5ppp/pp1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: "playing this cuz I was like if black doesn't do anything dumb I have a really miserable Pawn structure and to see Fabi"
    },
    {
        timestamp: 374.0,
        move: "Bg5",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/8/2PpP3/P2B1P2/6PP/1RBQ1RK1",
        next: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: "just kind of play the ideas of this and kind of make it look easy uh kind of inspired me now the"
    },
    {
        timestamp: 375.2,
        move: "h6",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bqr1k1/p4pp1/1p1p1n1p/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: ""
    },
    {
        timestamp: 378.4,
        move: "Bf2",
        prev: "r1bqr1k1/p4p2/1p1p1n1p/6p1/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bqr1k1/p4p2/1p1p1n1p/6p1/2PpP3/P2B1P2/5BPP/1R1Q1RK1",
        caption: "point of E4 is D4 is now hanging so if black doesn't take the pawn like let's"
    },
    {
        timestamp: 384.2,
        move: "Bf2",
        prev: "r1bqr1k1/p4p2/1p1p1n1p/6p1/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bqr1k1/p4p2/1p1p1n1p/6p1/2PpP3/P2B1P2/5BPP/1R1Q1RK1",
        caption: "say H6 first of all you can go here so now after take take take take take you"
    },
    {
        timestamp: 385.0,
        move: "Bg5",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/8/2PpP3/P2B1P2/6PP/1RBQ1RK1",
        next: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: ""
    },
    {
        timestamp: 397.8,
        move: "Re5",
        prev: "r1bqr1k1/p4ppp/1p1p1n2/6B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: "just have a very powerful two Bishop position um so the other thing is you can also play D5 right so you could play this and then you could start an attack I told"
    },
    {
        timestamp: 398.6,
        move: "Bh4",
        prev: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bq2k1/p4ppp/1p1p1n2/4r3/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        caption: "you this was kind of another part of the"
    },
    {
        timestamp: 401.6,
        move: "Qd2",
        prev: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        next: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/3Q2PP/1R3RK1",
        caption: "idea which is why here Budan plays takes"
    },
    {
        timestamp: 402.8,
        move: "h6",
        prev: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/3Q2PP/1R3RK1",
        next: "r1bq2k1/p4pp1/1p1p1n1p/4r1B1/2PpP3/P2B1P2/3Q2PP/1R3RK1",
        caption: "on D4 takes with the Knight and takes"
    },
    {
        timestamp: 406.2,
        move: "Bf4",
        prev: "r1bq2k1/p4pp1/1p1p1n1p/4r1B1/2PpP3/P2B1P2/3Q2PP/1R3RK1",
        next: "r1bq2k1/p4pp1/1p1p1n1p/4r3/2PpPB2/P2B1P2/3Q2PP/1R3RK1",
        caption: "like this and I told you if the bishop"
    },
    {
        timestamp: 408.4,
        move: "Be6",
        prev: "r1bq2k1/p4pp1/1p1p1n1p/4r3/2PpPB2/P2B1P2/3Q2PP/1R3RK1",
        next: "r2q2k1/p4pp1/1p1pbn1p/4r3/2PpPB2/P2B1P2/3Q2PP/1R3RK1",
        caption: "is there already then you're going to take but The Bishop's not"
    },
    {
        timestamp: 426.8,
        move: "Qd1",
        prev: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/3Q2PP/1R3RK1",
        next: "r1bq2k1/p4ppp/1p1p1n2/4r1B1/2PpP3/P2B1P2/6PP/1R1Q1RK1",
        caption: "there so you would think Fabby plays Bishop B2 no he plays Bishop G5 Bishop G5 is the ultimate provocation so Fabiano kind of gets exactly what he wants from the opening and the point of Bishop G5 is like let's say black does nothing although that's quite a weakening move um white can actually already begin creating some"
    },
    {
        timestamp: 438.6,
        move: "Be6",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r5k1/p3qppp/1p1pbn2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: "sort of attack first of all white can win the pawn back with the queen first of all then white can pressure this and this and this so black really has to do something Fabby probably anticipated H6 but you can't really chase out the"
    },
    {
        timestamp: 439.4,
        move: "Qxd4",
        prev: "r5k1/p3qppp/1p1pbn2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r5k1/p3qppp/1p1pbn2/4r3/2PQP2B/P4P2/4B1PP/1R3RK1",
        caption: ""
    },
    {
        timestamp: 446.2,
        move: "Bc8",
        prev: "r5k1/p3qppp/1p1pbn2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: "bishop because now you've weakened your king and I'm going to take on D4 so so I got you to make two moves that you can't take back right so Bishop G5 now rookie"
    },
    {
        timestamp: 450.8,
        move: "Ra5",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: "E5 you would think a move like this"
    },
    {
        timestamp: 452.6,
        move: "Rb3",
        prev: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/PR3P2/4B1PP/3Q1RK1",
        caption: ""
    },
    {
        timestamp: 461.2,
        move: "Bd3",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        caption: "something inside of you just screams like that looks wrong uh Rook should not be this"
    },
    {
        timestamp: 462.2,
        move: "Be2",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: "congested right Fabby brings the bishop"
    },
    {
        timestamp: 464.2,
        move: "Be2",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P2B1P2/6PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: ""
    },
    {
        timestamp: 466.4,
        move: "Ra5",
        prev: "r1b3k1/p3qppp/1p1p1n2/4r3/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        caption: "to H4 now Ban's idea was probably to"
    },
    {
        timestamp: 467.2,
        move: "Rb3",
        prev: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/P4P2/4B1PP/1R1Q1RK1",
        next: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/PR3P2/4B1PP/3Q1RK1",
        caption: ""
    },
    {
        timestamp: 468.8,
        move: "Ba6",
        prev: "r1b3k1/p3qppp/1p1p1n2/r7/2PpP2B/PR3P2/4B1PP/3Q1RK1",
        next: "r5k1/p3qppp/bp1p1n2/r7/2PpP2B/PR3P2/4B1PP/3Q1RK1",
        caption: ""
    },
    {
        timestamp: 469.6,
        move: "Qxd4",
        prev: "r5k1/p3qppp/bp1p1n2/r7/2PpP2B/PR3P2/4B1PP/3Q1RK1",
        next: "r5k1/p3qppp/bp1p1n2/r7/2PQP2B/PR3P2/4B1PP/5RK1",
        caption: "play H6 and then if Bishop"
    },
    {
        timestamp: 470.6,
        move: "Qe5",
        prev: "r5k1/p3qppp/bp1p1n2/r7/2PQP2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/5RK1",
        caption: ""
    },
    {
        timestamp: 477.6,
        move: "Rd1",
        prev: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/3R2K1",
        caption: "F4 honestly I have a feeling he wanted to sack his Rook I think he wanted to create this"
    },
    {
        timestamp: 480.2,
        move: "Qxe5",
        prev: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp1p1n2/r3Q3/2P1P2B/PR3P2/4B1PP/5RK1",
        caption: "barrier in the center where now Fabby"
    },
    {
        timestamp: 482.2,
        move: "dxe5",
        prev: "r5k1/p4ppp/bp1p1n2/r3Q3/2P1P2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp3n2/r3p3/2P1P2B/PR3P2/4B1PP/5RK1",
        caption: "has no Advantage black has UND doubled"
    },
    {
        timestamp: 484.0,
        move: "dxe5",
        prev: "r5k1/p4ppp/bp1p1n2/r3Q3/2P1P2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp3n2/r3p3/2P1P2B/PR3P2/4B1PP/5RK1",
        caption: "his pawns his Knight is going to quickly"
    },
    {
        timestamp: 485.4,
        move: "Rd1",
        prev: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/3R2K1",
        caption: "go to C5 or maybe to E3 in the future or"
    },
    {
        timestamp: 487.6,
        move: "Rd1",
        prev: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/5RK1",
        next: "r5k1/p4ppp/bp1p1n2/r3q3/2PQP2B/PR3P2/4B1PP/3R2K1",
        caption: ""
    },
    {
        timestamp: 496.2,
        move: "Ne8",
        prev: "r5k1/p4ppp/bp1p1n2/r7/2PRP2B/PR3P2/4B1PP/6K1",
        next: "r3n1k1/p4ppp/bp1p4/r7/2PRP2B/PR3P2/4B1PP/6K1",
        caption: "F4 and black is doing very well so I think that was the idea I think actually Bogdan brought his Rook to E5 kissed it goodbye and said you're going to perish for the you know the benefit of society"
    },
    {
        timestamp: 500.4,
        move: "Be1",
        prev: "r3n1k1/p4ppp/bp1p4/r7/2PRP2B/PR3P2/4B1PP/6K1",
        next: "r3n1k1/p4ppp/bp1p4/r7/2PRP3/PR3P2/4B1PP/4B1K1",
        caption: "and yeah Fab's like I'm I'm not I'm not taking your Rook so now you know bdan"
    },
    {
        timestamp: 501.6,
        move: "Rc5",
        prev: "r3n1k1/p4ppp/bp1p4/r7/2PRP3/PR3P2/4B1PP/4B1K1",
        next: "r3n1k1/p4ppp/bp1p4/2r5/2PRP3/PR3P2/4B1PP/4B1K1",
        caption: ""
    },
    {
        timestamp: 502.6,
        move: "Bb4",
        prev: "r3n1k1/p4ppp/bp1p4/2r5/2PRP3/PR3P2/4B1PP/4B1K1",
        next: "r3n1k1/p4ppp/bp1p4/2r5/1BPRP3/PR3P2/4B1PP/6K1",
        caption: ""
    },
    {
        timestamp: 512.4,
        move: "Rc6",
        prev: "r3n1k1/p4ppp/bp1p4/2r5/1BPRP3/PR3P2/4B1PP/6K1",
        next: "r3n1k1/p4ppp/bprp4/8/1BPRP3/PR3P2/4B1PP/6K1",
        caption: "kind of went all in on the sacrifice of The Rook to UND double his pawns and suddenly he's like wait a minute it if I just don't do anything like if I you"
    },
    {
        timestamp: 518.2,
        move: "f4",
        prev: "r3n1k1/p4ppp/bprp4/8/1BPRP3/PR3P2/4B1PP/6K1",
        next: "r3n1k1/p4ppp/bprp4/8/1BPRPP2/PR6/4B1PP/6K1",
        caption: "know continue to try to sacrifice my Rook at a certain point it will be one and it's going to be really bad for me"
    },
    {
        timestamp: 520.8,
        move: "R8c7",
        prev: "2r1n1k1/p4ppp/bprp4/8/1BPRPP2/P1R5/4B1PP/6K1",
        next: "4n1k1/p1r2ppp/bprp4/8/1BPRPP2/P1R5/4B1PP/6K1",
        caption: "so suddenly The Rook needs to go to plan"
    },
    {
        timestamp: 522.2,
        move: "Kf2",
        prev: "4n1k1/p1r2ppp/bprp4/8/1BPRPP2/P1R5/4B1PP/6K1",
        next: "4n1k1/p1r2ppp/bprp4/8/1BPRPP2/P1R5/4BKPP/8",
        caption: "B it it it travels to the other side of"
    },
    {
        timestamp: 525.4,
        move: "h5",
        prev: "4n1k1/p1r2ppp/bprp4/8/1BPRPP2/P1R5/4BKPP/8",
        next: "4n1k1/p1r2pp1/bprp4/7p/1BPRPP2/P1R5/4BKPP/8",
        caption: "the board to attack Fabiano's a pawn"
    },
    {
        timestamp: 526.8,
        move: "h3",
        prev: "4n1k1/p1r2pp1/bprp4/7p/1BPRPP2/P1R5/4BKPP/8",
        next: "4n1k1/p1r2pp1/bprp4/7p/1BPRPP2/P1R4P/4BKP1/8",
        caption: "which he defends because it's worth"
    },
    {
        timestamp: 532.4,
        move: "Rc8",
        prev: "4n1k1/p1r2p2/bprp2p1/7p/PBPRPP2/2R4P/4BKP1/8",
        next: "2r1n1k1/p4p2/bprp2p1/7p/PBPRPP2/2R4P/4BKP1/8",
        caption: "defending and then he takes on D4 and then we have a queen trade now"
    },
    {
        timestamp: 533.6,
        move: "Ke3",
        prev: "2r1n1k1/p4p2/bprp2p1/7p/PBPRPP2/2R4P/4BKP1/8",
        next: "2r1n1k1/p4p2/bprp2p1/7p/PBPRPP2/2R1K2P/4B1P1/8",
        caption: "bdon here makes a series of unfortunate"
    },
    {
        timestamp: 535.0,
        move: "Bb7",
        prev: "2r1n1k1/p4p2/bprp2p1/7p/PBPRPP2/2R1K2P/4B1P1/8",
        next: "2r1n1k1/pb3p2/1prp2p1/7p/PBPRPP2/2R1K2P/4B1P1/8",
        caption: ""
    },
    {
        timestamp: 554.0,
        move: "Nf6",
        prev: "2r1n1k1/pb3p2/1prp4/5P1p/PBPR4/2R1K2P/4B1P1/8",
        next: "2r3k1/pb3p2/1prp1n2/5P1p/PBPR4/2R1K2P/4B1P1/8",
        caption: "decisions number one uh Rook to A5 is a major commitment of The Rook it is very very very committal um Bishop A6 is a move that makes sense but the followup and trying to trade Queens you got to do it very gently very very uh delicately I"
    },
    {
        timestamp: 561.6,
        move: "Kf4",
        prev: "2r3k1/pb3p2/1prp1n2/5P1p/PBPR4/2R1K2P/4B1P1/8",
        next: "2r3k1/pb3p2/1prp1n2/5P1p/PBPR1K2/2R4P/4B1P1/8",
        caption: "should say and obviously you know white is not trying to help black improve their structure remove the weakness to a very powerful spot now actually very"
    },
    {
        timestamp: 564.4,
        move: "d5",
        prev: "2r3k1/pb3p2/1prp1n2/5P1p/PBPR1K2/2R4P/4B1P1/8",
        next: "2r3k1/pb3p2/1pr2n2/3p1P1p/PBPR1K2/2R4P/4B1P1/8",
        caption: "well protected so bdan should probably"
    },
    {
        timestamp: 566.2,
        move: "Be7",
        prev: "2r3k1/pb3p2/1pr2n2/3p1P1p/PBPR1K2/2R4P/4B1P1/8",
        next: "2r3k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        caption: ""
    },
    {
        timestamp: 567.4,
        move: "Re8",
        prev: "2r3k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        caption: "not have moved his Rook there and he"
    },
    {
        timestamp: 575.2,
        move: "Re3",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: "probably should not do this because now he's playing very passive defense and essentially it's just a matter of time"
    },
    {
        timestamp: 577.0,
        move: "Re3",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: "until his 2805 rated opponent finds a"
    },
    {
        timestamp: 578.2,
        move: "a6",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        next: "4r1k1/1b2Bp2/ppr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: ""
    },
    {
        timestamp: 579.8,
        move: "cxd5",
        prev: "4r1k1/1b2Bp2/ppr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        next: "4r1k1/1b2Bp2/ppr2n2/3P1P1p/P2R1K2/4R2P/4B1P1/8",
        caption: "way through so first what we're going to"
    },
    {
        timestamp: 580.8,
        move: "Re3",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: "do is use the Rook that was put there as"
    },
    {
        timestamp: 582.6,
        move: "dxc4",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/5P1p/P1pR1K2/4R2P/4B1P1/8",
        caption: "a Target as a Target Rook C5 look at"
    },
    {
        timestamp: 585.2,
        move: "Bxf6",
        prev: "4r1k1/pb2Bp2/1pr2n2/5P1p/P1pR1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb3p2/1pr2B2/5P1p/P1pR1K2/4R2P/4B1P1/8",
        caption: ""
    },
    {
        timestamp: 594.4,
        move: "Re3",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/2R4P/4B1P1/8",
        next: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: "this and now you can kind of see like the The Rook was put there to be sacrificed it was brought there to attack now it's being escorted out in"
    },
    {
        timestamp: 595.4,
        move: "Nd7",
        prev: "4r1k1/pb2Bp2/1pr2n2/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb1nBp2/1pr5/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        caption: "handcuffs like now it's like yo get get"
    },
    {
        timestamp: 596.6,
        move: "cxd5",
        prev: "4r1k1/pb1nBp2/1pr5/3p1P1p/P1PR1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb1nBp2/1pr5/3P1P1p/P2R1K2/4R2P/4B1P1/8",
        caption: ""
    },
    {
        timestamp: 600.2,
        move: "Rc1",
        prev: "4r1k1/pb1nBp2/1pr5/3P1P1p/P2R1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb1nBp2/1p6/3P1P1p/P2R1K2/4R2P/4B1P1/2r5",
        caption: "out of here F4 right we're trying to"
    },
    {
        timestamp: 606.6,
        move: "Rc1",
        prev: "4r1k1/pb1nBp2/1pr5/3P1P1p/P2R1K2/4R2P/4B1P1/8",
        next: "4r1k1/pb1nBp2/1p6/3P1P1p/P2R1K2/4R2P/4B1P1/2r5",
        caption: "either rotate our Rook over here maybe take space Maybe Play Bishop F3 Rook C3 just slowly patiently King to F2 now"
    },
    {
        timestamp: 611.0,
        move: "Ne2",
        prev: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp3ppp/2nppn2/2p5/2PP4/P1PBP3/4NPPP/1RBQK2R",
        caption: "budon plays H5 he's trying to make something happen he's trying to deflect"
    },
    {
        timestamp: 613.4,
        move: "Ra1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        caption: "the bishop Fab's not budging but the"
    },
    {
        timestamp: 616.2,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "question is how is Fabby actually going"
    },
    {
        timestamp: 617.6,
        move: "Ra1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        caption: "to do something he's improved his"
    },
    {
        timestamp: 622.6,
        move: "Rb1",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/1RBQK1NR",
        caption: "position to the maximum but now what king E3 Bishop B7 now we start we start"
    },
    {
        timestamp: 626.8,
        move: "Ne2",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR",
        next: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQK2R",
        caption: "attacking the Integrity of the structure"
    },
    {
        timestamp: 631.8,
        move: "b6",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQK2R",
        next: "r1bq1rk1/p2p1ppp/1pn1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQK2R",
        caption: "the more pieces we clear out in front of Black's King the weaker his King is going to be right now black has a major"
    },
    {
        timestamp: 642.8,
        move: "d4",
        prev: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
        next: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "weakness but he also has massive congestion I mean it's he needs some sort of medication takes e takes now bdan has three isolated pawns and the"
    },
    {
        timestamp: 643.8,
        move: "d5",
        prev: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "game is the game is Just moments away"
    },
    {
        timestamp: 645.4,
        move: "c4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: "from being over Knight to F6 and I mean"
    },
    {
        timestamp: 648.4,
        move: "dxc4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR",
        caption: "you talk about a gangster king walk"
    },
    {
        timestamp: 650.4,
        move: "d4",
        prev: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
        next: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "King's like everybody's good I'm"
    },
    {
        timestamp: 652.6,
        move: "b6",
        prev: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQK2R",
        next: "r1bq1rk1/p2p1ppp/1pn1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQK2R",
        caption: "checking in on everybody but I'm going to"
    },
    {
        timestamp: 661.0,
        move: "Nb1",
        prev: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: "G5 and and I'm going to win the game and now budun tries to create counterplay but that opens up the bishop Rook E8 and"
    },
    {
        timestamp: 661.6,
        move: "d4",
        prev: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
        next: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: ""
    },
    {
        timestamp: 663.4,
        move: "d5",
        prev: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "Rook"
    },
    {
        timestamp: 665.8,
        move: "e6",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: "E3 and he just straight up resigned now you may be wondering why did he resign"
    },
    {
        timestamp: 666.6,
        move: "Nc3",
        prev: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR",
        caption: ""
    },
    {
        timestamp: 671.2,
        move: "Bb4",
        prev: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR",
        next: "rnbqk1nr/ppp2ppp/4p3/3p4/1bPP4/2N5/PP2PPPP/R1BQKBNR",
        caption: "like what what's happening well D5 is falling like number one right we're going to we're going to get this Pawn in"
    },
    {
        timestamp: 696.2,
        move: "d5",
        prev: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        caption: "a moment but black does nothing right you're going to get cd5 so if black plays this move I take the Knight now if you take I take but if you take this I actually just mate you so there are multiple threats so the threat is to take the Knight and it's also to take the pawn right the best thing that black can maybe do is move the Knight then you're going to take Rook will move like C1"
    },
    {
        timestamp: 697.4,
        move: "c4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        caption: ""
    },
    {
        timestamp: 698.4,
        move: "dxc4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR",
        caption: "you're going to play F6 you're going to"
    },
    {
        timestamp: 701.8,
        move: "dxc4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR",
        caption: "play D6 you're going to play Bishop B5 you're probably going to walk your king"
    },
    {
        timestamp: 711.4,
        move: "e4",
        prev: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR",
        caption: "to H6 like just just to you know for Bad Manners this was a beautiful game from Fabiano and he clearly understood the position and the and the opening better"
    },
    {
        timestamp: 712.4,
        move: "dxc4",
        prev: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        next: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR",
        caption: "than deok and honestly I am going to"
    },
    {
        timestamp: 716.6,
        move: "e3",
        prev: "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R",
        next: "rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R",
        caption: "now create an opening file taking a look"
    },
    {
        timestamp: 727.8,
        move: "Re1",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQR1K1",
        caption: "at at all this cuz clearly there's some sort of idea here there's something that you try to wait for I mean the mainline historically has just been to play"
    },
    {
        timestamp: 728.4,
        move: "Rf1",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQR1K1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 730.4,
        move: "b3",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/1P2PN2/P4PPP/RNBQ1RK1",
        caption: "92 but then there's lines where I don't"
    },
    {
        timestamp: 731.2,
        move: "a3",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/P3PN2/1P3PPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 745.2,
        move: "Rf1",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQR1K1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        caption: "know black can very quickly generate counterplay on this Pawn but yeah I don't know maybe maybe bug on misplayed it now another person who today played a very deep opening idea which I will go explore this is the fun thing about covering top level chess is uh was prg"
    },
    {
        timestamp: 749.4,
        move: "Be2",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: "Nanda who just played in the candidates versus Anish giri who has not recent played in the candidates D4 D5 C4 and"
    },
    {
        timestamp: 752.4,
        move: "Bc4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        caption: "Anish plays the queen Gambit accepted"
    },
    {
        timestamp: 755.2,
        move: "b5",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/1P2PN2/P4PPP/RNBQ1RK1",
        next: "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/1P2PN2/P4PPP/RNBQ1RK1",
        caption: "very forcing so in general"
    },
    {
        timestamp: 756.4,
        move: "Be2",
        prev: "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/1P2PN2/P4PPP/RNBQ1RK1",
        next: "rnbqkb1r/5ppp/p3pn2/1pp5/3P4/1P2PN2/P3BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 759.0,
        move: "Bb7",
        prev: "rnbqkb1r/5ppp/p3pn2/1pp5/3P4/1P2PN2/P3BPPP/RNBQ1RK1",
        next: "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1P2PN2/P3BPPP/RNBQ1RK1",
        caption: "nowadays people who want to play this"
    },
    {
        timestamp: 759.6,
        move: "a4",
        prev: "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1P2PN2/P3BPPP/RNBQ1RK1",
        next: "rn1qkb1r/1b3ppp/p3pn2/1pp5/P2P4/1P2PN2/4BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 760.4,
        move: "b4",
        prev: "rn1qkb1r/1b3ppp/p3pn2/1pp5/P2P4/1P2PN2/4BPPP/RNBQ1RK1",
        next: "rn1qkb1r/1b3ppp/p3pn2/2p5/Pp1P4/1P2PN2/4BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 767.8,
        move: "Nbd2",
        prev: "rn1qkb1r/1b3ppp/p3pn2/2p5/Pp1P4/1P2PN2/4BPPP/RNBQ1RK1",
        next: "rn1qkb1r/1b3ppp/p3pn2/2p5/Pp1P4/1P2PN2/3NBPPP/R1BQ1RK1",
        caption: "setup of D5 E6 Knight F6 they do it through the NSO move order allowing the NSO Indian although he lost I mean it's"
    },
    {
        timestamp: 774.6,
        move: "Be2",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: "still a very very good opening uh they generally do not start with D5 why because I don't have to play Knight F3 I"
    },
    {
        timestamp: 776.6,
        move: "cxd4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/8/3p4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 782.0,
        move: "exd4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/8/3p4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/8/3P4/5N2/PP2BPPP/RNBQ1RK1",
        caption: "play Knight C3 this is not a NSO Indian you already put a Pawn on D5 right so"
    },
    {
        timestamp: 784.0,
        move: "Bc4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        caption: "these are the differences and allow white to play and exchange uh Queen's"
    },
    {
        timestamp: 790.2,
        move: "Be2",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: "Gambit which is called the know which is considered a tiny tiny bit better so in general if you see a top level player"
    },
    {
        timestamp: 791.4,
        move: "cxd4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/8/3p4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 796.4,
        move: "Nd4",
        prev: "rnbqkb1r/1p3ppp/p3pn2/8/8/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/8/3N4/4P3/PP2BPPP/RNBQ1RK1",
        caption: "play D5 they're going to go here does any of what I said apply to any of you watching not at all like I literally I"
    },
    {
        timestamp: 797.4,
        move: "Nbd7",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 798.6,
        move: "Nb8",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 799.4,
        move: "Nbd7",
        prev: "rnbqkb1r/1p3ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        caption: ""
    },
    {
        timestamp: 800.8,
        move: "Nbd2",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP2BPPP/RNBQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "mean top level chess and your chest and"
    },
    {
        timestamp: 801.8,
        move: "Be7",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: ""
    },
    {
        timestamp: 813.0,
        move: "Bf8",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "even my chest like my over theboard chest at 2348 2450 whatever we're planets apart from these players I mean the meta is like absurdly different so C4 DC4 Knight F3 Knight F6 again there"
    },
    {
        timestamp: 816.4,
        move: "Bf8",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: ""
    },
    {
        timestamp: 819.2,
        move: "b5",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/3n1ppp/p3pn2/1pp5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "was another Queen's Gambit accepted game E4 is the best move at 90% of Chess"
    },
    {
        timestamp: 821.2,
        move: "a4",
        prev: "r1bqkb1r/3n1ppp/p3pn2/1pp5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/3n1ppp/p3pn2/1pp5/P2P4/4PN2/1P1NBPPP/R1BQ1RK1",
        caption: ""
    },
    {
        timestamp: 827.0,
        move: "Bf8",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "levels because you take the center and people just don't know how to handle this position I think white wins like"
    },
    {
        timestamp: 828.2,
        move: "Be7",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "60% of the time here if you check the"
    },
    {
        timestamp: 830.2,
        move: "e4",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2p5/3PP3/5N2/PP1NBPPP/R1BQ1RK1",
        caption: "online databases but at the high level"
    },
    {
        timestamp: 836.6,
        move: "dxc5",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2P5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "people know what they're doing so they play Knight F3 Knight F6 and E3 they temporarily block their Bishop they just want to win their Pawn back E6 and this"
    },
    {
        timestamp: 839.4,
        move: "Bxc5",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2P5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1n1ppp/p3pn2/2b5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "is the massive tabia of this line white"
    },
    {
        timestamp: 841.2,
        move: "Bf8",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: ""
    },
    {
        timestamp: 843.6,
        move: "Be7",
        prev: "r1bqkb1r/1p1n1ppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "at now has no less than 10 options okay"
    },
    {
        timestamp: 844.2,
        move: "dxc5",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2p5/3P4/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1nbppp/p3pn2/2P5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: ""
    },
    {
        timestamp: 854.0,
        move: "Bxc5",
        prev: "r1bqk2r/1p1nbppp/p3pn2/2P5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1n1ppp/p3pn2/2b5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        caption: "white can play Knight C3 white can play Knight D2 white can play Rook E1 white can play dc5 okay white can play B3 white can play A3 white can play A4"
    },
    {
        timestamp: 863.6,
        move: "Qc2",
        prev: "r1bqk2r/1p1n1ppp/p3pn2/2b5/8/4PN2/PP1NBPPP/R1BQ1RK1",
        next: "r1bqk2r/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1B2RK1",
        caption: "white can play Bishop D3 Bishop B3 Bishop E2 Queen E2 I think I covered everything there might be more I think I covered everything though"
    },
    {
        timestamp: 864.6,
        move: "O-O",
        prev: "r1bqk2r/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1B2RK1",
        next: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1B2RK1",
        caption: "um you know you can basically make any"
    },
    {
        timestamp: 882.6,
        move: "Rd1",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1B2RK1",
        next: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "move well one of the moves that I didn't cover was the one proc plays which is Bishop E2 now this move just looks beyond stupid like why did you do that I mean obviously black wanted to play B5 but the thing about black playing B5 is he can't rush he can't rush with this move why because it's a Target and now I"
    },
    {
        timestamp: 887.4,
        move: "Rd1",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1B2RK1",
        next: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "just get to play A4 and now I'm just going to start asking you you know now your Pawn is to go here now I put my"
    },
    {
        timestamp: 888.8,
        move: "Qe7",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "knight on C4 you gave me something you"
    },
    {
        timestamp: 893.8,
        move: "Qd8",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "gave me information it's kind of like poker except all the pieces are there"
    },
    {
        timestamp: 902.4,
        move: "Be7",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1bq1rk1/1p1nbppp/p3pn2/8/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "right nothing's hidden so Bishop E2 right away is like but B5 never even happened so why did why did you do this because now for example now for example let's"
    },
    {
        timestamp: 904.4,
        move: "Qe7",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: "say black"
    },
    {
        timestamp: 905.8,
        move: "b3",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/1P2PN2/P1QNBPPP/R1BR2K1",
        caption: "takes if you go"
    },
    {
        timestamp: 906.8,
        move: "Qe7",
        prev: "r1bq1rk1/1p1n1ppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        caption: ""
    },
    {
        timestamp: 910.0,
        move: "Nb3",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/1N2PN2/PPQ1BPPP/R1BR2K1",
        caption: "here you have a position where most"
    },
    {
        timestamp: 918.6,
        move: "Bb6",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/1N2PN2/PPQ1BPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/pb2pn2/8/8/1N2PN2/PPQ1BPPP/R1BR2K1",
        caption: "people the bishop is on C4 so let's say you know we we we had a game like Knight C3 take take Bishop B7 rookie like you see the difference so when you go to E2"
    },
    {
        timestamp: 921.0,
        move: "Bd2",
        prev: "r1b2rk1/1p1nqppp/pb2pn2/8/8/1N2PN2/PPQ1BPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/pb2pn2/8/8/1N2PN2/PPQBBPPP/R2R2K1",
        caption: "with the bishop black can actually take"
    },
    {
        timestamp: 922.0,
        move: "Nc5",
        prev: "r1b2rk1/1p1nqppp/pb2pn2/8/8/1N2PN2/PPQBBPPP/R2R2K1",
        next: "r1b2rk1/1p2qppp/pb2pn2/2n5/8/1N2PN2/PPQBBPPP/R2R2K1",
        caption: ""
    },
    {
        timestamp: 923.0,
        move: "Bb4",
        prev: "r1b2rk1/1p2qppp/pb2pn2/2n5/8/1N2PN2/PPQBBPPP/R2R2K1",
        next: "r1b2rk1/1p2qppp/pb2pn2/2n5/1B6/1N2PN2/PPQ1BPPP/R2R2K1",
        caption: ""
    },
    {
        timestamp: 924.2,
        move: "Ncd7",
        prev: "r1b2rk1/1p2qppp/pb2pn2/2n5/8/1N2PN2/PPQBBPPP/R2R2K1",
        next: "r1b2rk1/1p1nqppp/pb2pn2/8/8/1N2PN2/PPQBBPPP/R2R2K1",
        caption: "and now taking like this doesn't make"
    },
    {
        timestamp: 934.0,
        move: "b3",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/4PN2/PPQNBPPP/R1BR2K1",
        next: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/1P2PN2/P1QNBPPP/R1BR2K1",
        caption: "sense you probably have to take on D4 and okay you play right game game goes on now Anish plays Knight bd7 he's clearly not scared Knight bd2 now Bishop"
    },
    {
        timestamp: 935.0,
        move: "b6",
        prev: "r1b2rk1/1p1nqppp/p3pn2/2b5/8/1P2PN2/P1QNBPPP/R1BR2K1",
        next: "r1b2rk1/3nqppp/pp2pn2/2b5/8/1P2PN2/P1QNBPPP/R1BR2K1",
        caption: ""
    },
    {
        timestamp: 946.6,
        move: "Rb8",
        prev: "r1b2rk1/3nqppp/pp2p3/2b5/4Q3/1P2PN2/P3BPPP/R1BR2K1",
        next: "1rb2rk1/3nqppp/pp2p3/2b5/4Q3/1P2PN2/P3BPPP/R1BR2K1",
        caption: "B7 so 5 minutes spent Anish here is trying to work out why did proc go Bishop E2 and Knight D2 I mean these are cramped moves now obviously there there is some sort of idea right the idea is"
    },
    {
        timestamp: 948.8,
        move: "Bb2",
        prev: "1rb2rk1/3nqppp/pp2p3/2b5/4Q3/1P2PN2/P3BPPP/R1BR2K1",
        next: "1rb2rk1/3nqppp/pp2p3/2b5/4Q3/1P2PN2/PB2BPPP/R2R2K1",
        caption: "we're getting out of known Theory we're keeping the tension in the center and"
    },
    {
        timestamp: 954.0,
        move: "Bb7",
        prev: "1rb2rk1/3nqppp/pp2p3/2b5/4Q3/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqppp/pp2p3/2b5/4Q3/1P2PN2/PB2BPPP/R2R2K1",
        caption: "then we're going to we're going to wait and see how our opponent develops again B5 is a pretty inaccurate move it's an"
    },
    {
        timestamp: 959.8,
        move: "Qf4",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/4Q3/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "inaccurate move CU you get to play A4 and you can even play E4 now like"
    },
    {
        timestamp: 962.8,
        move: "h6",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqpp1/pp2p2p/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "white can even go for E4 E5 so white is maybe even trying to change the plan a"
    },
    {
        timestamp: 966.6,
        move: "h6",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqpp1/pp2p2p/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "bit right so Bishop B7 now E4 here"
    },
    {
        timestamp: 967.8,
        move: "Qf4",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/4Q3/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "doesn't work uh it doesn't work because"
    },
    {
        timestamp: 970.4,
        move: "Rbd8",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "you don't there's no weaknesses in the"
    },
    {
        timestamp: 972.2,
        move: "Rac1",
        prev: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/2RR2K1",
        caption: "black position so"
    },
    {
        timestamp: 974.4,
        move: "Nf6",
        prev: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/2RR2K1",
        next: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P2PN2/PB2BPPP/2RR2K1",
        caption: "dc5 is what he plays now Bishop C5 now"
    },
    {
        timestamp: 980.6,
        move: "Bd3",
        prev: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P2PN2/PB2BPPP/2RR2K1",
        next: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        caption: "you will notice Anish moved his Bishop two times"
    },
    {
        timestamp: 982.4,
        move: "a5",
        prev: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "3r1rk1/1b2qppp/1p2pn2/p1b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 984.0,
        move: "Ng5",
        prev: "3r1rk1/1b2qppp/1p2pn2/p1b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "3r1rk1/1b2qppp/1p2pn2/p1b3N1/5Q2/1P1BP3/PB3PPP/2RR2K1",
        caption: "Bishop B7 dc5 Bishop C5 that is a loss"
    },
    {
        timestamp: 985.2,
        move: "h6",
        prev: "3r1rk1/1b2qppp/1p2pn2/p1b3N1/5Q2/1P1BP3/PB3PPP/2RR2K1",
        next: "3r1rk1/1b2qpp1/1p2pn1p/p1b3N1/5Q2/1P1BP3/PB3PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 986.6,
        move: "Bxf6",
        prev: "3r1rk1/1b2qpp1/1p2pn1p/p1b3N1/5Q2/1P1BP3/PB3PPP/2RR2K1",
        next: "3r1rk1/1b2qpp1/1p2pB1p/p1b3N1/5Q2/1P1BP3/P4PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 989.4,
        move: "Qxf6",
        prev: "3r1rk1/1b2qpp1/1p2pB1p/p1b3N1/5Q2/1P1BP3/P4PPP/2RR2K1",
        next: "3r1rk1/1b3pp1/1p2pq1p/p1b3N1/5Q2/1P1BP3/P4PPP/2RR2K1",
        caption: "of time"
    },
    {
        timestamp: 995.4,
        move: "Rxd8",
        prev: "3r1r1k/1b3ppB/1p2pq1p/p1b3N1/5Q2/1P2P3/P4PPP/2RR2K1",
        next: "3R1r1k/1b3ppB/1p2pq1p/p1b3N1/5Q2/1P2P3/P4PPP/2R3K1",
        caption: "so now white has a microscopically advantageous position because he clears"
    },
    {
        timestamp: 1009.4,
        move: "Bd3",
        prev: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P2PN2/PB2BPPP/2RR2K1",
        next: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        caption: "out the center and now he is a step ahead of his opponent he now has four pieces out and pretty soon he's going to have all the pieces out right that that's kind of the plan to play E3 B3 Etc so castles Rook D1 the question is how is black going to"
    },
    {
        timestamp: 1020.0,
        move: "Rd5",
        prev: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        caption: "develop now some of you who have been watching my road to GM series uh if you haven't yet if for some reason you are watching this video somehow like somehow you stumbled on a YouTube chess video"
    },
    {
        timestamp: 1023.2,
        move: "b4",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "it's the first or second or third one you've ever watched watch my road to"
    },
    {
        timestamp: 1026.2,
        move: "Bxb4",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/3r4/1b3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "grandm series my second game in Madrid against Pepe quena I had the black"
    },
    {
        timestamp: 1029.0,
        move: "Rc7",
        prev: "5rk1/1b2qppp/pp2pn2/3r4/1b3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1bR1qppp/pp2pn2/3r4/1b3Q2/3BPN2/PB3PPP/3R2K1",
        caption: "pieces we had a symmetrical structure"
    },
    {
        timestamp: 1029.8,
        move: "Rcc1",
        prev: "5rk1/1bR1qppp/pp2pn2/3r4/1b3Q2/3BPN2/PB3PPP/3R2K1",
        next: "5rk1/1b2qppp/pp2pn2/3r4/1b3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "like this and I was pretty passive and I"
    },
    {
        timestamp: 1035.0,
        move: "Rc7",
        prev: "5rk1/1b2qp1p/pp2pp2/3r4/1b3Q2/3BPN2/P4PPP/2RR2K1",
        next: "5rk1/1bR1qp1p/pp2pp2/3r4/1b3Q2/3BPN2/P4PPP/3R2K1",
        caption: "managed to slowly unwind well the question is how is black unwind so he"
    },
    {
        timestamp: 1041.2,
        move: "Qxd7",
        prev: "5rk1/1b1Rqp1p/pp2pp2/8/1b3Q2/3BPN2/P4PPP/3R2K1",
        next: "5rk1/1b1q1p1p/pp2pp2/8/1b3Q2/3BPN2/P4PPP/3R2K1",
        caption: "plays Queen E7 which is apparently an inaccurate move apparently the best move here is Bishop"
    },
    {
        timestamp: 1043.6,
        move: "b4",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1048.6,
        move: "Bd6",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "again back to E7 but that's like I I mean you 33% of"
    },
    {
        timestamp: 1055.4,
        move: "Rb8",
        prev: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "your moves have been moving the bishop back and forth you can't so Queen E7 is much more human now we have B3 instead"
    },
    {
        timestamp: 1059.4,
        move: "b4",
        prev: "1r3rk1/1b1nqpp1/pp2p2p/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqpp1/pp2p2p/2b5/1P3Q2/4PN2/PB2BPPP/R2R2K1",
        caption: "of B3 actually chasing the bishop is"
    },
    {
        timestamp: 1062.0,
        move: "Bxb4",
        prev: "1r3rk1/1b1nqpp1/pp2p2p/2b5/1P3Q2/4PN2/PB2BPPP/R2R2K1",
        next: "1r3rk1/1b1nqpp1/pp2p2p/8/1b3Q2/4PN2/PB2BPPP/R2R2K1",
        caption: "better the bishop goes to D6 you play Knight A5 Bishop B6 stops Knight"
    },
    {
        timestamp: 1071.8,
        move: "Rbd8",
        prev: "1r3rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        next: "3r1rk1/1b1nqppp/pp2p3/2b5/5Q2/1P2PN2/PB2BPPP/R2R2K1",
        caption: "A5 but what it doesn't stop is the development of the bishop I sorry what it does stop is the development of the bishop Bishop"
    },
    {
        timestamp: 1076.8,
        move: "Bd6",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "D2 now it's not easy to play with black you play something like Knight C5 I play Bishop B4 and I win the game you try to"
    },
    {
        timestamp: 1082.8,
        move: "Bxf6",
        prev: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp1bpB2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        caption: "undevelop I can even trade and I just have long-term pressure and this is a"
    },
    {
        timestamp: 1083.8,
        move: "Qxf6",
        prev: "5rk1/1b2qppp/pp1bpB2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        next: "5rk1/1b3ppp/pp1bpq2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1089.8,
        move: "Rh5",
        prev: "5rk1/1b3p1p/pp1bpp2/3r4/1P2P3/3B1N2/P4PPP/2RR2K1",
        next: "5rk1/1b3p1p/pp1bpp2/7r/1P2P3/3B1N2/P4PPP/2RR2K1",
        caption: "dominant position so Queen E7 instead of Knight B3 he plays B3 and here he plays Knight E4 targeting"
    },
    {
        timestamp: 1091.0,
        move: "Bxa6",
        prev: "5rk1/1b3p1p/pp1bpp2/7r/1P2P3/3B1N2/P4PPP/2RR2K1",
        next: "5rk1/1b3p1p/Bp1bpp2/7r/1P2P3/5N2/P4PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1096.6,
        move: "Rd5",
        prev: "5rk1/1b3p1p/pp1bpp2/7r/1P2P3/3B1N2/P4PPP/2RR2K1",
        next: "5rk1/1b3p1p/pp1bpp2/3r4/1P2P3/3B1N2/P4PPP/2RR2K1",
        caption: "this now the other idea is to generate a"
    },
    {
        timestamp: 1097.4,
        move: "Rd5",
        prev: "3r1rk1/1b2qppp/pp2pn2/2b5/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1098.4,
        move: "b4",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "kingside attack that might have been the"
    },
    {
        timestamp: 1099.8,
        move: "b4",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/5Q2/1P1BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "idea all along to be honest so look at"
    },
    {
        timestamp: 1101.6,
        move: "Bd6",
        prev: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "this sneaky opening idea from Prague"
    },
    {
        timestamp: 1111.4,
        move: "Bc5",
        prev: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp2pn2/2br4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        caption: "Rook B8 B should B2 and I got to tell you this this doesn't look Pleasant it really doesn't I mean Anish plays Bishop B7 he's playing very cautiously Queen"
    },
    {
        timestamp: 1114.6,
        move: "Bxf6",
        prev: "5rk1/1b2qppp/pp1bpn2/3r4/1P3Q2/3BPN2/PB3PPP/2RR2K1",
        next: "5rk1/1b2qppp/pp1bpB2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        caption: "goes to F4 this is not the world's most"
    },
    {
        timestamp: 1116.8,
        move: "gxf6",
        prev: "5rk1/1b2qppp/pp1bpB2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        next: "5rk1/1b2qp1p/pp1bpp2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        caption: "Pleasant position I mean you seeing a"
    },
    {
        timestamp: 1124.2,
        move: "Rc7",
        prev: "5r1k/1b2bp1p/pp2p3/3r1p2/1P6/3BPN2/P4PPP/2RR2K1",
        next: "5r1k/1bR1bp1p/pp2p3/3r1p2/1P6/3BPN2/P4PPP/3R2K1",
        caption: "lot of ghosts here right you might play a move like H6 suddenly you're getting mated somewhere now there's another"
    },
    {
        timestamp: 1126.6,
        move: "Rfd8",
        prev: "5r1k/1bR1bp1p/pp2p3/3r1p2/1P6/3BPN2/P4PPP/3R2K1",
        next: "3r3k/1bR1bp1p/pp2p3/3r1p2/1P6/3BPN2/P4PPP/3R2K1",
        caption: "secret idea hidden in the position which"
    },
    {
        timestamp: 1131.8,
        move: "g3",
        prev: "7k/1R2bp1p/pp2p3/5p2/1P6/3rPN2/P4PPP/6K1",
        next: "7k/1R2bp1p/pp2p3/5p2/1P6/3rPNP1/P4P1P/6K1",
        caption: "is going to be discovered later Rook bd8 Rook"
    },
    {
        timestamp: 1135.2,
        move: "Bxb4",
        prev: "7k/1R2bp1p/pp2p3/5p2/1P6/3rPNP1/P4P1P/6K1",
        next: "7k/1R3p1p/pp2p3/5p2/1b6/3rPNP1/P4P1P/6K1",
        caption: "C1 Knight F6 Bishop D3"
    },
    {
        timestamp: 1135.8,
        move: "Qxf6",
        prev: "5rk1/1b2qppp/pp1bpB2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        next: "5rk1/1b3ppp/pp1bpq2/3r4/1P3Q2/3BPN2/P4PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1137.0,
        move: "Rd5",
        prev: "5rk1/1b3p1p/pp1bpp2/7r/1P2P3/3B1N2/P4PPP/2RR2K1",
        next: "5rk1/1b3p1p/pp1bpp2/3r4/1P2P3/3B1N2/P4PPP/2RR2K1",
        caption: ""
    },
    {
        timestamp: 1146.6,
        move: "a5",
        prev: "5rk1/1b3p1p/pp2pp2/8/1bR1P3/3R1N2/P4PPP/6K1",
        next: "5rk1/1b3p1p/1p2pp2/p7/1bR1P3/3R1N2/P4PPP/6K1",
        caption: "and it's quite clear now that what white wants so let's say black plays A5 you have Knight G5 ideas if H6 you"
    },
    {
        timestamp: 1152.4,
        move: "h3",
        prev: "2b2rk1/R4p1p/1p3p2/p3p3/1bR1P3/5N2/P4PPP/6K1",
        next: "2b2rk1/R4p1p/1p3p2/p3p3/1bR1P3/5N1P/P4PP1/6K1",
        caption: "can actually take on F6 and then in this position you have check here uh you got"
    },
    {
        timestamp: 1153.8,
        move: "Be6",
        prev: "2b2rk1/R4p1p/1p3p2/p3p3/1bR1P3/5N1P/P4PP1/6K1",
        next: "5rk1/R4p1p/1p2bp2/p3p3/1bR1P3/5N1P/P4PP1/6K1",
        caption: ""
    },
    {
        timestamp: 1155.2,
        move: "Rc2",
        prev: "5rk1/R4p1p/1p2bp2/p3p3/1bR1P3/5N1P/P4PP1/6K1",
        next: "5rk1/R4p1p/1p2bp2/p3p3/1b2P3/5N1P/P1R2PP1/6K1",
        caption: ""
    },
    {
        timestamp: 1157.0,
        move: "Rd8",
        prev: "5rk1/R4p1p/1p2bp2/p3p3/1b2P3/5N1P/P1R2PP1/6K1",
        next: "3r2k1/R4p1p/1p2bp2/p3p3/1b2P3/5N1P/P1R2PP1/6K1",
        caption: ""
    },
    {
        timestamp: 1161.0,
        move: "g4",
        prev: "3r2k1/R4p1p/1p2bp2/p3p3/1b2P3/5N1P/P1R2PP1/6K1",
        next: "3r2k1/R4p1p/1p2bp2/p3p3/1b2P1P1/5N1P/P1R2P2/6K1",
        caption: "to take the Rook first if this you have"
    },
    {
        timestamp: 1173.4,
        move: "Rd4",
        prev: "3r4/R4pk1/1p3p2/p1b1pP1p/4P3/7P/P1R2PK1/8",
        next: "8/R4pk1/1p3p2/p1b1pP1p/3rP3/7P/P1R2PK1/8",
        caption: "Knight F7 and if this you have take take Knight F7 so you can bulldo the position a little bit now here in each giri blunders something strange I think he felt a bit"
    },
    {
        timestamp: 1175.2,
        move: "Re2",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/3rP3/7P/P1R2PK1/8",
        next: "8/R4pk1/1p3p2/p1b1pP1p/3rP3/7P/P3RPK1/8",
        caption: ""
    },
    {
        timestamp: 1177.0,
        move: "Rd1",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/4P2P/3r4/P3RPK1/8",
        next: "8/R4pk1/1p3p2/p1b1pP1p/4P2P/8/P3RPK1/3r4",
        caption: "uncomfortable and he played Rook to D5"
    },
    {
        timestamp: 1177.8,
        move: "Rc2",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/4P2P/8/P3RPK1/3r4",
        next: "8/R4pk1/1p3p2/p1b1pP1p/4P2P/8/P1R2PK1/3r4",
        caption: ""
    },
    {
        timestamp: 1178.8,
        move: "Rd4",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/4P2P/8/P1R2PK1/3r4",
        next: "8/R4pk1/1p3p2/p1b1pP1p/3rP2P/8/P1R2PK1/8",
        caption: "and Rook D5 loses to a tactical"
    },
    {
        timestamp: 1179.6,
        move: "f3",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/3rP2P/8/P1R2PK1/8",
        next: "8/R4pk1/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1180.6,
        move: "Kf8",
        prev: "8/R4pk1/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "5k2/R4p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1181.2,
        move: "Ra8+",
        prev: "5k2/R4p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1181.8,
        move: "Ke7",
        prev: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R7/4kp2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1183.0,
        move: "Ra8+",
        prev: "5k2/R4p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1184.8,
        move: "Kg7",
        prev: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R7/5pk1/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: "shot now what I don't understand I'm"
    },
    {
        timestamp: 1187.4,
        move: "Kh1",
        prev: "R7/5pk1/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R7/5pk1/1p3p2/p1b1pP1p/3rP2P/5P2/P1R5/7K",
        caption: "going to show you the Tactical shot but then what I'm going to tell you I don't"
    },
    {
        timestamp: 1196.2,
        move: "Ke7",
        prev: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "R7/4kp2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: "understand so the Tactical shot is this move B4 the point is that now white is going to get access to the C7 Square you're giving up a pawn to play Rook C7 in fact"
    },
    {
        timestamp: 1197.2,
        move: "Ra7",
        prev: "R4k2/5p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        next: "5k2/R4p2/1p3p2/p1b1pP1p/3rP2P/5P2/P1R3K1/8",
        caption: ""
    },
    {
        timestamp: 1209.8,
        move: "Rf8",
        prev: "3r4/1RR2pk1/1p3p2/4pP1p/4P2P/p4P2/P1K2b2/8",
        next: "5r2/1RR2pk1/1p3p2/4pP1p/4P2P/p4P2/P1K2b2/8",
        caption: "you're giving up a pawn to actually even more powerfully take first and then play Rook C7 and the queen cannot guard both Bishops The Rook D7 take it's even worse"
    },
    {
        timestamp: 1214.8,
        move: "Rd7",
        prev: "5r2/1RR2pk1/1p3p2/4pP2/4P2p/p3bP1K/P7/8",
        next: "5r2/1R1R1pk1/1p3p2/4pP2/4P2p/p3bP1K/P7/8",
        caption: "I don't even take the bishop I win the queen with Bishop H7 and Rook takes Queen so the question is did Anish giri"
    },
    {
        timestamp: 1240.8,
        move: "Kd7",
        prev: "2K5/1R3p2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        next: "8/1R1K1p2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        caption: "think this was fine or or what happened when he played Rook d8 I'll tell you what I mean by what happened the threat here was also B4 slightly differently though because after Bishop before the queen cannot defend the Knight and the bishop this this this completely winning position"
    },
    {
        timestamp: 1242.2,
        move: "Kc8",
        prev: "8/1R1K1p2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        next: "2K5/1R3p2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        caption: "for white because two two pieces are"
    },
    {
        timestamp: 1248.2,
        move: "Rxf7",
        prev: "2K5/1R3p2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        next: "2K5/5R2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        caption: "just better than a rook in a middle game so I don't know what happened here because it looked like Anish saw the"
    },
    {
        timestamp: 1250.0,
        move: "Bf2",
        prev: "2K5/5R2/1p3p2/4pPk1/3bP3/p4P2/P7/8",
        next: "2K5/5R2/1p3p2/4pPk1/4P3/p4P2/P4b2/8",
        caption: "idea or maybe got a little bit fortunate"
    }
];

export default tableData;