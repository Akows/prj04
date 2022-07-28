import React from "react";
import { Link } from "react-router-dom";

import "../style/Contentsbox.css";

// 캐릭터 이미지 링크
import albedoimg from '../assets/Character_Albedo_Thumb.webp';
import aloyimg from '../assets/Character_Aloy_Thumb.webp';
import amberimg from '../assets/Character_Amber_Thumb.webp';
import aratakiittoimg from '../assets/Character_Arataki_Itto_Thumb.webp';
import ayakaimg from '../assets/Character_Kamisato_Ayaka_Thumb.webp';
import barbaraimg from '../assets/Character_Barbara_Thumb.webp';
import beidouimg from '../assets/Character_Beidou_Thumb.webp';
import bennettimg from '../assets/Character_Bennett_Thumb.webp';
import chongyunimg from '../assets/Character_Chongyun_Thumb.webp';
import dilucimg from '../assets/Character_Diluc_Thumb.webp';
import dionaimg from '../assets/Character_Diona_Thumb.webp';
import eulaimg from '../assets/Character_Eula_Thumb.webp';
import fischlimg from '../assets/Character_Fischl_Thumb.webp';
import ganyuimg from '../assets/Character_Ganyu_Thumb.webp';
import gorouimg from '../assets/Character_Gorou_Thumb.webp';
import hutaoimg from '../assets/Character_Hu_Tao_Thumb.webp';
import jeanimg from '../assets/Character_Jean_Thumb.webp';
import kaeyaimg from '../assets/Character_Kaeya_Thumb.webp';
import kazuhaimg from '../assets/Character_Kaedehara_Kazuha_Thumb.webp';
import keqingimg from '../assets/Character_Keqing_Thumb.webp';
import kleeimg from '../assets/Character_Klee_Thumb.webp';
import kokomiimg from '../assets/Character_Sangonomiya_Kokomi_Thumb.webp';
import lisaimg from '../assets/Character_Lisa_Thumb.webp';
import monaimg from '../assets/Character_Mona_Thumb.webp';
import ningguangimg from '../assets/Character_Ningguang_Thumb.webp';
import noelleimg from '../assets/Character_Noelle_Thumb.webp';
import qiqiimg from '../assets/Character_Qiqi_Thumb.webp';
import raidenimg from '../assets/Character_Raiden_Shogun_Thumb.webp';
import razorimg from '../assets/Character_Razor_Thumb.webp';
import rosariaimg from '../assets/Character_Rosaria_Thumb.webp';
import saraimg from '../assets/Character_Kujou_Sara_Thumb.webp';
import sayuimg from '../assets/Character_Sayu_Thumb.webp';
import shenheimg from '../assets/Character_Shenhe_Thumb.webp';
import sucroseimg from '../assets/Character_Sucrose_Thumb.webp';
import tartagliaimg from '../assets/Character_Tartaglia_Thumb.webp';
import thomaimg from '../assets/Character_Thoma_Thumb.webp';
import travelerimg from '../assets/Character_Traveler_Thumb.png';
import ventiimg from '../assets/Character_Venti_Thumb.webp';
import xianglingimg from '../assets/Character_Xiangling_Thumb.webp';
import xiaoimg from '../assets/Character_Xiao_Thumb.webp';
import xingqiuimg from '../assets/Character_Xingqiu_Thumb.webp';
import xinyanimg from '../assets/Character_Xinyan_Thumb.webp';
import yaemikoimg from '../assets/Character_Yae_Miko_Thumb.webp';
import yanfeiimg from '../assets/Character_Yanfei_Thumb.webp';
import yoimiyaimg from '../assets/Character_Yoimiya_Thumb.webp';
import yunjinimg from '../assets/Character_Yun_Jin_Thumb.webp';
import zhongliimg from '../assets/Character_Zhongli_Thumb.webp';

// 무기 이미지 링크
import akuoumaru from '../assets/Weapon_Akuoumaru.webp';
import alley_hunter from '../assets/Weapon_Alley_Hunter.webp';
import amber_catalyst from '../assets/Weapon_Amber_Catalyst.webp';
import amenoma_kageuchi from '../assets/Weapon_Amenoma_Kageuchi.webp';
import amos_bow from '../assets/Weapon_Amos_Bow.webp';
import apprentice_s_notes from '../assets/Weapon_Apprentices_Notes.webp';
import aquila_favonia from '../assets/Weapon_Aquila_Favonia.webp';
import beginner_s_protector from '../assets/Weapon_Beginners_Protector.webp';
import black_tassel from '../assets/Weapon_Black_Tassel.webp';
import blackcliff_amulet from '../assets/Weapon_Blackcliff_Agate.webp';
import blackcliff_longsword from '../assets/Weapon_Blackcliff_Longsword.webp';
import blackcliff_pole from '../assets/Weapon_Blackcliff_Pole.webp';
import blackcliff_slasher from '../assets/Weapon_Blackcliff_Slasher.webp';
import blackcliff_warbow from '../assets/Weapon_Blackcliff_Warbow.webp';
import bloodtainted_greatsword from '../assets/Weapon_Bloodtainted_Greatsword.webp';
import calamity_queller from '../assets/Weapon_Calamity_Queller.webp';
import cinnabar_spindle from '../assets/Weapon_Cinnabar_Spindle.webp';
import compound_bow from '../assets/Weapon_Compound_Bow.webp';
import cool_steel from '../assets/Weapon_Cool_Steel.webp';
import crescent_pike from '../assets/Weapon_Crescent_Pike.webp';
import dark_iron_sword from '../assets/Weapon_Dark_Iron_Sword.webp';
import deathmatch from '../assets/Weapon_Deathmatch.webp';
import debate_club from '../assets/Weapon_Debate_Club.webp';
import dodoco_tales from '../assets/Weapon_Dodoco_Tales.webp';
import dragon_s_bane from '../assets/Weapon_Dragons_Bane.webp';
import dragonspine_spear from '../assets/Weapon_Dragonspine_Spear.webp';
import dull_blade from '../assets/Weapon_Dull_Blade.webp';
import eberlasting_moonglow from '../assets/Weapon_Everlasting_Moonglow.webp';
import ebony_bow from '../assets/Weapon_Ebony_Bow.webp';
import elegy_for_the_end from '../assets/Weapon_Elegy_for_the_End.webp';
import emerald_orb from '../assets/Weapon_Emerald_Orb.webp';
import engulfing_lightning from '../assets/Weapon_Engulfing_Lightning.webp';
import everlasting_moonglow from '../assets/Weapon_Everlasting_Moonglow.webp';
import eye_of_perception from '../assets/Weapon_Eye_of_Perception.webp';
import favonius_codex from '../assets/Weapon_Favonius_Codex.webp';
import favonius_greatsword from '../assets/Weapon_Favonius_Greatsword.webp';
import favonius_lance from '../assets/Weapon_Favonius_Lance.webp';
import favonius_sword from '../assets/Weapon_Favonius_Sword.webp';
import favonius_warbow from '../assets/Weapon_Favonius_Warbow.webp';
import ferrous_shadow from '../assets/Weapon_Ferrous_Shadow.webp';
import festering_desire from '../assets/Weapon_Festering_Desire.webp';
import fillet_blade from '../assets/Weapon_Fillet_Blade.webp';
import freedom_sworn from '../assets/Weapon_Freedom-Sworn.webp';
import frostbearer from '../assets/Weapon_Frostbearer.webp';
import hakushin_ring from '../assets/Weapon_Hakushin_Ring.webp';
import halberd from '../assets/Weapon_Halberd.webp';
import hamayumi from '../assets/Weapon_Hamayumi.webp';
import haran_geppaku_futsu from '../assets/Weapon_Haran_Geppaku_Futsu.webp';
import harbinger_of_dawn from '../assets/Weapon_Harbinger_of_Dawn.webp';
import hunter_s_bow from '../assets/Weapon_Hunters_Bow.webp';
import iron_point from '../assets/Weapon_Iron_Point.webp';
import iron_sting from '../assets/Weapon_Iron_Sting.webp';
import kaguras_verity from '../assets/Weapon_Kaguras_Verity.webp';
import katsuragikiri_nagamasa from '../assets/Weapon_Katsuragikiri_Nagamasa.webp';
import kitain_cross_spear from '../assets/Weapon_Kitain_Cross_Spear.webp';
import lion_s_roar from '../assets/Weapon_Lions_Roar.webp';
import lithic_blade from '../assets/Weapon_Lithic_Blade.webp';
import lithic_spear from '../assets/Weapon_Lithic_Spear.webp';
import lost_prayer_to_the_sacred_winds from '../assets/Weapon_Lost_Prayer_to_the_Sacred_Winds.webp';
import luxurious_sea_lord from '../assets/Weapon_Luxurious_Sea-Lord.webp';
import magic_guide from '../assets/Weapon_Magic_Guide.webp';
import mappa_mare from '../assets/Weapon_Mappa_Mare.webp';
import memory_of_dust from '../assets/Weapon_Memory_of_Dust.webp';
import messenger from '../assets/Weapon_Messenger.webp';
import mistsplitter_reforged from '../assets/Weapon_Mistsplitter_Reforged.webp';
import mitternachts_waltz from '../assets/Weapon_Mitternachts_Waltz.webp';
import mouuns_moon from '../assets/Weapon_Mouuns_Moon.webp';
import oathsworn_eye from '../assets/Weapon_Oathsworn_Eye.webp';
import old_merc_s_pal from '../assets/Weapon_Old_Mercs_Pal.webp';
import otherworldly_story from '../assets/Weapon_Otherworldly_Story.webp';
import pocket_grimoire from '../assets/Weapon_Pocket_Grimoire.webp';
import polar_star from '../assets/Weapon_Polar_Star.webp';
import predator from '../assets/Weapon_Predator.webp';
import primordial_jade_cutter from '../assets/Weapon_Primordial_Jade_Cutter.webp';
import primordial_jade_winged_spear from '../assets/Weapon_Primordial_Jade_Winged-Spear.webp';
import prototype_archaic from '../assets/Weapon_Prototype_Archaic.webp';
import prototype_crescent from '../assets/Weapon_Prototype_Crescent.webp';
import prototype_grudge from '../assets/Weapon_Prototype_Starglitter.webp';
import prototype_malice from '../assets/Weapon_Prototype_Amber.webp';
import prototype_rancour from '../assets/Weapon_Prototype_Rancour.webp';
import quartz from '../assets/Weapon_Quartz.webp';
import rainslasher from '../assets/Weapon_Rainslasher.webp';
import raven_bow from '../assets/Weapon_Raven_Bow.webp';
import recurve_bow from '../assets/Weapon_Recurve_Bow.webp';
import redhorn_stonethresher from '../assets/Weapon_Redhorn_Stonethresher.webp';
import royal_bow from '../assets/Weapon_Royal_Bow.webp';
import royal_greatsword from '../assets/Weapon_Royal_Greatsword.webp';
import royal_grimoire from '../assets/Weapon_Royal_Grimoire.webp';
import royal_longsword from '../assets/Weapon_Royal_Longsword.webp';
import royal_spear from '../assets/Weapon_Royal_Spear.webp';
import rust from '../assets/Weapon_Rust.webp';
import sacrificial_bow from '../assets/Weapon_Sacrificial_Bow.webp';
import sacrificial_fragments from '../assets/Weapon_Sacrificial_Fragments.webp';
import sacrificial_greatsword from '../assets/Weapon_Sacrificial_Greatsword.webp';
import sacrificial_sword from '../assets/Weapon_Sacrificial_Sword.webp';
import seasoned_hunter_s_bow from '../assets/Weapon_Seasoned_Hunters_Bow.webp';
import serpent_spine from '../assets/Weapon_Serpent_Spine.webp';
import sharpshooter_s_oath from '../assets/Weapon_Sharpshooters_Oath.webp';
import silver_sword from '../assets/Weapon_Silver_Sword.webp';
import skyrider_greatsword from '../assets/Weapon_Skyrider_Greatsword.webp';
import skyrider_sword from '../assets/Weapon_Skyrider_Sword.webp';
import skyward_atlas from '../assets/Weapon_Skyward_Atlas.webp';
import skyward_blade from '../assets/Weapon_Skyward_Blade.webp';
import skyward_harp from '../assets/Weapon_Skyward_Harp.webp';
import skyward_pride from '../assets/Weapon_Skyward_Pride.webp';
import skyward_spine from '../assets/Weapon_Skyward_Spine.webp';
import slingshot from '../assets/Weapon_Slingshot.webp';
import snow_tombed_starsilver from '../assets/Weapon_Snow-Tombed_Starsilver.webp';
import solar_pearl from '../assets/Weapon_Solar_Pearl.webp';
import song_of_broken_pines from '../assets/Weapon_Song_of_Broken_Pines.webp';
import staff_of_homa from '../assets/Weapon_Staff_of_Homa.webp';
import summit_shaper from '../assets/Weapon_Summit_Shaper.webp';
import sword_of_descension from '../assets/Weapon_Sword_of_Descension.webp';
import the_alley_flash from '../assets/Weapon_The_Alley_Flash.webp';
import the_bell from '../assets/Weapon_The_Bell.webp';
import the_black_sword from '../assets/Weapon_The_Black_Sword.webp';
import the_catch from '../assets/Weapon_The_Catch.webp';
import the_flute from '../assets/Weapon_The_Flute.webp';
import the_stringless from '../assets/Weapon_The_Stringless.webp';
import the_unforged from '../assets/Weapon_The_Unforged.webp';
import the_viridescent_hunt from '../assets/Weapon_The_Viridescent_Hunt.webp';
import the_widsith from '../assets/Weapon_The_Widsith.webp';
import thrilling_tales_of_dragon_slayers from '../assets/Weapon_Thrilling_Tales_of_Dragon_Slayers.webp';
import thundering_pulse from '../assets/Weapon_Thundering_Pulse.webp';
import traveler_s_handy_sword from '../assets/Weapon_Travelers_Handy_Sword.webp';
import twin_nephrite from '../assets/Weapon_Twin_Nephrite.webp';
import vortex_vanquisher from '../assets/Weapon_Vortex_Vanquisher.webp';
import waster_greatsword from '../assets/Weapon_Waster_Greatsword.webp';
import wavebreakers_fin from '../assets/Weapon_Wavebreakers_Fin.webp';
import white_iron_greatsword from '../assets/Weapon_White_Iron_Greatsword.webp';
import white_tassel from '../assets/Weapon_White_Tassel.webp';
import whiteblind from '../assets/Weapon_Whiteblind.webp';
import windblume_ode from '../assets/Weapon_Windblume_Ode.webp';
import wine_and_song from '../assets/Weapon_Wine_and_Song.webp';
import wolf_s_gravestone from '../assets/Weapon_Wolfs_Gravestone.webp';

const Contentsbox = (props) => {
	return (
        <>
            {props && props.data.map(datas => {

                var imgsrc = '';

                // 자바스크립트 switch문 사용 예시
                // switch(datas) {
                //     case 'albedo': 
                //         imgsrc = albedoimg; 
                //         break;
                //     case 'aloy': 
                //         imgsrc = aloyimg;
                //         break;
                //     case 'amber': 
                //         imgsrc = amberimg;
                //         break;
                // }

                // if-else if문 사용시.
                if (datas === 'albedo') 
                    imgsrc = albedoimg;
                else if (datas === 'aloy') 
                    imgsrc = aloyimg;
                else if (datas === 'amber') 
                    imgsrc = amberimg;
                else if (datas === 'arataki-itto')
                    imgsrc = aratakiittoimg;
                else if (datas === 'ayaka')
                    imgsrc = ayakaimg;
                else if (datas === 'barbara')
                    imgsrc = barbaraimg;
                else if (datas === 'beidou')
                    imgsrc = beidouimg;
                else if (datas === 'bennett')
                    imgsrc = bennettimg ;
                else if (datas === 'chongyun')
                    imgsrc = chongyunimg ;
                else if (datas === 'diluc')
                    imgsrc = dilucimg;
                else if (datas === 'diona')
                    imgsrc = dionaimg;
                else if (datas === 'eula')
                    imgsrc = eulaimg;
                else if (datas === 'fischl')
                    imgsrc = fischlimg;
                else if (datas === 'ganyu')
                    imgsrc = ganyuimg;
                else if (datas === 'gorou')
                    imgsrc = gorouimg;
                else if (datas === 'hu-tao')
                    imgsrc = hutaoimg;
                else if (datas === 'jean')
                    imgsrc = jeanimg;
                else if (datas === 'kaeya')
                    imgsrc = kaeyaimg;
                else if (datas === 'kazuha')
                    imgsrc = kazuhaimg;
                else if (datas === 'keqing')
                    imgsrc = keqingimg;
                else if (datas === 'klee')
                    imgsrc = kleeimg;
                else if (datas === 'kokomi')
                    imgsrc = kokomiimg;
                else if (datas === 'lisa')
                    imgsrc = lisaimg;
                else if (datas === 'mona')
                    imgsrc = monaimg;
                else if (datas === 'ningguang')
                    imgsrc = ningguangimg;
                else if (datas === 'noelle')
                    imgsrc = noelleimg;
                else if (datas === 'qiqi')
                    imgsrc = qiqiimg;
                else if (datas === 'raiden')
                    imgsrc = raidenimg;
                else if (datas === 'razor')
                    imgsrc = razorimg;
                else if (datas === 'rosaria')
                    imgsrc = rosariaimg;
                else if (datas === 'sara')
                    imgsrc = saraimg;
                else if (datas === 'sayu')
                    imgsrc = sayuimg;
                else if (datas === 'shenhe')
                    imgsrc = shenheimg;
                else if (datas === 'sucrose')
                    imgsrc = sucroseimg;
                else if (datas === 'tartaglia')
                    imgsrc = tartagliaimg;
                else if (datas === 'thoma')
                    imgsrc = thomaimg;
                else if (datas === 'traveler-anemo')
                    imgsrc = travelerimg;
                else if (datas === 'traveler-electro')
                    imgsrc = travelerimg;
                else if (datas === 'traveler-geo')
                    imgsrc = travelerimg;
                else if (datas === 'venti')
                    imgsrc = ventiimg;
                else if (datas === 'xiangling')
                    imgsrc = xianglingimg;
                else if (datas === 'xiao')
                    imgsrc = xiaoimg;
                else if (datas === 'xingqiu')
                    imgsrc = xingqiuimg;
                else if (datas === 'xinyan')
                    imgsrc = xinyanimg;
                else if (datas === 'yae-miko')
                    imgsrc = yaemikoimg;
                else if (datas === 'yanfei')
                    imgsrc = yanfeiimg;
                else if (datas === 'yoimiya')
                    imgsrc = yoimiyaimg;
                else if (datas === 'yun-jin')
                    imgsrc = yunjinimg;
                else if (datas === 'zhongli')
                    imgsrc = zhongliimg;

                if (datas === 'akuoumaru')
                imgsrc =akuoumaru;
                else if (datas === 'alley-hunter')
                imgsrc =alley_hunter;
                else if (datas === 'amber-catalyst')
                imgsrc =amber_catalyst;
                else if (datas === 'amenoma-kageuchi')
                imgsrc =amenoma_kageuchi;
                else if (datas === 'amos-bow')
                imgsrc =amos_bow;
                else if (datas === 'apprentice-s-notes')
                imgsrc =apprentice_s_notes;
                else if (datas === 'aquila-favonia')
                imgsrc =aquila_favonia;
                else if (datas === 'beginner-s-protector')
                imgsrc =beginner_s_protector;
                else if (datas === 'black-tassel')
                imgsrc =black_tassel;
                else if (datas === 'blackcliff-amulet')
                imgsrc =blackcliff_amulet;
                else if (datas === 'blackcliff-longsword')
                imgsrc =blackcliff_longsword;
                else if (datas === 'blackcliff-pole')
                imgsrc =blackcliff_pole;
                else if (datas === 'blackcliff-slasher')
                imgsrc = blackcliff_slasher;
                else if (datas === 'blackcliff-warbow')
                imgsrc = blackcliff_warbow;
                else if (datas === 'bloodtainted-greatsword')
                imgsrc = bloodtainted_greatsword;
                else if (datas === 'calamity-queller')
                imgsrc = calamity_queller;
                else if (datas === 'cinnabar -spindle')
                imgsrc = cinnabar_spindle;
                else if (datas === 'compound-bow')
                imgsrc = compound_bow;
                else if (datas === 'cool-steel')
                imgsrc =cool_steel;
                else if (datas === 'crescent-pike')
                imgsrc =crescent_pike;
                else if (datas === 'dark-iron-sword')
                imgsrc =dark_iron_sword;
                else if (datas === 'deathmatch')
                imgsrc =deathmatch;
                else if (datas === 'debate-club')
                imgsrc =debate_club;
                else if (datas === 'dodoco-tales')
                imgsrc =dodoco_tales;
                else if (datas === 'dragon-s-bane')
                imgsrc =dragon_s_bane;
                else if (datas === 'dragonspine-spear')
                imgsrc =dragonspine_spear;
                else if (datas === 'dull-blade')
                imgsrc =dull_blade;
                else if (datas === 'eberlasting-moonglow')
                imgsrc =eberlasting_moonglow;
                else if (datas === 'ebony-bow')
                imgsrc =ebony_bow;
                else if (datas === 'elegy-for-the-end')
                imgsrc =elegy_for_the_end;
                else if (datas === 'emerald-orb')
                imgsrc =emerald_orb;
                else if (datas === 'engulfing-lightning')
                imgsrc =engulfing_lightning;
                else if (datas === 'everlasting-moonglow')
                imgsrc =everlasting_moonglow;
                else if (datas === 'eye-of-perception')
                imgsrc =eye_of_perception;
                else if (datas === 'favonius-codex')
                imgsrc =favonius_codex;
                else if (datas === 'favonius-greatsword')
                imgsrc =favonius_greatsword;
                else if (datas === 'favonius-lance')
                imgsrc =favonius_lance;
                else if (datas === 'favonius-sword')
                imgsrc =favonius_sword;
                else if (datas === 'favonius-warbow')
                imgsrc =favonius_warbow;
                else if (datas === 'ferrous-shadow')
                imgsrc =ferrous_shadow;
                else if (datas === 'festering-desire')
                imgsrc =festering_desire;
                else if (datas === 'fillet-blade')
                imgsrc =fillet_blade;
                else if (datas === 'freedom-sworn')
                imgsrc =freedom_sworn;
                else if (datas === 'frostbearer')
                imgsrc =frostbearer;
                else if (datas === 'hakushin-ring')
                imgsrc =hakushin_ring;
                else if (datas === 'halberd')
                imgsrc =halberd;
                else if (datas === 'hamayumi')
                imgsrc =hamayumi;
                else if (datas === 'haran-geppaku-futsu')
                imgsrc =haran_geppaku_futsu;
                else if (datas === 'harbinger-of-dawn')
                imgsrc =harbinger_of_dawn;
                else if (datas === 'hunter-s-bow')
                imgsrc =hunter_s_bow;
                else if (datas === 'iron-point')
                imgsrc =iron_point;
                else if (datas === 'iron-sting')
                imgsrc =iron_sting;
                else if (datas === `kagura's-verity`)
                imgsrc = kaguras_verity;
                else if (datas === 'katsuragikiri-nagamasa')
                imgsrc =katsuragikiri_nagamasa;
                else if (datas === 'kitain-cross-spear')
                imgsrc =kitain_cross_spear;
                else if (datas === 'lion-s-roar')
                imgsrc =lion_s_roar;
                else if (datas === 'lithic-blade')
                imgsrc =lithic_blade;
                else if (datas === 'lithic-spear')
                imgsrc =lithic_spear;
                else if (datas === 'lost-prayer-to-the-sacred-winds')
                imgsrc =lost_prayer_to_the_sacred_winds;
                else if (datas === 'luxurious-sea-lord')
                imgsrc =luxurious_sea_lord;
                else if (datas === 'magic-guide')
                imgsrc =magic_guide;
                else if (datas === 'mappa-mare')
                imgsrc =mappa_mare;
                else if (datas === 'memory-of-dust')
                imgsrc =memory_of_dust;
                else if (datas === 'messenger')
                imgsrc =messenger;
                else if (datas === 'mistsplitter-reforged')
                imgsrc =mistsplitter_reforged;
                else if (datas === 'mitternachts-waltz')
                imgsrc =mitternachts_waltz;
                else if (datas === `mouun's-moon`)
                imgsrc = mouuns_moon;
                else if (datas === 'oathsworn-eye')
                imgsrc =oathsworn_eye;
                else if (datas === 'old-merc-s-pal')
                imgsrc =old_merc_s_pal;
                else if (datas === 'otherworldly-story')
                imgsrc =otherworldly_story;
                else if (datas === 'pocket-grimoire')
                imgsrc =pocket_grimoire;
                else if (datas === 'polar-star')
                imgsrc =polar_star;
                else if (datas === 'predator')
                imgsrc =predator;
                else if (datas === 'primordial-jade-cutter')
                imgsrc =primordial_jade_cutter;
                else if (datas === 'primordial-jade-winged-spear')
                imgsrc =primordial_jade_winged_spear;
                else if (datas === 'prototype-archaic')
                imgsrc =prototype_archaic;
                else if (datas === 'prototype-crescent')
                imgsrc =prototype_crescent;
                else if (datas === 'prototype-grudge')
                imgsrc =prototype_grudge;
                else if (datas === 'prototype-malice')
                imgsrc =prototype_malice;
                else if (datas === 'prototype-rancour')
                imgsrc =prototype_rancour;
                else if (datas === 'quartz')
                imgsrc =quartz;
                else if (datas === 'rainslasher')
                imgsrc =rainslasher;
                else if (datas === 'raven-bow')
                imgsrc =raven_bow;
                else if (datas === 'recurve-bow')
                imgsrc =recurve_bow;
                else if (datas === 'redhorn-stonethresher')
                imgsrc =redhorn_stonethresher;
                else if (datas === 'royal-bow')
                imgsrc =royal_bow;
                else if (datas === 'royal-greatsword')
                imgsrc =royal_greatsword;
                else if (datas === 'royal-grimoire')
                imgsrc =royal_grimoire;
                else if (datas === 'royal-longsword')
                imgsrc =royal_longsword;
                else if (datas === 'royal-spear')
                imgsrc =royal_spear;
                else if (datas === 'rust')
                imgsrc =rust;
                else if (datas === 'sacrificial-bow')
                imgsrc =sacrificial_bow;
                else if (datas === 'sacrificial-fragments')
                imgsrc =sacrificial_fragments;
                else if (datas === 'sacrificial-greatsword')
                imgsrc =sacrificial_greatsword;
                else if (datas === 'sacrificial-sword')
                imgsrc =sacrificial_sword;
                else if (datas === 'seasoned-hunter-s-bow')
                imgsrc =seasoned_hunter_s_bow;
                else if (datas === 'serpent-spine')
                imgsrc =serpent_spine;
                else if (datas === 'sharpshooter-s-oath')
                imgsrc =sharpshooter_s_oath;
                else if (datas === 'silver-sword')
                imgsrc =silver_sword;
                else if (datas === 'skyrider-greatsword')
                imgsrc =skyrider_greatsword;
                else if (datas === 'skyrider-sword')
                imgsrc =skyrider_sword;
                else if (datas === 'skyward-atlas')
                imgsrc =skyward_atlas;
                else if (datas === 'skyward-blade')
                imgsrc =skyward_blade;
                else if (datas === 'skyward-harp')
                imgsrc =skyward_harp;
                else if (datas === 'skyward-pride')
                imgsrc =skyward_pride;
                else if (datas === 'skyward-spine')
                imgsrc =skyward_spine;
                else if (datas === 'slingshot')
                imgsrc =slingshot;
                else if (datas === 'snow-tombed-starsilver')
                imgsrc =snow_tombed_starsilver;
                else if (datas === 'solar-pearl')
                imgsrc =solar_pearl;
                else if (datas === 'song-of-broken-pines')
                imgsrc =song_of_broken_pines;
                else if (datas === 'staff-of-homa')
                imgsrc =staff_of_homa;
                else if (datas === 'summit-shaper')
                imgsrc =summit_shaper;
                else if (datas === 'sword-of-descension')
                imgsrc =sword_of_descension;
                else if (datas === 'the-alley-flash')
                imgsrc =the_alley_flash;
                else if (datas === 'the-bell')
                imgsrc =the_bell;
                else if (datas === 'the-black-sword')
                imgsrc =the_black_sword;
                else if (datas === 'the-catch')
                imgsrc =the_catch;
                else if (datas === 'the-flute')
                imgsrc =the_flute;
                else if (datas === 'the-stringless')
                imgsrc =the_stringless;
                else if (datas === 'the-unforged')
                imgsrc =the_unforged;
                else if (datas === 'the-viridescent-hunt')
                imgsrc =the_viridescent_hunt;
                else if (datas === 'the-widsith')
                imgsrc =the_widsith;
                else if (datas === 'thrilling-tales-of-dragon-slayers')
                imgsrc =thrilling_tales_of_dragon_slayers;
                else if (datas === 'thundering-pulse')
                imgsrc =thundering_pulse;
                else if (datas === 'traveler-s-handy-sword')
                imgsrc =traveler_s_handy_sword;
                else if (datas === 'twin-nephrite')
                imgsrc =twin_nephrite;
                else if (datas === 'vortex-vanquisher')
                imgsrc =vortex_vanquisher;
                else if (datas === 'waster-greatsword')
                imgsrc =waster_greatsword;
                else if (datas === `wavebreaker's-fin`)
                imgsrc = wavebreakers_fin;
                else if (datas === 'white-iron-greatsword')
                imgsrc =white_iron_greatsword;
                else if (datas === 'white-tassel')
                imgsrc =white_tassel;
                else if (datas === 'whiteblind')
                imgsrc =whiteblind;
                else if (datas === 'windblume-ode')
                imgsrc =windblume_ode;
                else if (datas === 'wine-and-song')
                imgsrc =wine_and_song;
                else if (datas === 'wolf-s-gravestone')
                imgsrc =wolf_s_gravestone;

                return (
                    <div className='itemcontainer-body-outer'>
                        <Link to={`/${datas}`} state={{name: datas, imgsrc: imgsrc, url: props.url}} >
                        <div className='itemcontainer-body-content-list' key={datas}>
                            <div className='itemcontainer-body-content-list-photo'>
                                <img src={imgsrc} className='itemcontainer-body-content-list-img' alt='이미지 파일 오류!'/>
                            </div>
                            <div className='itemcontainer-body-content-list-text'>
                                <div className='itemcontainer-body-content-list-name'>
                                    {datas}
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </>
	);
}

export default Contentsbox;