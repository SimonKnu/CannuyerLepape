import { Pipe, PipeTransform } from '@angular/core';
import { Musique } from '../models/musique';

@Pipe({
  name: 'rechercher'
})
export class RechercherPipe implements PipeTransform {

  transform(value: Musique[], filterWanted: string= ''): any {

    const chaine = filterWanted.toLowerCase();
    
    if(chaine.length < 10){
      return chaine ? value.filter( (item) => item.titre.toLowerCase().indexOf(chaine) !== -1) : value;
    }else {
      return chaine ? value.filter((item) => this.comparaison(item.titre.toLowerCase(), chaine) <= 8) : value;
    }
  }
    
    
  public comparaison( s1: string, s2: string) {
    const row2 = [];
    if (s1 === s2) {
    
      return 0;
    } else {
      const s1_len = s1.length, s2_len = s2.length;
     if (s1_len && s2_len) {
         let i1 = 0, i2 = 0, a, b, c, c2, row = row2;
      while (i1 < s1_len)
        row[i1] = ++i1;
        while (i2 < s2_len) {
          c2 = s2.charCodeAt(i2);
          a = i2;
          ++i2;
          b = i2;

          for (i1 = 0; i1 < s1_len; ++i1) {
            c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
            a = row[i1];
            b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
            row[i1] = b;
          }
        }
        return b;
      } else {
        return s1_len + s2_len;
      }
    }
  }
    
  public leven(s: string, t: string){
      
    const d = []; 
      
    const n = s.length;
    const m = t.length;
      
    if (n == 0) return m;
    if (m == 0) return n;
      
    for (let i = n; i >= 0; i--) d[i] = [];
      
    for (let i = n; i >= 0; i--) d[i][0] = i;
    for (let j = m; j >= 0; j--) d[0][j] = j;
      
    for (let i = 1; i <= n; i++) {
      const s_i = s.charAt(i - 1);

      for (let j = 1; j <= m; j++) {
      
        if (i == j && d[i][j] > 4) return n;
      
        const t_j = t.charAt(j - 1);
        const cost = (s_i == t_j) ? 0 : 1;
      
        let mi = d[i - 1][j] + 1;
        const b = d[i][j - 1] + 1;
        const c = d[i - 1][j - 1] + cost;
      
        if (b < mi) mi = b;
        if (c < mi) mi = c;
      
        d[i][j] = mi; 

        if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
        }
      }
    }
    return d[n][m];
  }

}
