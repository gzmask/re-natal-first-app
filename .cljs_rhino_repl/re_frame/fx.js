// Compiled by ClojureScript 1.9.198 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__49654){
var vec__49655 = p__49654;
var k = cljs.core.nth.call(null,vec__49655,(0),null);
var value = cljs.core.nth.call(null,vec__49655,(1),null);
var temp__6501__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__6501__auto__)){
var effect_fn = temp__6501__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49658 = cljs.core.seq.call(null,value);
var chunk__49659 = null;
var count__49660 = (0);
var i__49661 = (0);
while(true){
if((i__49661 < count__49660)){
var map__49662 = cljs.core._nth.call(null,chunk__49659,i__49661);
var map__49662__$1 = ((((!((map__49662 == null)))?((((map__49662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49662):map__49662);
var effect = map__49662__$1;
var ms = cljs.core.get.call(null,map__49662__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49662__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49658,chunk__49659,count__49660,i__49661,map__49662,map__49662__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49658,chunk__49659,count__49660,i__49661,map__49662,map__49662__$1,effect,ms,dispatch))
,ms);
}

var G__49666 = seq__49658;
var G__49667 = chunk__49659;
var G__49668 = count__49660;
var G__49669 = (i__49661 + (1));
seq__49658 = G__49666;
chunk__49659 = G__49667;
count__49660 = G__49668;
i__49661 = G__49669;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__49658);
if(temp__6503__auto__){
var seq__49658__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49658__$1)){
var c__48176__auto__ = cljs.core.chunk_first.call(null,seq__49658__$1);
var G__49670 = cljs.core.chunk_rest.call(null,seq__49658__$1);
var G__49671 = c__48176__auto__;
var G__49672 = cljs.core.count.call(null,c__48176__auto__);
var G__49673 = (0);
seq__49658 = G__49670;
chunk__49659 = G__49671;
count__49660 = G__49672;
i__49661 = G__49673;
continue;
} else {
var map__49664 = cljs.core.first.call(null,seq__49658__$1);
var map__49664__$1 = ((((!((map__49664 == null)))?((((map__49664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49664):map__49664);
var effect = map__49664__$1;
var ms = cljs.core.get.call(null,map__49664__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49664__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49658,chunk__49659,count__49660,i__49661,map__49664,map__49664__$1,effect,ms,dispatch,seq__49658__$1,temp__6503__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49658,chunk__49659,count__49660,i__49661,map__49664,map__49664__$1,effect,ms,dispatch,seq__49658__$1,temp__6503__auto__))
,ms);
}

var G__49674 = cljs.core.next.call(null,seq__49658__$1);
var G__49675 = null;
var G__49676 = (0);
var G__49677 = (0);
seq__49658 = G__49674;
chunk__49659 = G__49675;
count__49660 = G__49676;
i__49661 = G__49677;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__49678 = cljs.core.seq.call(null,value);
var chunk__49679 = null;
var count__49680 = (0);
var i__49681 = (0);
while(true){
if((i__49681 < count__49680)){
var event = cljs.core._nth.call(null,chunk__49679,i__49681);
re_frame.router.dispatch.call(null,event);

var G__49682 = seq__49678;
var G__49683 = chunk__49679;
var G__49684 = count__49680;
var G__49685 = (i__49681 + (1));
seq__49678 = G__49682;
chunk__49679 = G__49683;
count__49680 = G__49684;
i__49681 = G__49685;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__49678);
if(temp__6503__auto__){
var seq__49678__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49678__$1)){
var c__48176__auto__ = cljs.core.chunk_first.call(null,seq__49678__$1);
var G__49686 = cljs.core.chunk_rest.call(null,seq__49678__$1);
var G__49687 = c__48176__auto__;
var G__49688 = cljs.core.count.call(null,c__48176__auto__);
var G__49689 = (0);
seq__49678 = G__49686;
chunk__49679 = G__49687;
count__49680 = G__49688;
i__49681 = G__49689;
continue;
} else {
var event = cljs.core.first.call(null,seq__49678__$1);
re_frame.router.dispatch.call(null,event);

var G__49690 = cljs.core.next.call(null,seq__49678__$1);
var G__49691 = null;
var G__49692 = (0);
var G__49693 = (0);
seq__49678 = G__49690;
chunk__49679 = G__49691;
count__49680 = G__49692;
i__49681 = G__49693;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map