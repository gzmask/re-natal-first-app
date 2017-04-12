// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49634){
var map__49659 = p__49634;
var map__49659__$1 = ((((!((map__49659 == null)))?((((map__49659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49659):map__49659);
var m = map__49659__$1;
var n = cljs.core.get.call(null,map__49659__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49661_49683 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49662_49684 = null;
var count__49663_49685 = (0);
var i__49664_49686 = (0);
while(true){
if((i__49664_49686 < count__49663_49685)){
var f_49687 = cljs.core._nth.call(null,chunk__49662_49684,i__49664_49686);
cljs.core.println.call(null,"  ",f_49687);

var G__49688 = seq__49661_49683;
var G__49689 = chunk__49662_49684;
var G__49690 = count__49663_49685;
var G__49691 = (i__49664_49686 + (1));
seq__49661_49683 = G__49688;
chunk__49662_49684 = G__49689;
count__49663_49685 = G__49690;
i__49664_49686 = G__49691;
continue;
} else {
var temp__6503__auto___49692 = cljs.core.seq.call(null,seq__49661_49683);
if(temp__6503__auto___49692){
var seq__49661_49693__$1 = temp__6503__auto___49692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49661_49693__$1)){
var c__48176__auto___49694 = cljs.core.chunk_first.call(null,seq__49661_49693__$1);
var G__49695 = cljs.core.chunk_rest.call(null,seq__49661_49693__$1);
var G__49696 = c__48176__auto___49694;
var G__49697 = cljs.core.count.call(null,c__48176__auto___49694);
var G__49698 = (0);
seq__49661_49683 = G__49695;
chunk__49662_49684 = G__49696;
count__49663_49685 = G__49697;
i__49664_49686 = G__49698;
continue;
} else {
var f_49699 = cljs.core.first.call(null,seq__49661_49693__$1);
cljs.core.println.call(null,"  ",f_49699);

var G__49700 = cljs.core.next.call(null,seq__49661_49693__$1);
var G__49701 = null;
var G__49702 = (0);
var G__49703 = (0);
seq__49661_49683 = G__49700;
chunk__49662_49684 = G__49701;
count__49663_49685 = G__49702;
i__49664_49686 = G__49703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49704 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__47273__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__47273__auto__)){
return or__47273__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49704);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49704)))?cljs.core.second.call(null,arglists_49704):arglists_49704));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49665_49705 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49666_49706 = null;
var count__49667_49707 = (0);
var i__49668_49708 = (0);
while(true){
if((i__49668_49708 < count__49667_49707)){
var vec__49669_49709 = cljs.core._nth.call(null,chunk__49666_49706,i__49668_49708);
var name_49710 = cljs.core.nth.call(null,vec__49669_49709,(0),null);
var map__49672_49711 = cljs.core.nth.call(null,vec__49669_49709,(1),null);
var map__49672_49712__$1 = ((((!((map__49672_49711 == null)))?((((map__49672_49711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49672_49711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49672_49711):map__49672_49711);
var doc_49713 = cljs.core.get.call(null,map__49672_49712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49714 = cljs.core.get.call(null,map__49672_49712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49710);

cljs.core.println.call(null," ",arglists_49714);

if(cljs.core.truth_(doc_49713)){
cljs.core.println.call(null," ",doc_49713);
} else {
}

var G__49715 = seq__49665_49705;
var G__49716 = chunk__49666_49706;
var G__49717 = count__49667_49707;
var G__49718 = (i__49668_49708 + (1));
seq__49665_49705 = G__49715;
chunk__49666_49706 = G__49716;
count__49667_49707 = G__49717;
i__49668_49708 = G__49718;
continue;
} else {
var temp__6503__auto___49719 = cljs.core.seq.call(null,seq__49665_49705);
if(temp__6503__auto___49719){
var seq__49665_49720__$1 = temp__6503__auto___49719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49665_49720__$1)){
var c__48176__auto___49721 = cljs.core.chunk_first.call(null,seq__49665_49720__$1);
var G__49722 = cljs.core.chunk_rest.call(null,seq__49665_49720__$1);
var G__49723 = c__48176__auto___49721;
var G__49724 = cljs.core.count.call(null,c__48176__auto___49721);
var G__49725 = (0);
seq__49665_49705 = G__49722;
chunk__49666_49706 = G__49723;
count__49667_49707 = G__49724;
i__49668_49708 = G__49725;
continue;
} else {
var vec__49674_49726 = cljs.core.first.call(null,seq__49665_49720__$1);
var name_49727 = cljs.core.nth.call(null,vec__49674_49726,(0),null);
var map__49677_49728 = cljs.core.nth.call(null,vec__49674_49726,(1),null);
var map__49677_49729__$1 = ((((!((map__49677_49728 == null)))?((((map__49677_49728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49677_49728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49677_49728):map__49677_49728);
var doc_49730 = cljs.core.get.call(null,map__49677_49729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49731 = cljs.core.get.call(null,map__49677_49729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49727);

cljs.core.println.call(null," ",arglists_49731);

if(cljs.core.truth_(doc_49730)){
cljs.core.println.call(null," ",doc_49730);
} else {
}

var G__49732 = cljs.core.next.call(null,seq__49665_49720__$1);
var G__49733 = null;
var G__49734 = (0);
var G__49735 = (0);
seq__49665_49705 = G__49732;
chunk__49666_49706 = G__49733;
count__49667_49707 = G__49734;
i__49668_49708 = G__49735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__49679 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49680 = null;
var count__49681 = (0);
var i__49682 = (0);
while(true){
if((i__49682 < count__49681)){
var role = cljs.core._nth.call(null,chunk__49680,i__49682);
var temp__6503__auto___49736__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___49736__$1)){
var spec_49737 = temp__6503__auto___49736__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49737));
} else {
}

var G__49738 = seq__49679;
var G__49739 = chunk__49680;
var G__49740 = count__49681;
var G__49741 = (i__49682 + (1));
seq__49679 = G__49738;
chunk__49680 = G__49739;
count__49681 = G__49740;
i__49682 = G__49741;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__49679);
if(temp__6503__auto____$1){
var seq__49679__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49679__$1)){
var c__48176__auto__ = cljs.core.chunk_first.call(null,seq__49679__$1);
var G__49742 = cljs.core.chunk_rest.call(null,seq__49679__$1);
var G__49743 = c__48176__auto__;
var G__49744 = cljs.core.count.call(null,c__48176__auto__);
var G__49745 = (0);
seq__49679 = G__49742;
chunk__49680 = G__49743;
count__49681 = G__49744;
i__49682 = G__49745;
continue;
} else {
var role = cljs.core.first.call(null,seq__49679__$1);
var temp__6503__auto___49746__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___49746__$2)){
var spec_49747 = temp__6503__auto___49746__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49747));
} else {
}

var G__49748 = cljs.core.next.call(null,seq__49679__$1);
var G__49749 = null;
var G__49750 = (0);
var G__49751 = (0);
seq__49679 = G__49748;
chunk__49680 = G__49749;
count__49681 = G__49750;
i__49682 = G__49751;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map