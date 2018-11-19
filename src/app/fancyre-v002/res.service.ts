import { Injectable } from '@angular/core';
import {Observable,Subject, BehaviorSubject, combineLatest, Subscription, merge,  of as observableOf, bindNodeCallback,bindCallback} from 'rxjs'
import {filter, first, mergeMap, switchMap} from 'rxjs/operators';
import {HttpClient } from '@angular/common/http';

export interface ResName {
  first: string,
  middle: string,
  last: string
}

export interface Birth {
  year: string,
  location: string
}

export interface Contact{
  city: string,
  street: string,
  phone: string,
  email: string,
  github: string,
  website: string
}

export interface Experience{
  company: string,
  position: string,
  timeperiod: string,
  description: string,
  website: string
}
export interface Education{
  degree: string,
  timeperiod: string,
  description:string,
  website:string
}


  @Injectable({
    providedIn: 'root'
  })

  export class ResService {
      name:ResName =  {
        first: 'Howard',
        middle: '',
        last: 'Yin'
      };
      about:string =  'Hi, my name is John Doe. I"m just about the most boring type of person you could\
      possibly imagine. I like collecting leaves from the tree in my back yard and documenting\
      each time I eat a peanut that is non-uniform. I am not a robot. Please hire me.';

      birth:Birth = {
        year: '1990',
        location: 'New York'
      };
      contact:Contact = {
        city: 'Waterloo',
        street: ' 888 Sundew drive',
        phone: '8888888888',
        email: 'howard@gmail.com',
        github: 'Hui00Yin',
        website: 'http://huiyin.com'
      };

      experience:Experience[] =  [
        {
          company: 'Company A',
          position: 'Developer',
          timeperiod: 'since January 2016',
          description: 'Programming and watching cute cat videos.',
          website: 'https://example.com'
        },
        {
          company: 'Company B',
          position: 'Frontend Developer',
          timeperiod: 'January 2015 - December 2015',
          description: 'Fulfillment of extremely important tasks.',
          website: 'https://example.com'
        },
        {
          company: 'Company C',
          position: 'Frontend Developer',
          timeperiod: 'March 2012 - December 2013',
          description: 'Fulfillment of extremely important tasks.',
          website: 'https://example.com'
        },
      ];

      education:Education[] = [
        {
          degree: 'Master of Arts',
          timeperiod: 'March 2012 - December 2013',
          description: 'Major in Hacking and Computer Penetration, University A, New York, USA.',
          website: 'https://example.com'
        },
      ];

    constructor(private http: HttpClient) { 
    }
  }


  /*
  // Called by templates to decrease redundancy
function getVueOptions (name) {
    const opt = {
        name: name,
        data () {
            return {
                person: yaml.load(PERSON),
                terms: terms
            };
        },
        computed: {
            lang () {
                const defaultLang = this.terms.en;
                const useLang = this.terms[this.person.lang];

              // overwrite non-set fields with default lang
                Object.keys(defaultLang)
          .filter(k => !useLang[k])
          .forEach(k => {
              console.log(k);
              useLang[k] = defaultLang[k];
          });

                return useLang;
            }
        }
    };
    return opt;
}

export {
    getVueOptions
};*/
