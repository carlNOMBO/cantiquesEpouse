import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: Song[] = [
    {
      id: 1,
      language: 'French',
      author: '',
      title: 'C’EST COMME LE CIEL',
      choir: "C'est comme le ciel pour moi C'est comme le ciel pour moi Je passe le Jourdain Pour le beau Canaan Et c’est comme le ciel pour moi",
      verses: [
        {num:1, text: "Nous trouvons des gens Qui ne peuvent pas comprendre Pourquoi nous sommes libres et heureux Nous passons le Jourdain Pour le beau Canaan Et c’est comme le ciel pour moi."},
        {num:2, text: "2. Oh, quand je suis heureux Je chante et je prie Satan ne le croit pas je sais Mais je suis ravi de l’Esprit point de doute Et c’est bien cela mon problème."}
      ],
      otherInfos: ''
    },

    {
      id: 2,
      language: 'French',
      author: '',
      title: 'PRENDS LE NOM DE JESUS',
      choir: "Précieux Nom, Nom si doux Espoir de la terre, joie du ciel Précieux Nom, Nom si doux Espoir de la terre, joie du ciel",
      verses: [
        {num: 1, text: "Prends le nom de Jésus avec toi Enfant de tristesse et peine Il va te procurer la joie Prends Le partout où tu vas."},
        {num: 2, text: "Prends toujours le Nom de Jésus Comme bouclier face aux pièges Quand les tentations surviennent Murmure ce Nom en priant."},
        {num: 3, text: "Oh, le précieux Nom de Jésus Fais frémir nos âmes de joie Lorsque Ses bras nous reçoivent Et nous chantons Ses cantiques."},
        {num: 4, text: "A Son Nom nous nous inclinons Nous prosternons à Ses pieds Roi des rois le couronnerons Quand le voyage est fini."}
      ],
      otherInfos: ''
    },

    {
      id: 3,
      language: 'French',
      author: '',
      title: 'OH! PRENDS MON AME',
      choir: "Source de vie, de Paix d’Amour Vers Toi je crie la nuit, le jour Entends ma plainte, Sois mon soutien Calme ma crainte, Sois mon seul bien.",
      verses: [
        {num: 1, text: "O prends mon âme, prends-la, Seigneur Et que Ta flamme brûle dans mon cœur Que tout mon être vibre pour Toi Sois seul mon Maître, ô divin Roi."},
        {num: 2, text: "Du mal perfide, Ô garde moi Viens sois mon guide, chef de ma foi Quand la nuit voile tout à mes yeux Sois mon étoile, brille des cieux."},
        {num: 3, text: "Voici l’aurore d’un jour nouveau Le ciel s’éclore d’un feu plus beau Messie s’apprête, pourquoi gémir Levons nos têtes, Il va venir."}
      ],
      otherInfos: ''
    },

    {
      id: 4,
      language: 'French',
      author: '',
      title: 'OH ! PETIT AIGLON',
      choir: "Oh, petit aiglon Ta vie n’est pas ici-bas Monte la montagne des tonnerres C’est  là-haut tu trouveras la vie.",
      verses: [
        {num: 1, text: "Tu as deux ailes Constituée pour t’envoler Viens, Ô viens je t’appelle Bats tes ailes et monte vers Moi."},
        {num: 2, text: "Ecoute, écoute aussi mon cri Y’a-t-il de comparable à Moi Là où tu es dans la basse cour Tu es à Moi Ô viens je suis à toi."},
        {num: 3, text: "Regarde à moi ta Mère Vois-tu combien je suis Grand Ainsi tu es semblable à Moi Monte ici, aiglon, monte ici."},
        {num: 4, text: "Quitte fuit Laodicée Qui est ni chaud, ni froid Monte viens vers Moi Pour t’envoler là à l’éternité."}
      ],
      otherInfos: ''
    }
  ];


  constructor() { }

  getSongs(): Song[] {
    return this.songs;
  }

  getSongById(id: number) {
    for (let i = 0; i < this.songs.length; i++)
    {
      if (this.songs[i].id === id) {
        return this.songs[i];
      }
    }
  }
}
