import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ADVANCED_LABS,LAB_OPTION_REASONS} from '../src/immunolab-v52.js';
import {DRILLS} from '../src/curricular-drills.js';
import {SCENES} from '../src/adventure.js';
import {MORPHOLOGY} from '../src/morphology.js';
const app=readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const clinical=readFileSync(new URL('../src/clinical.js',import.meta.url),'utf8');
test('atlas: seção única com três perspectivas sem eliminação do acervo',()=>{
 assert.match(app,/function unifiedAtlas\(/);
 for(const id of ['cells','concepts','morph'])assert.match(app,new RegExp("'"+id+"'"));
 assert.match(app,/glossaryConcepts\(\)/);
 assert.match(app,/atlasMorphology\(\)/);
 assert.equal(MORPHOLOGY.length,10);
});
test('cinco destinos principais e atividades práticas preservadas',()=>{
 const match=app.match(/const MAIN_LINKS=\[(.*?)\];/s);
 assert.ok(match);assert.equal((match[1].match(/page:/g)||[]).length,5);
 for(const label of ['Minha Trilha','Exploração','ImunoLab','Atlas','Desempenho'])assert.ok(match[1].includes(label));
 for(const activity of ['Exames e técnicas','Prática morfológica','Mecanismos','Desafios','Montagem molecular'])assert.ok(clinical.includes(activity));
 assert.equal(SCENES.length,8);
 assert.equal(DRILLS.length,21);
});
test('todas as alternativas de cada estação têm justificativa independente',()=>{
 assert.equal(ADVANCED_LABS.length,9);
 for(const lab of ADVANCED_LABS){const reasons=LAB_OPTION_REASONS[lab.id];assert.equal(reasons.length,lab.options.length,lab.id);for(const i of reasons){assert.ok(i.length>55);assert.doesNotMatch(i,/Esta opção não é a melhor porque não explica/);}assert.equal(new Set(reasons).size,reasons.length);}
});
test('CSS v5.5 concentrado em um único arquivo',()=>{
 const files=['style.css','clinical.css','clinical-v52.css'];
 const occurrences=files.filter(f=>readFileSync(new URL('../src/'+f,import.meta.url),'utf8').includes('/* v5.5 UX and logic signaling */'));
 assert.deepEqual(occurrences,['style.css']);
});
