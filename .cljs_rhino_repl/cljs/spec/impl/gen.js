// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__47925__auto__,writer__47926__auto__,opt__47927__auto__){
return cljs.core._write.call(null,writer__47926__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50614 = arguments.length;
var i__48457__auto___50615 = (0);
while(true){
if((i__48457__auto___50615 < len__48456__auto___50614)){
args__48463__auto__.push((arguments[i__48457__auto___50615]));

var G__50616 = (i__48457__auto___50615 + (1));
i__48457__auto___50615 = G__50616;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50613){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50613));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50618 = arguments.length;
var i__48457__auto___50619 = (0);
while(true){
if((i__48457__auto___50619 < len__48456__auto___50618)){
args__48463__auto__.push((arguments[i__48457__auto___50619]));

var G__50620 = (i__48457__auto___50619 + (1));
i__48457__auto___50619 = G__50620;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50617){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50617));
});

var g_QMARK__50621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50622 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50621){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50621))
,null));
var mkg_50623 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50621,g_50622){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50621,g_50622))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50621,g_50622,mkg_50623){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50621).call(null,x);
});})(g_QMARK__50621,g_50622,mkg_50623))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50621,g_50622,mkg_50623){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50623).call(null,gfn);
});})(g_QMARK__50621,g_50622,mkg_50623))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50621,g_50622,mkg_50623){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50622).call(null,generator);
});})(g_QMARK__50621,g_50622,mkg_50623))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__48540__auto___50641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__48540__auto___50641){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50642 = arguments.length;
var i__48457__auto___50643 = (0);
while(true){
if((i__48457__auto___50643 < len__48456__auto___50642)){
args__48463__auto__.push((arguments[i__48457__auto___50643]));

var G__50644 = (i__48457__auto___50643 + (1));
i__48457__auto___50643 = G__50644;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50641))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50641),args);
});})(g__48540__auto___50641))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__48540__auto___50641){
return (function (seq50624){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50624));
});})(g__48540__auto___50641))
;


var g__48540__auto___50645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__48540__auto___50645){
return (function cljs$spec$impl$gen$list(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50646 = arguments.length;
var i__48457__auto___50647 = (0);
while(true){
if((i__48457__auto___50647 < len__48456__auto___50646)){
args__48463__auto__.push((arguments[i__48457__auto___50647]));

var G__50648 = (i__48457__auto___50647 + (1));
i__48457__auto___50647 = G__50648;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50645))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50645),args);
});})(g__48540__auto___50645))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__48540__auto___50645){
return (function (seq50625){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50625));
});})(g__48540__auto___50645))
;


var g__48540__auto___50649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__48540__auto___50649){
return (function cljs$spec$impl$gen$map(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50650 = arguments.length;
var i__48457__auto___50651 = (0);
while(true){
if((i__48457__auto___50651 < len__48456__auto___50650)){
args__48463__auto__.push((arguments[i__48457__auto___50651]));

var G__50652 = (i__48457__auto___50651 + (1));
i__48457__auto___50651 = G__50652;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50649))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50649),args);
});})(g__48540__auto___50649))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__48540__auto___50649){
return (function (seq50626){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50626));
});})(g__48540__auto___50649))
;


var g__48540__auto___50653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__48540__auto___50653){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50654 = arguments.length;
var i__48457__auto___50655 = (0);
while(true){
if((i__48457__auto___50655 < len__48456__auto___50654)){
args__48463__auto__.push((arguments[i__48457__auto___50655]));

var G__50656 = (i__48457__auto___50655 + (1));
i__48457__auto___50655 = G__50656;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50653))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50653),args);
});})(g__48540__auto___50653))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__48540__auto___50653){
return (function (seq50627){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50627));
});})(g__48540__auto___50653))
;


var g__48540__auto___50657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__48540__auto___50657){
return (function cljs$spec$impl$gen$set(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50658 = arguments.length;
var i__48457__auto___50659 = (0);
while(true){
if((i__48457__auto___50659 < len__48456__auto___50658)){
args__48463__auto__.push((arguments[i__48457__auto___50659]));

var G__50660 = (i__48457__auto___50659 + (1));
i__48457__auto___50659 = G__50660;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50657))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50657),args);
});})(g__48540__auto___50657))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__48540__auto___50657){
return (function (seq50628){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50628));
});})(g__48540__auto___50657))
;


var g__48540__auto___50661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__48540__auto___50661){
return (function cljs$spec$impl$gen$vector(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50662 = arguments.length;
var i__48457__auto___50663 = (0);
while(true){
if((i__48457__auto___50663 < len__48456__auto___50662)){
args__48463__auto__.push((arguments[i__48457__auto___50663]));

var G__50664 = (i__48457__auto___50663 + (1));
i__48457__auto___50663 = G__50664;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50661))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50661),args);
});})(g__48540__auto___50661))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__48540__auto___50661){
return (function (seq50629){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50629));
});})(g__48540__auto___50661))
;


var g__48540__auto___50665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__48540__auto___50665){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50666 = arguments.length;
var i__48457__auto___50667 = (0);
while(true){
if((i__48457__auto___50667 < len__48456__auto___50666)){
args__48463__auto__.push((arguments[i__48457__auto___50667]));

var G__50668 = (i__48457__auto___50667 + (1));
i__48457__auto___50667 = G__50668;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50665))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50665),args);
});})(g__48540__auto___50665))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__48540__auto___50665){
return (function (seq50630){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50630));
});})(g__48540__auto___50665))
;


var g__48540__auto___50669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__48540__auto___50669){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50670 = arguments.length;
var i__48457__auto___50671 = (0);
while(true){
if((i__48457__auto___50671 < len__48456__auto___50670)){
args__48463__auto__.push((arguments[i__48457__auto___50671]));

var G__50672 = (i__48457__auto___50671 + (1));
i__48457__auto___50671 = G__50672;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50669))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50669),args);
});})(g__48540__auto___50669))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__48540__auto___50669){
return (function (seq50631){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50631));
});})(g__48540__auto___50669))
;


var g__48540__auto___50673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__48540__auto___50673){
return (function cljs$spec$impl$gen$elements(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50674 = arguments.length;
var i__48457__auto___50675 = (0);
while(true){
if((i__48457__auto___50675 < len__48456__auto___50674)){
args__48463__auto__.push((arguments[i__48457__auto___50675]));

var G__50676 = (i__48457__auto___50675 + (1));
i__48457__auto___50675 = G__50676;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50673))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50673),args);
});})(g__48540__auto___50673))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__48540__auto___50673){
return (function (seq50632){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50632));
});})(g__48540__auto___50673))
;


var g__48540__auto___50677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__48540__auto___50677){
return (function cljs$spec$impl$gen$bind(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50678 = arguments.length;
var i__48457__auto___50679 = (0);
while(true){
if((i__48457__auto___50679 < len__48456__auto___50678)){
args__48463__auto__.push((arguments[i__48457__auto___50679]));

var G__50680 = (i__48457__auto___50679 + (1));
i__48457__auto___50679 = G__50680;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50677))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50677),args);
});})(g__48540__auto___50677))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__48540__auto___50677){
return (function (seq50633){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50633));
});})(g__48540__auto___50677))
;


var g__48540__auto___50681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__48540__auto___50681){
return (function cljs$spec$impl$gen$choose(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50682 = arguments.length;
var i__48457__auto___50683 = (0);
while(true){
if((i__48457__auto___50683 < len__48456__auto___50682)){
args__48463__auto__.push((arguments[i__48457__auto___50683]));

var G__50684 = (i__48457__auto___50683 + (1));
i__48457__auto___50683 = G__50684;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50681))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50681),args);
});})(g__48540__auto___50681))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__48540__auto___50681){
return (function (seq50634){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50634));
});})(g__48540__auto___50681))
;


var g__48540__auto___50685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__48540__auto___50685){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50686 = arguments.length;
var i__48457__auto___50687 = (0);
while(true){
if((i__48457__auto___50687 < len__48456__auto___50686)){
args__48463__auto__.push((arguments[i__48457__auto___50687]));

var G__50688 = (i__48457__auto___50687 + (1));
i__48457__auto___50687 = G__50688;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50685))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50685),args);
});})(g__48540__auto___50685))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__48540__auto___50685){
return (function (seq50635){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50635));
});})(g__48540__auto___50685))
;


var g__48540__auto___50689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__48540__auto___50689){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50690 = arguments.length;
var i__48457__auto___50691 = (0);
while(true){
if((i__48457__auto___50691 < len__48456__auto___50690)){
args__48463__auto__.push((arguments[i__48457__auto___50691]));

var G__50692 = (i__48457__auto___50691 + (1));
i__48457__auto___50691 = G__50692;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50689))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50689),args);
});})(g__48540__auto___50689))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__48540__auto___50689){
return (function (seq50636){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50636));
});})(g__48540__auto___50689))
;


var g__48540__auto___50693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__48540__auto___50693){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50694 = arguments.length;
var i__48457__auto___50695 = (0);
while(true){
if((i__48457__auto___50695 < len__48456__auto___50694)){
args__48463__auto__.push((arguments[i__48457__auto___50695]));

var G__50696 = (i__48457__auto___50695 + (1));
i__48457__auto___50695 = G__50696;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50693))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50693),args);
});})(g__48540__auto___50693))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__48540__auto___50693){
return (function (seq50637){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50637));
});})(g__48540__auto___50693))
;


var g__48540__auto___50697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__48540__auto___50697){
return (function cljs$spec$impl$gen$sample(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50698 = arguments.length;
var i__48457__auto___50699 = (0);
while(true){
if((i__48457__auto___50699 < len__48456__auto___50698)){
args__48463__auto__.push((arguments[i__48457__auto___50699]));

var G__50700 = (i__48457__auto___50699 + (1));
i__48457__auto___50699 = G__50700;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50697))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50697),args);
});})(g__48540__auto___50697))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__48540__auto___50697){
return (function (seq50638){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50638));
});})(g__48540__auto___50697))
;


var g__48540__auto___50701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__48540__auto___50701){
return (function cljs$spec$impl$gen$return(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50702 = arguments.length;
var i__48457__auto___50703 = (0);
while(true){
if((i__48457__auto___50703 < len__48456__auto___50702)){
args__48463__auto__.push((arguments[i__48457__auto___50703]));

var G__50704 = (i__48457__auto___50703 + (1));
i__48457__auto___50703 = G__50704;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50701))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50701),args);
});})(g__48540__auto___50701))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__48540__auto___50701){
return (function (seq50639){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50639));
});})(g__48540__auto___50701))
;


var g__48540__auto___50705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__48540__auto___50705){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50706 = arguments.length;
var i__48457__auto___50707 = (0);
while(true){
if((i__48457__auto___50707 < len__48456__auto___50706)){
args__48463__auto__.push((arguments[i__48457__auto___50707]));

var G__50708 = (i__48457__auto___50707 + (1));
i__48457__auto___50707 = G__50708;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48540__auto___50705))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48540__auto___50705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48540__auto___50705),args);
});})(g__48540__auto___50705))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__48540__auto___50705){
return (function (seq50640){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50640));
});})(g__48540__auto___50705))
;

var g__48553__auto___50730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__48553__auto___50730){
return (function cljs$spec$impl$gen$any(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50731 = arguments.length;
var i__48457__auto___50732 = (0);
while(true){
if((i__48457__auto___50732 < len__48456__auto___50731)){
args__48463__auto__.push((arguments[i__48457__auto___50732]));

var G__50733 = (i__48457__auto___50732 + (1));
i__48457__auto___50732 = G__50733;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50730))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50730){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50730);
});})(g__48553__auto___50730))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__48553__auto___50730){
return (function (seq50709){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50709));
});})(g__48553__auto___50730))
;


var g__48553__auto___50734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__48553__auto___50734){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50735 = arguments.length;
var i__48457__auto___50736 = (0);
while(true){
if((i__48457__auto___50736 < len__48456__auto___50735)){
args__48463__auto__.push((arguments[i__48457__auto___50736]));

var G__50737 = (i__48457__auto___50736 + (1));
i__48457__auto___50736 = G__50737;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50734))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50734){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50734);
});})(g__48553__auto___50734))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__48553__auto___50734){
return (function (seq50710){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50710));
});})(g__48553__auto___50734))
;


var g__48553__auto___50738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__48553__auto___50738){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50739 = arguments.length;
var i__48457__auto___50740 = (0);
while(true){
if((i__48457__auto___50740 < len__48456__auto___50739)){
args__48463__auto__.push((arguments[i__48457__auto___50740]));

var G__50741 = (i__48457__auto___50740 + (1));
i__48457__auto___50740 = G__50741;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50738))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50738){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50738);
});})(g__48553__auto___50738))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__48553__auto___50738){
return (function (seq50711){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50711));
});})(g__48553__auto___50738))
;


var g__48553__auto___50742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__48553__auto___50742){
return (function cljs$spec$impl$gen$char(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50743 = arguments.length;
var i__48457__auto___50744 = (0);
while(true){
if((i__48457__auto___50744 < len__48456__auto___50743)){
args__48463__auto__.push((arguments[i__48457__auto___50744]));

var G__50745 = (i__48457__auto___50744 + (1));
i__48457__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50742))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50742){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50742);
});})(g__48553__auto___50742))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__48553__auto___50742){
return (function (seq50712){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50712));
});})(g__48553__auto___50742))
;


var g__48553__auto___50746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__48553__auto___50746){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50747 = arguments.length;
var i__48457__auto___50748 = (0);
while(true){
if((i__48457__auto___50748 < len__48456__auto___50747)){
args__48463__auto__.push((arguments[i__48457__auto___50748]));

var G__50749 = (i__48457__auto___50748 + (1));
i__48457__auto___50748 = G__50749;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50746))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50746){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50746);
});})(g__48553__auto___50746))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__48553__auto___50746){
return (function (seq50713){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50713));
});})(g__48553__auto___50746))
;


var g__48553__auto___50750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__48553__auto___50750){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50751 = arguments.length;
var i__48457__auto___50752 = (0);
while(true){
if((i__48457__auto___50752 < len__48456__auto___50751)){
args__48463__auto__.push((arguments[i__48457__auto___50752]));

var G__50753 = (i__48457__auto___50752 + (1));
i__48457__auto___50752 = G__50753;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50750))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50750){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50750);
});})(g__48553__auto___50750))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__48553__auto___50750){
return (function (seq50714){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50714));
});})(g__48553__auto___50750))
;


var g__48553__auto___50754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__48553__auto___50754){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50755 = arguments.length;
var i__48457__auto___50756 = (0);
while(true){
if((i__48457__auto___50756 < len__48456__auto___50755)){
args__48463__auto__.push((arguments[i__48457__auto___50756]));

var G__50757 = (i__48457__auto___50756 + (1));
i__48457__auto___50756 = G__50757;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50754))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50754){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50754);
});})(g__48553__auto___50754))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__48553__auto___50754){
return (function (seq50715){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50715));
});})(g__48553__auto___50754))
;


var g__48553__auto___50758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__48553__auto___50758){
return (function cljs$spec$impl$gen$double(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50759 = arguments.length;
var i__48457__auto___50760 = (0);
while(true){
if((i__48457__auto___50760 < len__48456__auto___50759)){
args__48463__auto__.push((arguments[i__48457__auto___50760]));

var G__50761 = (i__48457__auto___50760 + (1));
i__48457__auto___50760 = G__50761;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50758))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50758){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50758);
});})(g__48553__auto___50758))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__48553__auto___50758){
return (function (seq50716){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50716));
});})(g__48553__auto___50758))
;


var g__48553__auto___50762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__48553__auto___50762){
return (function cljs$spec$impl$gen$int(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50763 = arguments.length;
var i__48457__auto___50764 = (0);
while(true){
if((i__48457__auto___50764 < len__48456__auto___50763)){
args__48463__auto__.push((arguments[i__48457__auto___50764]));

var G__50765 = (i__48457__auto___50764 + (1));
i__48457__auto___50764 = G__50765;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50762))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50762){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50762);
});})(g__48553__auto___50762))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__48553__auto___50762){
return (function (seq50717){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50717));
});})(g__48553__auto___50762))
;


var g__48553__auto___50766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__48553__auto___50766){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50767 = arguments.length;
var i__48457__auto___50768 = (0);
while(true){
if((i__48457__auto___50768 < len__48456__auto___50767)){
args__48463__auto__.push((arguments[i__48457__auto___50768]));

var G__50769 = (i__48457__auto___50768 + (1));
i__48457__auto___50768 = G__50769;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50766))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50766){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50766);
});})(g__48553__auto___50766))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__48553__auto___50766){
return (function (seq50718){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50718));
});})(g__48553__auto___50766))
;


var g__48553__auto___50770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__48553__auto___50770){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50771 = arguments.length;
var i__48457__auto___50772 = (0);
while(true){
if((i__48457__auto___50772 < len__48456__auto___50771)){
args__48463__auto__.push((arguments[i__48457__auto___50772]));

var G__50773 = (i__48457__auto___50772 + (1));
i__48457__auto___50772 = G__50773;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50770))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50770){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50770);
});})(g__48553__auto___50770))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__48553__auto___50770){
return (function (seq50719){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50719));
});})(g__48553__auto___50770))
;


var g__48553__auto___50774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__48553__auto___50774){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50775 = arguments.length;
var i__48457__auto___50776 = (0);
while(true){
if((i__48457__auto___50776 < len__48456__auto___50775)){
args__48463__auto__.push((arguments[i__48457__auto___50776]));

var G__50777 = (i__48457__auto___50776 + (1));
i__48457__auto___50776 = G__50777;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50774))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50774){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50774);
});})(g__48553__auto___50774))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__48553__auto___50774){
return (function (seq50720){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50720));
});})(g__48553__auto___50774))
;


var g__48553__auto___50778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__48553__auto___50778){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50779 = arguments.length;
var i__48457__auto___50780 = (0);
while(true){
if((i__48457__auto___50780 < len__48456__auto___50779)){
args__48463__auto__.push((arguments[i__48457__auto___50780]));

var G__50781 = (i__48457__auto___50780 + (1));
i__48457__auto___50780 = G__50781;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50778))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50778){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50778);
});})(g__48553__auto___50778))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__48553__auto___50778){
return (function (seq50721){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50721));
});})(g__48553__auto___50778))
;


var g__48553__auto___50782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__48553__auto___50782){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50783 = arguments.length;
var i__48457__auto___50784 = (0);
while(true){
if((i__48457__auto___50784 < len__48456__auto___50783)){
args__48463__auto__.push((arguments[i__48457__auto___50784]));

var G__50785 = (i__48457__auto___50784 + (1));
i__48457__auto___50784 = G__50785;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50782))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50782){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50782);
});})(g__48553__auto___50782))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__48553__auto___50782){
return (function (seq50722){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50722));
});})(g__48553__auto___50782))
;


var g__48553__auto___50786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__48553__auto___50786){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50787 = arguments.length;
var i__48457__auto___50788 = (0);
while(true){
if((i__48457__auto___50788 < len__48456__auto___50787)){
args__48463__auto__.push((arguments[i__48457__auto___50788]));

var G__50789 = (i__48457__auto___50788 + (1));
i__48457__auto___50788 = G__50789;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50786))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50786){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50786);
});})(g__48553__auto___50786))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__48553__auto___50786){
return (function (seq50723){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50723));
});})(g__48553__auto___50786))
;


var g__48553__auto___50790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__48553__auto___50790){
return (function cljs$spec$impl$gen$string(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50791 = arguments.length;
var i__48457__auto___50792 = (0);
while(true){
if((i__48457__auto___50792 < len__48456__auto___50791)){
args__48463__auto__.push((arguments[i__48457__auto___50792]));

var G__50793 = (i__48457__auto___50792 + (1));
i__48457__auto___50792 = G__50793;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50790))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50790){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50790);
});})(g__48553__auto___50790))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__48553__auto___50790){
return (function (seq50724){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50724));
});})(g__48553__auto___50790))
;


var g__48553__auto___50794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__48553__auto___50794){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50795 = arguments.length;
var i__48457__auto___50796 = (0);
while(true){
if((i__48457__auto___50796 < len__48456__auto___50795)){
args__48463__auto__.push((arguments[i__48457__auto___50796]));

var G__50797 = (i__48457__auto___50796 + (1));
i__48457__auto___50796 = G__50797;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50794))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50794){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50794);
});})(g__48553__auto___50794))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__48553__auto___50794){
return (function (seq50725){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50725));
});})(g__48553__auto___50794))
;


var g__48553__auto___50798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__48553__auto___50798){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50799 = arguments.length;
var i__48457__auto___50800 = (0);
while(true){
if((i__48457__auto___50800 < len__48456__auto___50799)){
args__48463__auto__.push((arguments[i__48457__auto___50800]));

var G__50801 = (i__48457__auto___50800 + (1));
i__48457__auto___50800 = G__50801;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50798))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50798){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50798);
});})(g__48553__auto___50798))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__48553__auto___50798){
return (function (seq50726){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50726));
});})(g__48553__auto___50798))
;


var g__48553__auto___50802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__48553__auto___50802){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50803 = arguments.length;
var i__48457__auto___50804 = (0);
while(true){
if((i__48457__auto___50804 < len__48456__auto___50803)){
args__48463__auto__.push((arguments[i__48457__auto___50804]));

var G__50805 = (i__48457__auto___50804 + (1));
i__48457__auto___50804 = G__50805;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50802))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50802){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50802);
});})(g__48553__auto___50802))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__48553__auto___50802){
return (function (seq50727){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50727));
});})(g__48553__auto___50802))
;


var g__48553__auto___50806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__48553__auto___50806){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50807 = arguments.length;
var i__48457__auto___50808 = (0);
while(true){
if((i__48457__auto___50808 < len__48456__auto___50807)){
args__48463__auto__.push((arguments[i__48457__auto___50808]));

var G__50809 = (i__48457__auto___50808 + (1));
i__48457__auto___50808 = G__50809;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50806))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50806){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50806);
});})(g__48553__auto___50806))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__48553__auto___50806){
return (function (seq50728){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50728));
});})(g__48553__auto___50806))
;


var g__48553__auto___50810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__48553__auto___50810){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50811 = arguments.length;
var i__48457__auto___50812 = (0);
while(true){
if((i__48457__auto___50812 < len__48456__auto___50811)){
args__48463__auto__.push((arguments[i__48457__auto___50812]));

var G__50813 = (i__48457__auto___50812 + (1));
i__48457__auto___50812 = G__50813;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});})(g__48553__auto___50810))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48553__auto___50810){
return (function (args){
return cljs.core.deref.call(null,g__48553__auto___50810);
});})(g__48553__auto___50810))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__48553__auto___50810){
return (function (seq50729){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50729));
});})(g__48553__auto___50810))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__48463__auto__ = [];
var len__48456__auto___50816 = arguments.length;
var i__48457__auto___50817 = (0);
while(true){
if((i__48457__auto___50817 < len__48456__auto___50816)){
args__48463__auto__.push((arguments[i__48457__auto___50817]));

var G__50818 = (i__48457__auto___50817 + (1));
i__48457__auto___50817 = G__50818;
continue;
} else {
}
break;
}

var argseq__48464__auto__ = ((((0) < args__48463__auto__.length))?(new cljs.core.IndexedSeq(args__48463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__48464__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50814_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50814_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50815){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50815));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50819_SHARP_){
return (new Date(p1__50819_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map