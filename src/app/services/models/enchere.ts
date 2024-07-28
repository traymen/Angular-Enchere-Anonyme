/* tslint:disable */
/* eslint-disable */
import { Favoris } from '../models/favoris';
import { LocalTime } from '../models/local-time';
export interface Enchere {
  createdBy?: string;
  createdDate?: string;
  date?: string;
  descriptionProduit?: string;
  etat?: 'Terminer' | 'Encours';
  favorisList?: Array<Favoris>;
  heure?: LocalTime;
  idEnchere?: number;
  image?: string;
  nomProduit?: string;
  nombreCondidat?: number;
  nombreCondidatsInscrits?: number;
  nombreCondidatsRestants?: number;
  prix?: number;
  prixE?: number;
  prixGagnant?: number;
  type?: 'VETEMENTSPORT' | 'ELECTRONIQUE' | 'VETEMENT' | 'VOITURE' | 'ELECTROMENAGER' | 'MONTREetBIJOUX';
}
