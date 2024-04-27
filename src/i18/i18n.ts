// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// language import 
import afTranslation from '../lang/af.json';
import sqTranslation from '../lang/sq.json';
import amTranslation from '../lang/am.json';
import arTranslation from '../lang/ar.json';
import hyTranslation from '../lang/hy.json';
import asTranslation from '../lang/as.json';
import ayTranslation from '../lang/ay.json';
import azTranslation from '../lang/az.json';
import bmTranslation from '../lang/bm.json';
import euTranslation from '../lang/eu.json';
import beTranslation from '../lang/be.json';
import bnTranslation from '../lang/bn.json';
import bhoTranslation from '../lang/bho.json';
import bsTranslation from '../lang/bs.json';
import bgTranslation from '../lang/bg.json';
import caTranslation from '../lang/ca.json';
import cebTranslation from '../lang/ceb.json';
import zhCNTranslation from '../lang/zh-CN.json';
import zhTWTranslation from '../lang/zh-TW.json';
import coTranslation from '../lang/co.json';
import hrTranslation from '../lang/hr.json';
import csTranslation from '../lang/cs.json';
import daTranslation from '../lang/da.json';
import dvTranslation from '../lang/dv.json';
import doiTranslation from '../lang/doi.json';
import nlTranslation from '../lang/nl.json';
import enTranslation from '../lang/en.json';
import eoTranslation from '../lang/eo.json';
import etTranslation from '../lang/et.json';
import eeTranslation from '../lang/ee.json';
import filTranslation from '../lang/fil.json';
import fiTranslation from '../lang/fi.json';
import frTranslation from '../lang/fr.json';
import fyTranslation from '../lang/fy.json';
import glTranslation from '../lang/gl.json';
import kaTranslation from '../lang/ka.json';
import deTranslation from '../lang/de.json';
import elTranslation from '../lang/el.json';
import gnTranslation from '../lang/gn.json';
import guTranslation from '../lang/gu.json';
import htTranslation from '../lang/ht.json';
import haTranslation from '../lang/ha.json';
import hawTranslation from '../lang/haw.json';
import heTranslation from '../lang/he.json';
import hiTranslation from '../lang/hi.json';
import hmnTranslation from '../lang/hmn.json';
import huTranslation from '../lang/hu.json';
import isTranslation from '../lang/is.json';
import igTranslation from '../lang/ig.json';
import iloTranslation from '../lang/ilo.json';
import idTranslation from '../lang/id.json';
import gaTranslation from '../lang/ga.json';
import itTranslation from '../lang/it.json';
import jaTranslation from '../lang/ja.json';
import jwTranslation from '../lang/jw.json';
import knTranslation from '../lang/kn.json';
import kkTranslation from '../lang/kk.json';
import kmTranslation from '../lang/km.json';
import rwTranslation from '../lang/rw.json';
import gomTranslation from '../lang/gom.json';
import koTranslation from '../lang/ko.json';
import kriTranslation from '../lang/kri.json';
import kuTranslation from '../lang/ku.json';
import ckbTranslation from '../lang/ckb.json';
import kyTranslation from '../lang/ky.json';
import loTranslation from '../lang/lo.json';
import laTranslation from '../lang/la.json';
import lvTranslation from '../lang/lv.json';
import lnTranslation from '../lang/ln.json';
import ltTranslation from '../lang/lt.json';
import lgTranslation from '../lang/lg.json';
import lbTranslation from '../lang/lb.json';
import mkTranslation from '../lang/mk.json';
import maiTranslation from '../lang/mai.json';
import mgTranslation from '../lang/mg.json';
import msTranslation from '../lang/ms.json';
import mlTranslation from '../lang/ml.json';
import mtTranslation from '../lang/mt.json';
import miTranslation from '../lang/mi.json';
import mrTranslation from '../lang/mr.json';
import mniTranslation from '../lang/mni.json';
import lusTranslation from '../lang/lus.json';
import mnTranslation from '../lang/mn.json';
import myTranslation from '../lang/my.json';
import neTranslation from '../lang/ne.json';
import noTranslation from '../lang/no.json';
import nyTranslation from '../lang/ny.json';
import orTranslation from '../lang/or.json';
import omTranslation from '../lang/om.json';
import psTranslation from '../lang/ps.json';
import faTranslation from '../lang/fa.json';
import plTranslation from '../lang/pl.json';
import ptTranslation from '../lang/pt.json';
import paTranslation from '../lang/pa.json';
import quTranslation from '../lang/qu.json';
import roTranslation from '../lang/ro.json';
import ruTranslation from '../lang/ru.json';
import smTranslation from '../lang/sm.json';
import saTranslation from '../lang/sa.json';
import gdTranslation from '../lang/gd.json';
import nsoTranslation from '../lang/nso.json';
import srTranslation from '../lang/sr.json';
import stTranslation from '../lang/st.json';
import snTranslation from '../lang/sn.json';
import sdTranslation from '../lang/sd.json';
import siTranslation from '../lang/si.json';
import skTranslation from '../lang/sk.json';
import slTranslation from '../lang/sl.json';
import soTranslation from '../lang/so.json';
import esTranslation from '../lang/es.json';
import suTranslation from '../lang/su.json';
import swTranslation from '../lang/sw.json';
import svTranslation from '../lang/sv.json';
import tlTranslation from '../lang/tl.json';
import tgTranslation from '../lang/tg.json';
import taTranslation from '../lang/ta.json';
import ttTranslation from '../lang/tt.json';
import teTranslation from '../lang/te.json';
import thTranslation from '../lang/th.json';
import tiTranslation from '../lang/ti.json';
import tsTranslation from '../lang/ts.json';
import trTranslation from '../lang/tr.json';
import tkTranslation from '../lang/tk.json';
import akTranslation from '../lang/ak.json';
import ukTranslation from '../lang/uk.json';
import urTranslation from '../lang/ur.json';
import ugTranslation from '../lang/ug.json';
import uzTranslation from '../lang/uz.json';
import viTranslation from '../lang/vi.json';
import cyTranslation from '../lang/cy.json';
import xhTranslation from '../lang/xh.json';
import yiTranslation from '../lang/yi.json';
import yoTranslation from '../lang/yo.json';
import zuTranslation from '../lang/zu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      af: { translation: afTranslation },
  sq: { translation: sqTranslation },
  am: { translation: amTranslation },
  ar: { translation: arTranslation },
  hy: { translation: hyTranslation },
  as: { translation: asTranslation },
  ay: { translation: ayTranslation },
  az: { translation: azTranslation },
  bm: { translation: bmTranslation },
  eu: { translation: euTranslation },
  be: { translation: beTranslation },
  bn: { translation: bnTranslation },
  bho: { translation: bhoTranslation },
  bs: { translation: bsTranslation },
  bg: { translation: bgTranslation },
  ca: { translation: caTranslation },
  ceb: { translation: cebTranslation },
  "zh-CN": { translation: zhCNTranslation },
  "zh-TW": { translation: zhTWTranslation },
  co: { translation: coTranslation },
  hr: { translation: hrTranslation },
  cs: { translation: csTranslation },
  da: { translation: daTranslation },
  dv: { translation: dvTranslation },
  doi: { translation: doiTranslation },
  nl: { translation: nlTranslation },
  en: { translation: enTranslation },
  eo: { translation: eoTranslation },
  et: { translation: etTranslation },
  ee: { translation: eeTranslation },
  fil: { translation: filTranslation },
  fi: { translation: fiTranslation },
  fr: { translation: frTranslation },
  fy: { translation: fyTranslation },
  gl: { translation: glTranslation },
  ka: { translation: kaTranslation },
  de: { translation: deTranslation },
  el: { translation: elTranslation },
  gn: { translation: gnTranslation },
  gu: { translation: guTranslation },
  ht: { translation: htTranslation },
  ha: { translation: haTranslation },
  haw: { translation: hawTranslation },
  he: { translation: heTranslation },
  hi: { translation: hiTranslation },
  hmn: { translation: hmnTranslation },
  hu: { translation: huTranslation },
  is: { translation: isTranslation },
  ig: { translation: igTranslation },
  ilo: { translation: iloTranslation },
  id: { translation: idTranslation },
  ga: { translation: gaTranslation },
  it: { translation: itTranslation },
  ja: { translation: jaTranslation },
  jw: { translation: jwTranslation },
  kn: { translation: knTranslation },
  kk: { translation: kkTranslation },
  km: { translation: kmTranslation },
  rw: { translation: rwTranslation },
  gom: { translation: gomTranslation },
  ko: { translation: koTranslation },
  kri: { translation: kriTranslation },
  ku: { translation: kuTranslation },
  ckb: { translation: ckbTranslation },
  ky: { translation: kyTranslation },
  lo: { translation: loTranslation },
  la: { translation: laTranslation },
  lv: { translation: lvTranslation },
  ln: { translation: lnTranslation },
  lt: { translation: ltTranslation },
  lg: { translation: lgTranslation },
  lb: { translation: lbTranslation },
  mk: { translation: mkTranslation },
  mai: { translation: maiTranslation },
  mg: { translation: mgTranslation },
  ms: { translation: msTranslation },
  ml: { translation: mlTranslation },
  mt: { translation: mtTranslation },
  mi: { translation: miTranslation },
  mr: { translation: mrTranslation },
  mni: { translation: mniTranslation },
  lus: { translation: lusTranslation },
  mn: { translation: mnTranslation },
  my: { translation: myTranslation },
  ne: { translation: neTranslation },
  no: { translation: noTranslation },
  ny: { translation: nyTranslation },
  or: { translation: orTranslation },
  om: { translation: omTranslation },
  ps: { translation: psTranslation },
  fa: { translation: faTranslation },
  pl: { translation: plTranslation },
  pt: { translation: ptTranslation },
  pa: { translation: paTranslation },
  qu: { translation: quTranslation },
  ro: { translation: roTranslation },
  ru: { translation: ruTranslation },
  sm: { translation: smTranslation },
  sa: { translation: saTranslation },
  gd: { translation: gdTranslation },
  nso: { translation: nsoTranslation },
  sr: { translation: srTranslation },
  st: { translation: stTranslation },
  sn: { translation: snTranslation },
  sd: { translation: sdTranslation },
  si: { translation: siTranslation },
  sk: { translation: skTranslation },
  sl: { translation: slTranslation },
  so: { translation: soTranslation },
  es: { translation: esTranslation },
  su: { translation: suTranslation },
  sw: { translation: swTranslation },
  sv: { translation: svTranslation },
  tl: { translation: tlTranslation },
  tg: { translation: tgTranslation },
  ta: { translation: taTranslation },
  tt: { translation: ttTranslation },
  te: { translation: teTranslation },
  th: { translation: thTranslation },
  ti: { translation: tiTranslation },
  ts: { translation: tsTranslation },
  tr: { translation: trTranslation },
  tk: { translation: tkTranslation },
  ak: { translation: akTranslation },
  uk: { translation: ukTranslation },
  ur: { translation: urTranslation },
  ug: { translation: ugTranslation },
  uz: { translation: uzTranslation },
  vi: { translation: viTranslation },
  cy: { translation: cyTranslation },
  xh: { translation: xhTranslation },
  yi: { translation: yiTranslation },
  yo: { translation: yoTranslation },
  zu: { translation: zuTranslation }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
