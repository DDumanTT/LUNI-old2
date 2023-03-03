import { GameScanner } from "./main/gameScanner/GameScanner";
import { Main } from "./main/main";

const gameScanner = new GameScanner();

const main = new Main(gameScanner);

main.start();
