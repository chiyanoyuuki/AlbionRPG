export class Joueur {
	public id!: number;
    public pseudo!:string;
    public actif!:boolean;
}

export class Personnage{
    public nom: string;
    public image: string;
    public color: string;
    public stats: Stats[];
}
export class Stats{
    public nom: string;
    public qte: number;
}