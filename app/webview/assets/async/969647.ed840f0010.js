export const __rspack_esm_ids=[969647];export const __webpack_modules__={Ipng(e,t,r){let n,i;r.d(t,{N:()=>N});var a=r("unhp"),o=r("zd8w"),s=r("PVZC"),l=r("hPwS");let d=new s.NRn,c=new s.Pq0;class u extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(r,3,0)),this.setAttribute("instanceEnd",new s.eHs(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new s.LuO(r,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(n,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)c.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(c)),c.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var p=r("STXV");let f=parseInt("179".replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${f>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=f>=125?"uv1":"uv2",v=new s.IUQ,x=new s.Pq0,g=new s.Pq0,b=new s.IUQ,y=new s.IUQ,w=new s.IUQ,S=new s.Pq0,E=new s.kn4,A=new s.cZY,j=new s.Pq0,k=new s.NRn,L=new s.iyt,M=new s.IUQ;function P(e,t,r){return M.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),M.multiplyScalar(1/M.w),M.x=i/r.width,M.y=i/r.height,M.applyMatrix4(e.projectionMatrixInverse),M.multiplyScalar(1/M.w),Math.abs(Math.max(M.x,M.y))}class _ extends s.eaF{constructor(e=new u,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)x.fromBufferAttribute(t,e),g.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+x.distanceTo(g);let i=new s.LuO(n,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let r,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let c=this.matrixWorld,u=this.geometry,p=this.material;if(i=p.linewidth+d,null===u.boundingSphere&&u.computeBoundingSphere(),L.copy(u.boundingSphere).applyMatrix4(c),o)r=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(n.origin));r=P(l,e,p.resolution)}if(L.radius+=r,!1!==n.intersectsSphere(L)){if(null===u.boundingBox&&u.computeBoundingBox(),k.copy(u.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,k.distanceToPoint(n.origin));a=P(l,e,p.resolution)}k.expandByScalar(a),!1!==n.intersectsBox(k)&&(o?function(e,t){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let a=0;a<d;a++){A.start.fromBufferAttribute(o,a),A.end.fromBufferAttribute(l,a),A.applyMatrix4(r);let d=new s.Pq0,c=new s.Pq0;n.distanceSqToSegment(A.start,A.end,c,d),c.distanceTo(d)<.5*i&&t.push({point:c,pointOnLine:d,distance:n.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,r){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,c=d.attributes.instanceStart,u=d.attributes.instanceEnd,p=Math.min(d.instanceCount,c.count),f=-t.near;n.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,S.copy(w),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<p;t++){if(b.fromBufferAttribute(c,t),y.fromBufferAttribute(u,t),b.w=1,y.w=1,b.applyMatrix4(E),y.applyMatrix4(E),b.z>f&&y.z>f)continue;if(b.z>f){let e=b.z-y.z,t=(b.z-f)/e;b.lerp(y,t)}else if(y.z>f){let e=y.z-b.z,t=(y.z-f)/e;y.lerp(b,t)}b.applyMatrix4(a),y.applyMatrix4(a),b.multiplyScalar(1/b.w),y.multiplyScalar(1/y.w),b.x*=o.x/2,b.y*=o.y/2,y.x*=o.x/2,y.y*=o.y/2,A.start.copy(b),A.start.z=0,A.end.copy(y),A.end.z=0;let d=A.closestPointToPointParameter(S,!0);A.at(d,j);let p=s.cj9.lerp(b.z,y.z,d),m=p>=-1&&p<=1,v=S.distanceTo(j)<.5*i;if(m&&v){A.start.fromBufferAttribute(c,t),A.end.fromBufferAttribute(u,t),A.start.applyMatrix4(l),A.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;n.distanceSqToSegment(A.start,A.end,a,i),r.push({point:a,pointOnLine:i,distance:n.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class z extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends _{constructor(e=new z,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let N=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:d,dashed:c,...p},f){var h,v;let x=(0,l.C)(e=>e.size),g=o.useMemo(()=>d?new _:new C,[d]),[b]=o.useState(()=>new m),y=(null==r||null==(h=r[0])?void 0:h.length)===4?4:3,w=o.useMemo(()=>{let n=d?new u:new z,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof s.Q1f?e.toArray():e);n.setColors(e.flat(),y)}return n},[e,d,r,y]);return o.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),o.useLayoutEffect(()=>{c?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[c,b]),o.useEffect(()=>()=>{w.dispose(),b.dispose()},[w]),o.createElement("primitive",(0,a.A)({object:g,ref:f},p),o.createElement("primitive",{object:w,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:b,attach:"material",color:t,vertexColors:!!r,resolution:[x.width,x.height],linewidth:null!=(v=null!=n?n:i)?v:1,dashed:c,transparent:4===y},p)))})},mevF(e,t,r){let n,i;var a=r("unhp"),o=r("zd8w"),s=r("CE87"),l=r("PVZC"),d=r("hPwS");let c=new l.Pq0,u=new l.Pq0,p=new l.Pq0,f=new l.I9Y;function m(e,t,r){let n=c.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,a=r.height/2;return[n.x*i+i,-(n.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=h(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let x=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,n)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,i(t),"translate(-50%,-50%)")),b=o.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:v,fullscreen:b,portal:y,distanceFactor:w,sprite:S=!1,transform:E=!1,occlude:A,onOcclude:j,castShadow:k,receiveShadow:L,material:M,geometry:P,zIndexRange:_=[0x1000037,0],calculatePosition:z=m,as:C="div",wrapperClass:N,pointerEvents:U="auto",...R},O)=>{let{gl:D,camera:W,scene:T,size:B,raycaster:I,events:H,viewport:F}=(0,d.C)(),[$]=o.useState(()=>document.createElement(C)),q=o.useRef(null),V=o.useRef(null),G=o.useRef(0),Y=o.useRef([0,0]),Z=o.useRef(null),K=o.useRef(null),X=(null==y?void 0:y.current)||H.connected||D.domElement.parentNode,Q=o.useRef(null),J=o.useRef(!1),ee=o.useMemo(()=>{var e;return A&&"blending"!==A||Array.isArray(A)&&A.length&&(e=A[0])&&"object"==typeof e&&"current"in e},[A]);o.useLayoutEffect(()=>{let e=D.domElement;A&&"blending"===A?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[A]),o.useLayoutEffect(()=>{if(V.current){let e=q.current=s.createRoot($);if(T.updateMatrixWorld(),E)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=z(V.current,W,B);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return X&&(i?X.prepend($):X.appendChild($)),()=>{X&&X.removeChild($),e.unmount()}}},[X,E]),o.useLayoutEffect(()=>{N&&($.className=N)},[N]);let et=o.useMemo(()=>E?{position:"absolute",top:0,left:0,width:B.width,height:B.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...b&&{top:-B.height/2,left:-B.width/2,width:B.width,height:B.height},...r},[r,v,b,B,E]),er=o.useMemo(()=>({position:"absolute",pointerEvents:U}),[U]);o.useLayoutEffect(()=>{var t,i;J.current=!1,E?null==(t=q.current)||t.render(o.createElement("div",{ref:Z,style:et},o.createElement("div",{ref:K,style:er},o.createElement("div",{ref:O,className:n,style:r,children:e})))):null==(i=q.current)||i.render(o.createElement("div",{ref:O,style:et,className:n,children:e}))});let en=o.useRef(!0);(0,d.D)(e=>{if(V.current){W.updateMatrixWorld(),V.current.updateWorldMatrix(!0,!1);let e=E?Y.current:z(V.current,W,B);if(E||Math.abs(G.current-W.zoom)>t||Math.abs(Y.current[0]-e[0])>t||Math.abs(Y.current[1]-e[1])>t){var r;let t,n,i,a,o=(r=V.current,t=c.setFromMatrixPosition(r.matrixWorld),n=u.setFromMatrixPosition(W.matrixWorld),i=t.sub(n),a=W.getWorldDirection(p),i.angleTo(a)>Math.PI/2),s=!1;ee&&(Array.isArray(A)?s=A.map(e=>e.current):"blending"!==A&&(s=[T]));let d=en.current;s?en.current=function(e,t,r,n){let i=c.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),f.set(a.x,a.y),r.setFromCamera(f,t);let o=r.intersectObjects(n,!0);if(o.length){let e=o[0].distance;return i.distanceTo(r.ray.origin)<e}return!0}(V.current,W,I,s)&&!o:en.current=!o,d!==en.current&&(j?j(!en.current):$.style.display=en.current?"block":"none");let m=Math.floor(_[0]/2),v=A?ee?[_[0],m]:[m-1,0]:_;if($.style.zIndex=`${function(e,t,r){if(t instanceof l.ubm||t instanceof l.qUd){let n=c.setFromMatrixPosition(e.matrixWorld),i=u.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(i),o=(r[1]-r[0])/(t.far-t.near),s=r[1]-o*t.far;return Math.round(o*a+s)}}(V.current,W,v)}`,E){let[e,t]=[B.width/2,B.height/2],r=W.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:a,bottom:o,right:s}=W,l=x(W.matrixWorldInverse),d=n?`scale(${r})translate(${h(-(s+a)/2)}px,${h((i+o)/2)}px)`:`translateZ(${r}px)`,c=V.current.matrixWorld;S&&((c=W.matrixWorldInverse.clone().transpose().copyPosition(c).scale(V.current.scale)).elements[3]=c.elements[7]=c.elements[11]=0,c.elements[15]=1),$.style.width=B.width+"px",$.style.height=B.height+"px",$.style.perspective=n?"":`${r}px`,Z.current&&K.current&&(Z.current.style.transform=`${d}${l}translate(${e}px,${t}px)`,K.current.style.transform=g(c,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let r=c.setFromMatrixPosition(e.matrixWorld),n=u.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(V.current,W)*w;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Y.current=e,G.current=W.zoom}}if(!ee&&Q.current&&!J.current)if(E){if(Z.current){let e=Z.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=W;if(t||P)R.scale&&(Array.isArray(R.scale)?R.scale instanceof l.Pq0?Q.current.scale.copy(R.scale.clone().divideScalar(1)):Q.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):Q.current.scale.setScalar(1/R.scale));else{let t=(w||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;Q.current.scale.set(r,n,1)}J.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/F.factor,r=t.clientWidth*e,n=t.clientHeight*e;Q.current.scale.set(r,n,1),J.current=!0}Q.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:E?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[E]);return o.createElement("group",(0,a.A)({},R,{ref:V}),A&&!ee&&o.createElement("mesh",{castShadow:k,receiveShadow:L,ref:Q},P||o.createElement("planeGeometry",null),M||o.createElement("shaderMaterial",{side:2,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))});r.d(t,{},{E:b})},sKwe(e,t,r){var n=r("ABep"),i=r("on57"),a=r("zd8w"),o=r("iLdV");let s=e=>e?e.replace(/\\mid/g,"|").replace(/\\neg/g,"\xac").replace(/\\cap/g,"\u2229").replace(/\\cup/g,"\u222A").replace(/\\text\{([^}]*)\}/g,"$1").replace(/\\mathrm\{([^}]*)\}/g,"$1").replace(/\\[a-zA-Z]+/g,"").replace(/[{}_^]/g,"").replace(/\s+/g," ").trim().length:0,l=e=>{let t=e.formatValueForInput??o.hG,r=Math.max((0,o.m_)(e.min,e.step,t).length,(0,o.m_)(e.max,e.step,t).length),n=e.inlineUnit?e.unit?.length??0:0;return e.range?2*r+2:r+n};r.d(t,{},{J:({inputs:e})=>{let t=(0,a.useRef)(null),[r,d]=(0,a.useState)(),c=e.some(e=>e.before),u=e.filter(e=>!e.options&&!1!==e.showValueInput),p=Math.max(0,...e.map(e=>s(e.variable))),f=Math.max(0,...u.map(l)),m=Math.max(0,...u.map(e=>s(e.inlineUnit?void 0:e.unit))),h=e.map(e=>e.variable??"").join("\0");return(0,a.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let r=Array.from(e.querySelectorAll("[data-input-selector-variable]"));if(0===r.length)return;let n=()=>{let t=r.filter(e=>"stacked"!==e.dataset.inputSelectorLabelLayout),n=t.length?Math.max(...t.map(t=>{let r=t.cloneNode(!0);r.removeAttribute("data-input-selector-variable"),Object.assign(r.style,{inset:"0 auto auto 0",maxWidth:"none",position:"absolute",visibility:"hidden",whiteSpace:"nowrap",width:"max-content"}),e.appendChild(r);let n=r.getBoundingClientRect().width;return r.remove(),n})):void 0;d(e=>e===n?e:n)};if(n(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(n);r.forEach(e=>i.observe(e));let a=new MutationObserver(n);return r.forEach(e=>a.observe(e,{attributeFilter:["data-input-selector-label-layout"]})),()=>{i.disconnect(),a.disconnect()}},[h]),(0,n.jsx)("div",{ref:t,"data-input-selector-group":!0,className:"grid min-h-fit min-w-0 shrink grow-0 gap-y-3",children:e.map((e,t)=>(0,n.jsxs)("div",{className:(0,i.A)("grid h-full min-w-0 items-center gap-x-2",c?"grid-cols-[auto_minmax(0,1fr)]":"grid-cols-[minmax(0,1fr)]"),children:[c?e.before??(0,n.jsx)("div",{"aria-hidden":!0}):null,(0,n.jsx)(o.KV,{...e,groupVariableWidthCh:p,groupVariableWidthPx:r,groupUnitWidthCh:m,groupValueWidthCh:f})]},t))})},b:(e,t,r,n,{before:i,disabled:a,displayValue:o,editType:s="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",formatValueForInput:l,inlineUnit:d,parseInputValue:c,mapValue:u,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,ariaLabel:v,ariaValueText:x,onActiveChange:g,value:b,variable:y,variableBold:w,variableFormat:S,unit:E}={})=>{var A;return{before:i,disabled:a,displayValue:o,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,inlineUnit:d,ariaLabel:v,ariaValueText:x,variable:y??t.variable??(A=String(e),A.match(/[A-Za-z]/)?.[0]??A),variableBold:w??t.variableBold,variableFormat:S??t.variableFormat,unit:E??t.unit,formatValueForInput:l,parseInputValue:c,max:t.max,min:t.min,step:t.step,value:b??Number(r[e]),onActiveChange:g,onChange:(t,r)=>{let i=u?u(t):t;n(t=>({...t,[e]:i}),"function"==typeof s?s(r):s)}}}})},iLdV(e,t,r){var n=r("ABep"),i=r("YAOF"),a=r("on57"),o=r("zd8w"),s=r("Wf1j"),l=r("l7Go"),d=r("jYuH"),c=r("Bdtm");let u=(e,t,r)=>Math.min(Math.max(e,t),r),p=/[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?/i,f=(e,t,r,n)=>{if(!Number.isFinite(e))return t;let i=Math.round((u(e,t,r)-t)/n),a=(0,d.Dp)(n);return u((0,d.eB)(t+i*n,Math.max(1,a)),t,r)},m=(e,t)=>Number.isFinite(e)?e.toFixed(Math.max(1,(0,d.Dp)(t))):"",h=(e,t,r)=>{let n=r(e,t);return n.match(p)?.[0]??n},v=96,x=e=>{let t=[],r=e.parentElement;for(;r;)"visible"!==window.getComputedStyle(r).overflowY&&t.push(r),r=r.parentElement;return t},g=(0,o.createContext)({isNativeSlider:!1}),b=()=>(0,n.jsx)("svg",{"aria-hidden":!0,className:"h-4 w-4 flex-none",fill:"none",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"m5 6 3-3 3 3M5 10l3 3 3-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});r.d(t,{},{KV:({min:e,max:t,step:r,value:d,displayValue:u,onChange:y,onActiveChange:w,disabled:S,options:E,optionLabelFormat:A="text",sliderStyle:j="continuous",ariaLabel:k,ariaValueText:L,variable:M,variableBold:P,variableFormat:_,inlineUnit:z,unit:C,formatValueForInput:N=m,parseInputValue:U,normalizeCommittedValue:R,minSliderWidthPx:O,showValueInput:D=!0,range:W,valueClassName:T,groupVariableWidthCh:B,groupVariableWidthPx:I,groupUnitWidthCh:H,groupValueWidthCh:F})=>{let $,{isNativeSlider:q,onSliderInteractionEnd:V,onSliderInteractionStart:G}=(0,o.useContext)(g),Y=(0,s.A)(),Z=U??Number.parseFloat,K=f(d,e,t,r),X=Number.isFinite(u)?u:K,[Q,J]=(0,o.useState)(()=>h(X,r,N)),[ee,et]=(0,o.useState)(!1),er=(0,o.useRef)(!1),en=(0,o.useRef)(!1),ei=(0,o.useRef)(!1),ea=(0,o.useRef)(null),eo=(0,o.useRef)(null),es=(0,o.useRef)(null),el=(0,o.useRef)(null),ed=(0,o.useRef)(null),ec=(0,o.useRef)(null),eu=(0,o.useRef)(null),ep=(0,o.useRef)(null),ef=(0,o.useRef)(!1),[em,eh]=(0,o.useState)(!1),[ev,ex]=(0,o.useState)(!1),[eg,eb]=(0,o.useState)(!1),[ey,ew]=(0,o.useState)(q?"above":"below"),eS=(e="blur")=>{"blur"===e&&ei.current||en.current&&(en.current=!1,w?.(!1),V?.())},eE=()=>{en.current||(en.current=!0,w?.(!0),G?.(M))},eA=()=>{ei.current=!0,eE()};(0,o.useEffect)(()=>{let e=()=>{ei.current=!1,eS("pointer-end")};return window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e)}},[w,V]),(0,o.useLayoutEffect)(()=>{let e=ed.current,t=ec.current;if(!E||!e||!t)return void eh(!1);let r=()=>{let r=e.clientWidth,n=t.scrollWidth>r+1;eh(e=>e===n?e:n)};r();let n="u"<typeof document?void 0:document.fonts;if(n?.addEventListener("loadingdone",r),"u"<typeof ResizeObserver)return()=>n?.removeEventListener("loadingdone",r);let i=new ResizeObserver(r);return i.observe(e),i.observe(t),()=>{n?.removeEventListener("loadingdone",r),i.disconnect()}},[E,A]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&ef.current&&(ef.current=!1,e.preventDefault(),e.stopPropagation())};return document.addEventListener("keyup",e,!0),()=>document.removeEventListener("keyup",e,!0)},[]),(0,o.useEffect)(()=>{if(!eg)return;ef.current=!1;let e=e=>{let t=e.target;!(t instanceof Node)||eu.current?.contains(t)||ep.current?.contains(t)||eb(!1)},t=e=>{"Escape"===e.key&&(ef.current=!0,e.preventDefault(),e.stopPropagation(),eb(!1),ep.current?.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t,!0)}},[eg]),(0,o.useEffect)(()=>{(!em||S)&&eb(!1)},[S,em]),(0,o.useLayoutEffect)(()=>{if(!eg)return void ew(q?"above":"below");let e=eu.current,t=ep.current;if(!e||!t)return;let r=()=>{ew((({boundary:e,menuHeight:t,trigger:r})=>{let n=e.bottom-r.bottom-4;if(t<=n)return"below";let i=r.top-e.top-4;return t<=i||i>n?"above":"below"})({boundary:(({clippingAncestors:e,viewport:t})=>e.reduce((e,t)=>({bottom:Math.min(e.bottom,t.bottom),top:Math.max(e.top,t.top)}),t))({clippingAncestors:x(t).map(e=>e.getBoundingClientRect()),viewport:{bottom:window.innerHeight,top:0}}),menuHeight:e.getBoundingClientRect().height,trigger:t.getBoundingClientRect()}))};if(r(),window.addEventListener("resize",r),"u"<typeof ResizeObserver)return()=>window.removeEventListener("resize",r);let n=new ResizeObserver(r);return n.observe(e),n.observe(t),x(t).forEach(e=>n.observe(e)),()=>{window.removeEventListener("resize",r),n.disconnect()}},[eg,q]);let ej=ee?Q:h(X,r,N),ek=Math.max(h(e,r,N).length,h(t,r,N).length),eL=W?($=W.displayValues??W.ariaValueTexts??[h(W.values[0],r,N),h(W.values[1],r,N)],`(${$[0]}, ${$[1]})`):void 0,eM=W?2*ek+2:ek,eP=F??eM,e_=O??v,ez=P??!1,eC=M?M.replace(/[^\w-]+/g,"_"):"input-selector-value",eN=k??(M?Y.formatMessage({id:"learningBlock.inputSelector.valueAriaLabel",defaultMessage:"{label} value"},{label:M}):void 0),eU=!!M&&"text"!==_&&(!!("katex"===_||/\\/.test(M))||/^[A-Za-z\u03b8\u03bc\u03c3\u03bb\u03c0\u0394](?:[_^][A-Za-z0-9{}]+)?$/.test(M)),eR=E?.find(n=>f(n.value,e,t,r)===K)??E?.[0],eO=em?Y.formatMessage({id:"learningBlock.inputSelector.overflowMenuAriaLabel",defaultMessage:"{value}. Show all {label} options"},{label:eN??Y.formatMessage({id:"learningBlock.inputSelector.selectorAriaLabel",defaultMessage:"selector"}),value:eR?.ariaLabel??eR?.label??""}):void 0,eD=(0,o.useId)(),eW=(e,t)=>"katex"!==t?e:(0,n.jsx)(l.r,{className:"katex",latex:e}),eT=n=>f(n.value,e,t,r),eB=E?.find(e=>eT(e)===K)??E?.[0],eI=n=>{let i=Z(n);if(!Number.isFinite(i))return void J(h(X,r,N));let a=((e,{max:t,min:r,normalizeCommittedValue:n,step:i})=>n?n(e):f(e,r,t,i))(i,{min:e,max:t,step:r,normalizeCommittedValue:R});y(a,"input"),J(h(a,r,N))},eH=M?(0,n.jsx)("div",{"data-input-selector-variable":!0,"data-input-selector-label-layout":ev?"stacked":"inline",className:(0,a.A)("text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]",ez&&"font-medium"),children:eU?(0,n.jsx)(l.r,{className:"katex",latex:M??""}):M}):null,eF=!!(z&&C&&!W),e$=C&&!eF?(0,n.jsx)("div",{ref:el,className:"text-token-text-secondary shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit",children:C}):null,eq=!!F,eV=`minmax(max(${eP}ch,2rem), max(${eP}ch,2rem))`,eG=!!H,eY=`minmax(${H??0}ch, ${H??0}ch)`,eZ=!E&&eG?e$??(0,n.jsx)("div",{ref:el,"aria-hidden":!0}):null,eK=I?`${I}px`:B?`${B}ch`:null,eX=eK?`minmax(0, min(${eK}, 40%))`:"fit-content(40%)";(0,o.useLayoutEffect)(()=>{let e=ea.current,t=eo.current;if(E||!e||!t)return void ex(!1);let r=()=>{let r=e.clientWidth;if(0===r)return;let n=(({availableWidth:e,labelWidth:t,minSliderWidthPx:r=v,unitWidth:n,valueWidth:i})=>{let a=2+Number(i>0)+Number(n>0);return t+i+n+(a-1)*12+r>e+1})({availableWidth:r,labelWidth:Math.max(t.scrollWidth,I??0),minSliderWidthPx:e_,unitWidth:el.current?.clientWidth??0,valueWidth:es.current?.clientWidth??0});ex(e=>e===n?e:n)};r();let n="u"<typeof document?void 0:document.fonts;if(n?.addEventListener("loadingdone",r),"u"<typeof ResizeObserver)return()=>n?.removeEventListener("loadingdone",r);let i=new ResizeObserver(r);return i.observe(e),i.observe(t),es.current&&i.observe(es.current),el.current&&i.observe(el.current),()=>{n?.removeEventListener("loadingdone",r),i.disconnect()}},[H,F,I,E,e_,M,D,C]);let eQ=e=>eu.current?.querySelectorAll("[data-input-selector-discrete-menu-option]").item(e).focus();(0,o.useEffect)(()=>{eg&&E&&eQ(Math.max(E.findIndex(e=>eT(e)===K),0))},[eg,E,K]);let eJ=E?(0,n.jsx)("div",{role:"radiogroup","aria-label":eN,className:(0,a.A)("flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6",S&&"opacity-40"),children:E.map(e=>{let t=eT(e),r=t===K;return(0,n.jsx)("button",{type:"button",role:"radio","aria-checked":r,"aria-label":e.ariaLabel,disabled:S,className:(0,a.A)("text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",r&&"bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black",!r&&!S&&"hover:text-token-text-primary focus-visible:text-token-text-primary",!S&&"focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),onClick:()=>y(t,"input"),children:(0,n.jsx)("span",{className:"min-w-6",children:eW(e.label,A)})},e.value)})}):null,e0=E?(0,n.jsxs)("div",{"data-input-selector-discrete-rail":!0,className:(0,a.A)("relative h-6 w-full min-w-0",em&&"flex justify-end"),children:[em&&eB?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{type:"button","aria-controls":eD,"aria-expanded":eg,"aria-haspopup":"listbox","aria-label":eO,disabled:S,"data-input-selector-discrete-menu-trigger":!0,ref:ep,className:(0,a.A)("text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",!S&&"hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10"),onClick:()=>eb(e=>!e),children:[(0,n.jsx)("span",{className:"min-w-0 truncate",children:eW(eB.label,A)}),(0,n.jsx)(b,{})]}),eg?(0,n.jsx)("div",{ref:eu,"aria-label":eN,className:(0,a.A)("border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg","above"===ey?"bottom-full mb-1":"top-full mt-1"),id:eD,role:"listbox",children:E.map((e,t)=>{let r=eT(e),i=r===K;return(0,n.jsx)("button",{type:"button","aria-selected":i,"data-input-selector-discrete-menu-option":!0,role:"option",className:(0,a.A)("flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]",i&&"bg-black/7 font-medium dark:bg-white/10",!i&&"hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10"),onClick:()=>{y(r,"input"),eb(!1),ep.current?.focus()},onKeyDown:e=>((e,t)=>{if(E)switch(e.key){case"ArrowDown":e.preventDefault(),eQ((t+1)%E.length);break;case"ArrowUp":e.preventDefault(),eQ((t-1+E.length)%E.length);break;case"Home":e.preventDefault(),eQ(0);break;case"End":e.preventDefault(),eQ(E.length-1)}})(e,t),children:eW(e.label,A)},e.value)})}):null]}):eJ,(0,n.jsx)("div",{ref:ec,"aria-hidden":!0,"data-input-selector-overflow-measure":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0",children:(0,n.jsx)("div",{className:"flex h-6 w-max min-w-max gap-0.5 p-0.5",children:E.map(e=>(0,n.jsx)("span",{className:"flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]",children:(0,n.jsx)("span",{className:"min-w-6",children:eW(e.label,A)})},e.value))})})]}):null,e1=M&&!E&&D&&(0,n.jsxs)("div",{ref:es,className:(0,a.A)("text-token-text-primary grid h-5 min-w-8 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]",eF?"grid-cols-[minmax(0,1fr)_auto] gap-x-0.5":"grid-cols-1",W&&(ev?"text-end":"text-start"),T,!S&&!W&&"transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7"),"data-value":"0".repeat(eP),children:[W?(0,n.jsx)("span",{"data-input-selector-range-value":!0,className:(0,a.A)("relative flex h-full items-center tabular-nums [grid-area:1/1]",ev?"justify-end":"justify-start"),children:eL}):(0,n.jsx)("input",{"aria-label":eN,className:"relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none",disabled:S,inputMode:"decimal",name:eC,size:1,type:"text",value:ej,onBlur:()=>{if(er.current){er.current=!1;return}et(!1),eI(Q)},onChange:e=>{var t;let r;return J(U?e.currentTarget.value:""===(r=(t=e.currentTarget.value).trim())||"-"===r||"."===r?t:r.match(p)?.[0]??t)},onFocus:()=>{et(!0),J(h(X,r,N))},onKeyDown:e=>{if("Enter"===e.key){e.preventDefault(),er.current=!0,et(!1),eI(Q),e.currentTarget.blur();return}"Escape"===e.key&&(e.preventDefault(),er.current=!0,et(!1),J(h(K,r,N)),e.currentTarget.blur())}}),eF?(0,n.jsx)("span",{"aria-hidden":!0,className:"text-token-text-secondary self-center text-xs leading-4",children:C}):null]}),e2=[];ev?(M&&e2.push("minmax(0, 1fr)"),e1&&e2.push(eV),eZ&&e2.push(eY)):(M&&e2.push(eX),e1&&e2.push(eV),eZ&&e2.push(eY),e2.push("minmax(0, 1fr)"));let e3=[],e4=eq&&!!M,e5=eG&&!!M;M&&e3.push(eX),e4&&e3.push(eV),e5&&e3.push(eY),e3.push("minmax(0, 1fr)");let e6=`${e3.length} / ${e3.length+1}`,e7=M?"2 / -1":"1 / -1",e8=Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(r)&&r>0&&t>=e?Math.max(0,Math.round((t-e)/r)):0,e9=Math.min(e8+1,12),te="stepped"===j&&e8>0?Array.from({length:e9},(e,t)=>t):[],tt="stepped"===j?"h-6 w-6":"h-5 w-5",tr="relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]",tn=te.length>0?(0,n.jsx)("div",{"aria-hidden":!0,"data-input-selector-rendered-marker-count":te.length,className:"pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between",children:te.map(e=>(0,n.jsx)("span",{"data-input-selector-step-marker":!0,className:"h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20"},e))}):null,ti=q&&!W?(0,n.jsxs)("div",{"data-input-selector-slider":!0,"data-input-selector-slider-style":j,className:(0,a.A)(tr,S&&"opacity-40"),children:[tn,(0,n.jsx)("input",{"aria-label":eN,"aria-valuetext":L,type:"range","data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(c.A.inputSelector,"stepped"===j&&c.A.inputSelectorStepped,"text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center"),disabled:S,max:t,min:e,step:r,value:K,onBlur:()=>eS("blur"),onChange:n=>{eE(),y(f(n.currentTarget.valueAsNumber,e,t,r),"slider")},onPointerDown:eA})]}):(0,n.jsxs)(i.bL,{"data-input-selector-slider":!0,"data-input-selector-slider-style":j,"data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(tr,"touch-pan-y",S&&"opacity-40"),disabled:S,max:t,min:e,onBlurCapture:()=>eS("blur"),onPointerDownCapture:eA,step:r,value:W?W.values.map(n=>f(n,e,t,r)):[K],onValueChange:n=>{(eE(),W)?W.onChange([f(n[0],e,t,r),f(n[1],e,t,r)]):y(f(n[0],e,t,r),"slider")},children:[(0,n.jsx)(i.CC,{className:"absolute inset-0 rounded-full",children:(0,n.jsx)(i.Q6,{className:"absolute inset-y-0 rounded-full bg-transparent"})}),tn,(0,n.jsx)(i.zi,{"aria-label":W?.ariaLabels[0]??eN,"aria-valuetext":W?.ariaValueTexts?.[0]??L,className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt,W?"flex items-center justify-center text-black":"block"),children:W?.thumbLabels?.[0]&&(0,n.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:W.thumbLabels[0]})}),W&&(0,n.jsx)(i.zi,{"aria-label":W.ariaLabels[1],"aria-valuetext":W.ariaValueTexts?.[1],className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative flex cursor-pointer items-center justify-center rounded-full border text-black shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt),children:W.thumbLabels?.[1]&&(0,n.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:W.thumbLabels[1]})})]});return E?(0,n.jsxs)("div",{className:"grid h-full min-w-0 items-center gap-x-3",style:{gridTemplateColumns:e3.join(" ")},children:[eH,!em&&e4?(0,n.jsx)("div",{"aria-hidden":!0}):null,!em&&e5?(0,n.jsx)("div",{"aria-hidden":!0}):null,(0,n.jsx)("div",{className:"h-full min-w-0",style:{gridColumn:em?e7:e6,gridRow:1},children:e0}),(0,n.jsx)("div",{ref:ed,"aria-hidden":!0,"data-input-selector-discrete-width-measure":!0,className:"pointer-events-none h-0 min-w-0 opacity-0",style:{gridColumn:e6,gridRow:1}})]}):(0,n.jsxs)("div",{ref:ea,className:(0,a.A)("relative grid min-w-0 items-center gap-x-3",W&&"text-[11px]",ev&&"gap-y-2"),style:{gridTemplateColumns:e2.join(" ")},children:[eH,e1,eZ,(0,n.jsx)("div",{className:"min-w-0",style:ev?{gridColumn:"1 / -1"}:void 0,children:ti}),M?(0,n.jsx)("div",{ref:eo,"aria-hidden":!0,"data-input-selector-label-measure":!0,className:(0,a.A)("pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]",ez&&"font-medium"),children:eU?(0,n.jsx)(l.r,{className:"katex",latex:M??""}):M}):null]})},hG:m,m_:h,xT:e=>e})},tkCL(e,t,r){var n=r("ABep"),i=r("mevF"),a=r("Ipng"),o=r("Njew"),s=r("oeGO"),l=r("hPwS"),d=r("zd8w"),c=r("Qgfj"),u=r("Wf1j"),p=r("PVZC"),f=r("l7Go"),m=r("sCEh"),h=r("ZKaa");let v=s.Hl,x=i.E,g=a.N,b="group",y="mesh",w="sphereGeometry",S="meshBasicMaterial",E="meshStandardMaterial",A=Math.PI/12,j=(0,c.YK)({cameraInstructions:{id:"learningBlock.multivariable.cameraInstructions",defaultMessage:"Use the arrow keys to rotate the three-dimensional scene"},pointInstructions:{id:"learningBlock.multivariable.pointInstructions",defaultMessage:"Use the arrow keys to move horizontally or vertically, and Page Up or Page Down to move in depth"},adjustPoint:{id:"learningBlock.multivariable.adjustPoint",defaultMessage:"Adjust point"}}),k={accent:"var(--learning-block-accent)",primary:"var(--learning-block-color-primary)",secondary:"var(--learning-block-color-secondary)",third:"var(--learning-block-color-third)",fourth:"var(--learning-block-color-fourth)",neutral:"var(--text-secondary)"},L=({x:e,y:t,z:r})=>[e,t,r],M=({position:e})=>{let t=(0,l.C)(e=>e.camera),r=(0,l.C)(e=>e.invalidate);return(0,d.useEffect)(()=>{t.position.set(e[0],e[1],e[2]),t.lookAt(0,0,0),t.updateMatrixWorld(),r()},[t,r,e[0],e[1],e[2]]),null},P=({arrow:e,colors:t,showLabel:r})=>{let i=e.from??(0,h.ih)(0,0,0),a=(0,h.XT)(e.to,(0,h.oE)(i,-1)),o=(0,h.wi)(a);if(o<1e-5)return null;let s=(0,h.v7)(a),l=new p.PTz().setFromUnitVectors(new p.Pq0(0,1,0),new p.Pq0(s.x,s.y,s.z)),d=Math.min(e.headLength??(e.emphasis?.32:.24),.3*o),c=e.shaftRadius??(e.emphasis?.046:.034),u=e.headRadius??(e.emphasis?.13:.1),m=o-d,v=(0,h.XT)(i,(0,h.oE)(s,m/2)),g=(0,h.XT)(i,(0,h.oE)(s,m+d/2)),w=t[e.role??"primary"];return(0,n.jsxs)(b,{children:[(0,n.jsxs)(y,{position:L(v),quaternion:l.toArray(),children:[(0,n.jsx)("cylinderGeometry",{args:[c,c,m,16]}),(0,n.jsx)(E,{color:w,roughness:.45})]}),(0,n.jsxs)(y,{position:L(g),quaternion:l.toArray(),children:[(0,n.jsx)("coneGeometry",{args:[u,d,18]}),(0,n.jsx)(E,{color:w,roughness:.42})]}),r&&e.label?(0,n.jsx)(x,{center:!0,position:L((0,h.XT)(e.to,(0,h.oE)(s,.18))),children:(0,n.jsx)(f.r,{latex:e.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:w}})}):null]})},_=({patch:e,colors:t})=>{let r=(0,d.useMemo)(()=>{var t;let r;return t=e.corners,(r=new p.LoY).setAttribute("position",new p.qtW([0,1,2,0,2,3].flatMap(e=>L(t[e])),3)),r.computeVertexNormals(),r},[e.corners]);return(0,n.jsx)(y,{geometry:r,renderOrder:1,children:(0,n.jsx)(S,{color:t[e.role??"secondary"],side:2,transparent:!0,opacity:e.opacity??.16,depthWrite:!1})})},z=(e,t)=>{if(!t)return e.length>1?[e]:[];let r=[],n=[];return e.forEach((e,i)=>{t[i]?n.push(e):(n.length>1&&r.push(n),n=[])}),n.length>1&&r.push(n),r},C=(0,d.memo)(function({surface:e,colors:t}){let r=(0,d.useMemo)(()=>{let t=[];for(let r=0;r+1<e.grid.length;r+=1)for(let n=0;n+1<e.grid[r].length;n+=1){if(e.validity&&(!e.validity[r]?.[n]||!e.validity[r+1]?.[n]||!e.validity[r+1]?.[n+1]||!e.validity[r]?.[n+1]))continue;let i=e.grid[r][n],a=e.grid[r+1][n],o=e.grid[r+1][n+1],s=e.grid[r][n+1];t.push(...L(i),...L(a),...L(o)),t.push(...L(i),...L(o),...L(s))}let r=new p.LoY;return r.setAttribute("position",new p.qtW(t,3)),r.computeVertexNormals(),r},[e.grid,e.validity]),i=t[e.role??"secondary"],a=e.grid[0]?.length??0,o=(0,d.useMemo)(()=>e.grid.flatMap((t,r)=>z(t,e.validity?.[r]).map((e,t)=>({key:`row-${r}-${t}`,points:e.map(L)}))),[e.grid,e.validity]),s=(0,d.useMemo)(()=>Array.from({length:a},(t,r)=>({points:e.grid.map(e=>e[r]),validity:e.validity?.map(e=>e[r])})).flatMap(({points:e,validity:t},r)=>z(e,t).map((e,t)=>({key:`column-${r}-${t}`,points:e.map(L)}))),[a,e.grid,e.validity]);return(0,n.jsxs)(b,{children:[(0,n.jsx)(y,{geometry:r,renderOrder:1,children:(0,n.jsx)(S,{color:i,side:2,transparent:!0,opacity:e.opacity??.17,depthWrite:!1})}),o.map(({key:t,points:r})=>(0,n.jsx)(g,{points:r,color:i,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t)),s.map(({key:t,points:r})=>(0,n.jsx)(g,{points:r,color:i,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t))]})}),N=({curtain:e,colors:t})=>{let r=(0,d.useMemo)(()=>{let t=[],r=Math.min(e.upper.length,e.lower.length);for(let n=0;n+1<r;n+=1){let r=e.upper[n],i=e.upper[n+1],a=e.lower[n],o=e.lower[n+1];t.push(...L(r),...L(a),...L(o),...L(r),...L(o),...L(i))}let n=new p.LoY;return n.setAttribute("position",new p.qtW(t,3)),n.computeVertexNormals(),n},[e.lower,e.upper]);return(0,n.jsx)(y,{geometry:r,renderOrder:1,children:(0,n.jsx)(S,{color:t[e.role??"primary"],side:2,transparent:!0,opacity:e.opacity??.22,depthWrite:!1})})},U=({colors:e,extent:t,extents:r,labelScale:i=1,labels:a=["x","y","z"],showLabels:o})=>(0,n.jsx)(b,{children:[{endpoint:(0,h.ih)(r?.[0]??t,0,0),label:a[0]},{endpoint:(0,h.ih)(0,r?.[1]??t,0),label:a[1]},{endpoint:(0,h.ih)(0,0,r?.[2]??t),label:a[2]}].map(({endpoint:t,label:r})=>(0,n.jsxs)(b,{children:[(0,n.jsx)(g,{points:[L((0,h.oE)(t,-1)),L(t)],color:e.neutral,transparent:!0,opacity:.32,lineWidth:.85}),o?(0,n.jsx)(x,{center:!0,position:L((0,h.oE)(t,i)),children:(0,n.jsx)(f.r,{latex:r,className:"pointer-events-none text-xs whitespace-nowrap",style:{color:e.neutral}})}):null]},r))}),R=({colors:e,coordinateGroupRef:t,index:r,interactive:i,onDragActiveChange:a,onDragPoint:o,point:s,showLabel:l})=>{let c=(0,d.useRef)(null),u=(0,d.useRef)(new p.I9Y),m=(0,d.useRef)(null),v=i&&s.draggable&&void 0!==o,g=(e,t)=>{let r=e.nativeEvent.target;if(!(r instanceof HTMLElement))return e.ray;let n=t??r.getBoundingClientRect();return 0===n.width||0===n.height?e.ray:(u.current.set((e.nativeEvent.clientX-n.left)/n.width*2-1,-(2*((e.nativeEvent.clientY-n.top)/n.height))+1),m.current??=new p.tBo,m.current.setFromCamera(u.current,e.camera),m.current.ray)},A=(e,t)=>{let r=e.nativeEvent.target;r instanceof HTMLElement&&(r.style.cursor=t)},j=e=>{if(void 0===s.hitTolerancePixels)return!0;let r=e.nativeEvent.target,n=t.current;if(!(r instanceof HTMLElement)||!n)return!0;let i=r.getBoundingClientRect();if(0===i.width||0===i.height)return!0;n.updateWorldMatrix(!0,!1);let a=t=>{let r=n.localToWorld(new p.Pq0(t.x,t.y,t.z)).project(e.camera);return{x:i.left+(r.x+1)*i.width/2,y:i.top+(1-r.y)*i.height/2}},o=a(s.point),l=a(s.dragOrigin??s.point),d=o.x-l.x,c=o.y-l.y,u=d*d+c*c,f=u>0?Math.min(1,Math.max(0,((e.nativeEvent.clientX-l.x)*d+(e.nativeEvent.clientY-l.y)*c)/u)):1,m=l.x+f*d,h=l.y+f*c,v="touch"===e.nativeEvent.pointerType?Math.max(s.hitTolerancePixels,22):s.hitTolerancePixels;return Math.hypot(e.nativeEvent.clientX-m,e.nativeEvent.clientY-h)<=v},k=e=>{let t=c.current;if(t&&t.pointerId===e.pointerId){c.current=null,a(!1),A(e,"grab");try{e.target.releasePointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}};return(0,n.jsxs)(b,{position:L(s.point),onPointerDown:v?e=>{if(!v||!j(e))return;let r=new p.Pq0(s.point.x,s.point.y,s.point.z);t.current?.updateWorldMatrix(!0,!1),t.current?.localToWorld(r);let n=e.camera.getWorldDirection(new p.Pq0),i=new p.Zcv().setFromNormalAndCoplanarPoint(n,r),o=g(e).intersectPlane(i,new p.Pq0);if(!o)return;let l=e.nativeEvent.target;if(!(l instanceof HTMLElement))return;let d=l.getBoundingClientRect();c.current={bounds:{height:d.height,left:d.left,top:d.top,width:d.width},offset:r.sub(o),plane:i,pointerId:e.pointerId},a(!0),A(e,"grabbing");try{e.target.setPointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}:void 0,onPointerMove:v?e=>{let n=c.current;if(!v)return;if(!n)return void A(e,j(e)?"grab":"auto");if(n.pointerId!==e.pointerId)return;if(0===e.buttons)return void k(e);let i=g(e,n.bounds).intersectPlane(n.plane,new p.Pq0);if(!i)return;let a=i.add(n.offset);t.current?.worldToLocal(a),o(r,(0,h.ih)(a.x,a.y,a.z)),e.stopPropagation()}:void 0,onPointerUp:v?k:void 0,onPointerCancel:v?k:void 0,onLostPointerCapture:v?k:void 0,onPointerOver:v?e=>A(e,j(e)?"grab":"auto"):void 0,onPointerOut:v?e=>A(e,c.current?"grabbing":"auto"):void 0,children:[v?(0,n.jsxs)(y,{children:[(0,n.jsx)(w,{args:[s.hitRadius??.36,16,12]}),(0,n.jsx)(S,{transparent:!0,opacity:0,depthWrite:!1})]}):null,(0,n.jsxs)(y,{children:[(0,n.jsx)(w,{args:[s.radius??.085,20,16]}),(0,n.jsx)(E,{color:e[s.role??"accent"]})]}),l&&s.label?(0,n.jsx)(x,{center:!0,position:[.18,.14,0],children:(0,n.jsx)(f.r,{latex:s.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:e[s.role??"accent"]}})}):null]})},O=({scene:e,ariaLabel:t,presentationMode:r,onDragPoint:i})=>{let a=(0,u.A)(),s=(0,d.useRef)(null),l=(0,d.useRef)(null),c=(0,d.useRef)(null),p=(e=>{let[t,r]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let t=e.current;if(!t)return;let n=()=>{let e=window.getComputedStyle(t),n=t=>e.getPropertyValue(t).trim()||e.color,i={accent:n("--learning-block-accent"),primary:n("--learning-block-color-primary"),secondary:n("--learning-block-color-secondary"),third:n("--learning-block-color-third"),fourth:n("--learning-block-color-fourth"),neutral:n("--text-secondary")};r(e=>e&&Object.keys(i).every(t=>e[t]===i[t])?e:i)};n();let i=new MutationObserver(n);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),i.observe(t,{attributes:!0,attributeFilter:["class","style"]}),()=>i.disconnect()},[e]),t})(s),f=(e=>{let[t,r]=(0,d.useState)(()=>"u"<typeof IntersectionObserver);return(0,d.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let n=new IntersectionObserver(([e])=>{r(e?.isIntersecting??!1)});return n.observe(t),()=>n.disconnect()},[e]),t})(s),m="thumbnail"===r,x=!m&&"fixed"!==e.cameraControls,[E,k]=(0,d.useState)(!1),z=e.extent??2.8,O=e.camera??[2.5*z,-(1.9*z),2.7*z];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:s,role:"img","aria-label":t,"aria-description":x?a.formatMessage(j.cameraInstructions):void 0,className:m?"text-token-text-primary relative h-full w-full overflow-hidden":"text-token-text-primary relative h-[246px] max-h-[270px] w-full overflow-hidden sm:h-[270px]",onKeyDown:x?e=>{let t=c.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+A);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-A);break;case"ArrowUp":t.setPolarAngle(t.getPolarAngle()-A);break;case"ArrowDown":t.setPolarAngle(t.getPolarAngle()+A);break;default:return}e.preventDefault()}}:void 0,tabIndex:x?0:void 0,children:p&&f?(0,n.jsxs)(v,{"data-learning-block-pan":x||!m&&i&&e.points?.some(e=>e.draggable)?"both":void 0,"aria-hidden":"true",camera:{position:O,fov:38},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0,powerPreference:"low-power"},style:{height:"100%",touchAction:m?"auto":"none",width:"100%"},children:[(0,n.jsx)(M,{position:O}),(0,n.jsx)("ambientLight",{intensity:1.5}),(0,n.jsx)("directionalLight",{position:[5,6,8],intensity:1.5}),(0,n.jsxs)(b,{ref:l,rotation:"y"===e.upAxis?void 0:[-Math.PI/2,0,0],children:[e.hideAxes?null:(0,n.jsx)(U,{colors:p,extent:z,extents:e.axisExtents,labelScale:e.axisLabelScale,labels:e.axisLabels,showLabels:!m}),e.surfaces?.map((e,t)=>(0,n.jsx)(C,{surface:e,colors:p},`surface-${t}`)),e.patches?.map((e,t)=>(0,n.jsx)(_,{patch:e,colors:p},`patch-${t}`)),e.curtains?.map((e,t)=>(0,n.jsx)(N,{curtain:e,colors:p},`curtain-${t}`)),e.lines?.map((e,t)=>(0,n.jsx)(g,{points:e.points.map(L),color:p[e.role??"primary"],lineWidth:e.width??1.7,transparent:!0,opacity:e.opacity??.9},`line-${t}`)),e.spheres?.map((e,t)=>(0,n.jsxs)(b,{position:L(e.center??(0,h.ih)(0,0,0)),children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(w,{args:[e.radius,32,24]}),(0,n.jsx)(S,{color:p[e.role??"secondary"],transparent:!0,opacity:e.opacity??.15,depthWrite:!1,side:2})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(w,{args:[e.radius,18,12]}),(0,n.jsx)(S,{color:p[e.role??"secondary"],transparent:!0,opacity:.28,wireframe:!0})]})]},`sphere-${t}`)),e.arrows?.map((e,t)=>(0,n.jsx)(P,{arrow:e,colors:p,showLabel:!m},`arrow-${t}`)),e.points?.map((e,t)=>(0,n.jsx)(R,{point:e,index:t,colors:p,coordinateGroupRef:l,interactive:!m,onDragActiveChange:k,onDragPoint:i,showLabel:!m},`point-${t}`))]}),x?(0,n.jsx)(o.N,{ref:c,enabled:!E,enableDamping:!1,enablePan:!1,enableZoom:!1,minPolarAngle:.18,maxPolarAngle:Math.PI-.18}):null]}):null}),!m&&i?e.points?.map((e,t)=>e.draggable?(0,n.jsx)("button",{type:"button","aria-label":e.ariaLabel,"aria-description":a.formatMessage(j.pointInstructions),className:"bg-token-main-surface-primary sr-only start-3 bottom-3 z-10 rounded-md text-xs focus:not-sr-only",style:{paddingBlock:"calc(var(--spacing) * 2)",paddingInline:"calc(var(--spacing) * 3)",position:"absolute"},onKeyDown:r=>{let n=e.keyboardStep??.1,a="ArrowLeft"===r.key?(0,h.ih)(-n,0,0):"ArrowRight"===r.key?(0,h.ih)(n,0,0):"ArrowDown"===r.key?(0,h.ih)(0,-n,0):"ArrowUp"===r.key?(0,h.ih)(0,n,0):"PageDown"===r.key?(0,h.ih)(0,0,-n):"PageUp"===r.key?(0,h.ih)(0,0,n):null;a&&(r.preventDefault(),r.stopPropagation(),i(t,(0,h.XT)(e.point,a)))},children:a.formatMessage(j.adjustPoint)},`point-control-${t}`):null):null]})},D=({scene:e,ariaLabel:t,presentationMode:r,onDragPoint:i})=>{let a=e.segments?.map(e=>({from:e.from,to:e.to,stroke:k[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity,strokeDasharray:e.dashed?"5 4":void 0,endMarker:e.arrow?"arrow":void 0})),o=e.polygons?.map(e=>({points:e.points,fill:k[e.role??"secondary"],opacity:e.opacity??.18})),s=e.circles?.map(e=>({center:e.center,radius:e.radius,stroke:k[e.role??"secondary"],strokeWidth:1.6,opacity:e.opacity})),l=e.points?.map(e=>({x:e.point.x,y:e.point.y,label:"thumbnail"===r?void 0:e.label,labelStyle:"derived_pill",draggable:"thumbnail"!==r&&e.draggable,ariaLabel:e.ariaLabel,keyboardStep:e.keyboardStep,appearance:{fill:k[e.role??"accent"],stroke:"var(--learning-block-visualization-surface, var(--bg-primary))",strokeWidth:2,radius:4}})),d=e.curves?.map(e=>({kind:"polyline",points:e.points,closed:e.closed,stroke:k[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity}));return(0,n.jsx)(m.W0,{ariaLabel:t,presentationMode:r,canvasSize:{width:360,height:265,padding:22},viewport:{mode:"bounds",bounds:e.bounds,paddingUnits:.18},segments:a,polygons:o,circles:s,points:l,onDragPoint:"thumbnail"!==r&&i?(e,t,r)=>i(e,(0,h.ih)(r.x,r.y,0)):void 0,series:d,xAxisLabel:"x",yAxisLabel:"y",showAxisLabels:"thumbnail"!==r,showCoordinateTooltip:e.showCoordinateTooltip})};r.d(t,{},{P:({scene:e,ariaLabel:t,presentationMode:r,onDragPoint:i})=>"three"===e.kind?(0,n.jsx)(O,{scene:e,ariaLabel:t,presentationMode:r,onDragPoint:i}):(0,n.jsx)(D,{scene:e,ariaLabel:t,presentationMode:r,onDragPoint:i})})}};
//# sourceMappingURL=969647.ed840f0010.js.map