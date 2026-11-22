export const __rspack_esm_ids=[421115];export const __webpack_modules__={Ipng(e,t,n){let r,i;n.d(t,{N:()=>k});var a=n("unhp"),o=n("zd8w"),s=n("PVZC"),l=n("hPwS");let d=new s.NRn,c=new s.Pq0;class u extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)c.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(c)),c.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n("STXV");let p=parseInt("179".replace(/\D+/g,""));class h extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${p>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let m=p>=125?"uv1":"uv2",g=new s.IUQ,v=new s.Pq0,y=new s.Pq0,x=new s.IUQ,b=new s.IUQ,w=new s.IUQ,S=new s.Pq0,M=new s.kn4,E=new s.cZY,A=new s.Pq0,P=new s.NRn,L=new s.iyt,j=new s.IUQ;function _(e,t,n){return j.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),j.multiplyScalar(1/j.w),j.x=i/n.width,j.y=i/n.height,j.applyMatrix4(e.projectionMatrixInverse),j.multiplyScalar(1/j.w),Math.abs(Math.max(j.x,j.y))}class I extends s.eaF{constructor(e=new u,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)v.fromBufferAttribute(t,e),y.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+v.distanceTo(y);let i=new s.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let n,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let c=this.matrixWorld,u=this.geometry,f=this.material;if(i=f.linewidth+d,null===u.boundingSphere&&u.computeBoundingSphere(),L.copy(u.boundingSphere).applyMatrix4(c),o)n=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(r.origin));n=_(l,e,f.resolution)}if(L.radius+=n,!1!==r.intersectsSphere(L)){if(null===u.boundingBox&&u.computeBoundingBox(),P.copy(u.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,P.distanceToPoint(r.origin));a=_(l,e,f.resolution)}P.expandByScalar(a),!1!==r.intersectsBox(P)&&(o?function(e,t){let n=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let a=0;a<d;a++){E.start.fromBufferAttribute(o,a),E.end.fromBufferAttribute(l,a),E.applyMatrix4(n);let d=new s.Pq0,c=new s.Pq0;r.distanceSqToSegment(E.start,E.end,c,d),c.distanceTo(d)<.5*i&&t.push({point:c,pointOnLine:d,distance:r.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[m]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,c=d.attributes.instanceStart,u=d.attributes.instanceEnd,f=Math.min(d.instanceCount,c.count),p=-t.near;r.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,S.copy(w),M.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(x.fromBufferAttribute(c,t),b.fromBufferAttribute(u,t),x.w=1,b.w=1,x.applyMatrix4(M),b.applyMatrix4(M),x.z>p&&b.z>p)continue;if(x.z>p){let e=x.z-b.z,t=(x.z-p)/e;x.lerp(b,t)}else if(b.z>p){let e=b.z-x.z,t=(b.z-p)/e;b.lerp(x,t)}x.applyMatrix4(a),b.applyMatrix4(a),x.multiplyScalar(1/x.w),b.multiplyScalar(1/b.w),x.x*=o.x/2,x.y*=o.y/2,b.x*=o.x/2,b.y*=o.y/2,E.start.copy(x),E.start.z=0,E.end.copy(b),E.end.z=0;let d=E.closestPointToPointParameter(S,!0);E.at(d,A);let f=s.cj9.lerp(x.z,b.z,d),h=f>=-1&&f<=1,g=S.distanceTo(A)<.5*i;if(h&&g){E.start.fromBufferAttribute(c,t),E.end.fromBufferAttribute(u,t),E.start.applyMatrix4(l),E.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;r.distanceSqToSegment(E.start,E.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[m]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(g),this.material.uniforms.resolution.value.set(g.z,g.w))}}class z extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends I{constructor(e=new z,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let k=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:d,dashed:c,...f},p){var m,g;let v=(0,l.C)(e=>e.size),y=o.useMemo(()=>d?new I:new C,[d]),[x]=o.useState(()=>new h),b=(null==n||null==(m=n[0])?void 0:m.length)===4?4:3,w=o.useMemo(()=>{let r=d?new u:new z,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);r.setColors(e.flat(),b)}return r},[e,d,n,b]);return o.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),o.useLayoutEffect(()=>{c?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[c,x]),o.useEffect(()=>()=>{w.dispose(),x.dispose()},[w]),o.createElement("primitive",(0,a.A)({object:y,ref:p},f),o.createElement("primitive",{object:w,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:x,attach:"material",color:t,vertexColors:!!n,resolution:[v.width,v.height],linewidth:null!=(g=null!=r?r:i)?g:1,dashed:c,transparent:4===b},f)))})},mevF(e,t,n){let r,i;var a=n("unhp"),o=n("zd8w"),s=n("CE87"),l=n("PVZC"),d=n("hPwS");let c=new l.Pq0,u=new l.Pq0,f=new l.Pq0,p=new l.I9Y;function h(e,t,n){let r=c.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}let m=e=>1e-10>Math.abs(e)?0:e;function g(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=m(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let v=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>g(e,r)),y=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>g(e,i(t),"translate(-50%,-50%)")),x=o.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:g,fullscreen:x,portal:b,distanceFactor:w,sprite:S=!1,transform:M=!1,occlude:E,onOcclude:A,castShadow:P,receiveShadow:L,material:j,geometry:_,zIndexRange:I=[0x1000037,0],calculatePosition:z=h,as:C="div",wrapperClass:k,pointerEvents:U="auto",...O},T)=>{let{gl:D,camera:B,scene:W,size:R,raycaster:N,events:H,viewport:$}=(0,d.C)(),[q]=o.useState(()=>document.createElement(C)),F=o.useRef(null),G=o.useRef(null),V=o.useRef(0),Y=o.useRef([0,0]),Q=o.useRef(null),Z=o.useRef(null),X=(null==b?void 0:b.current)||H.connected||D.domElement.parentNode,K=o.useRef(null),J=o.useRef(!1),ee=o.useMemo(()=>{var e;return E&&"blending"!==E||Array.isArray(E)&&E.length&&(e=E[0])&&"object"==typeof e&&"current"in e},[E]);o.useLayoutEffect(()=>{let e=D.domElement;E&&"blending"===E?(e.style.zIndex=`${Math.floor(I[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[E]),o.useLayoutEffect(()=>{if(G.current){let e=F.current=s.createRoot(q);if(W.updateMatrixWorld(),M)q.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=z(G.current,B,R);q.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return X&&(i?X.prepend(q):X.appendChild(q)),()=>{X&&X.removeChild(q),e.unmount()}}},[X,M]),o.useLayoutEffect(()=>{k&&(q.className=k)},[k]);let et=o.useMemo(()=>M?{position:"absolute",top:0,left:0,width:R.width,height:R.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:g?"translate3d(-50%,-50%,0)":"none",...x&&{top:-R.height/2,left:-R.width/2,width:R.width,height:R.height},...n},[n,g,x,R,M]),en=o.useMemo(()=>({position:"absolute",pointerEvents:U}),[U]);o.useLayoutEffect(()=>{var t,i;J.current=!1,M?null==(t=F.current)||t.render(o.createElement("div",{ref:Q,style:et},o.createElement("div",{ref:Z,style:en},o.createElement("div",{ref:T,className:r,style:n,children:e})))):null==(i=F.current)||i.render(o.createElement("div",{ref:T,style:et,className:r,children:e}))});let er=o.useRef(!0);(0,d.D)(e=>{if(G.current){B.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=M?Y.current:z(G.current,B,R);if(M||Math.abs(V.current-B.zoom)>t||Math.abs(Y.current[0]-e[0])>t||Math.abs(Y.current[1]-e[1])>t){var n;let t,r,i,a,o=(n=G.current,t=c.setFromMatrixPosition(n.matrixWorld),r=u.setFromMatrixPosition(B.matrixWorld),i=t.sub(r),a=B.getWorldDirection(f),i.angleTo(a)>Math.PI/2),s=!1;ee&&(Array.isArray(E)?s=E.map(e=>e.current):"blending"!==E&&(s=[W]));let d=er.current;s?er.current=function(e,t,n,r){let i=c.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),p.set(a.x,a.y),n.setFromCamera(p,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}(G.current,B,N,s)&&!o:er.current=!o,d!==er.current&&(A?A(!er.current):q.style.display=er.current?"block":"none");let h=Math.floor(I[0]/2),g=E?ee?[I[0],h]:[h-1,0]:I;if(q.style.zIndex=`${function(e,t,n){if(t instanceof l.ubm||t instanceof l.qUd){let r=c.setFromMatrixPosition(e.matrixWorld),i=u.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}(G.current,B,g)}`,M){let[e,t]=[R.width/2,R.height/2],n=B.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=B,l=v(B.matrixWorldInverse),d=r?`scale(${n})translate(${m(-(s+a)/2)}px,${m((i+o)/2)}px)`:`translateZ(${n}px)`,c=G.current.matrixWorld;S&&((c=B.matrixWorldInverse.clone().transpose().copyPosition(c).scale(G.current.scale)).elements[3]=c.elements[7]=c.elements[11]=0,c.elements[15]=1),q.style.width=R.width+"px",q.style.height=R.height+"px",q.style.perspective=r?"":`${n}px`,Q.current&&Z.current&&(Q.current.style.transform=`${d}${l}translate(${e}px,${t}px)`,Z.current.style.transform=y(c,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let n=c.setFromMatrixPosition(e.matrixWorld),r=u.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}(G.current,B)*w;q.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Y.current=e,V.current=B.zoom}}if(!ee&&K.current&&!J.current)if(M){if(Q.current){let e=Q.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=B;if(t||_)O.scale&&(Array.isArray(O.scale)?O.scale instanceof l.Pq0?K.current.scale.copy(O.scale.clone().divideScalar(1)):K.current.scale.set(1/O.scale[0],1/O.scale[1],1/O.scale[2]):K.current.scale.setScalar(1/O.scale));else{let t=(w||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;K.current.scale.set(n,r,1)}J.current=!0}}}else{let t=q.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/$.factor,n=t.clientWidth*e,r=t.clientHeight*e;K.current.scale.set(n,r,1),J.current=!0}K.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:M?void 0:`
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
      `}),[M]);return o.createElement("group",(0,a.A)({},O,{ref:G}),E&&!ee&&o.createElement("mesh",{castShadow:P,receiveShadow:L,ref:K},_||o.createElement("planeGeometry",null),j||o.createElement("shaderMaterial",{side:2,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))});n.d(t,{},{E:x})},tkCL(e,t,n){var r=n("ABep"),i=n("mevF"),a=n("Ipng"),o=n("Njew"),s=n("oeGO"),l=n("hPwS"),d=n("zd8w"),c=n("Qgfj"),u=n("Wf1j"),f=n("PVZC"),p=n("l7Go"),h=n("sCEh"),m=n("ZKaa");let g=s.Hl,v=i.E,y=a.N,x="group",b="mesh",w="sphereGeometry",S="meshBasicMaterial",M="meshStandardMaterial",E=Math.PI/12,A=(0,c.YK)({cameraInstructions:{id:"learningBlock.multivariable.cameraInstructions",defaultMessage:"Use the arrow keys to rotate the three-dimensional scene"},pointInstructions:{id:"learningBlock.multivariable.pointInstructions",defaultMessage:"Use the arrow keys to move horizontally or vertically, and Page Up or Page Down to move in depth"},adjustPoint:{id:"learningBlock.multivariable.adjustPoint",defaultMessage:"Adjust point"}}),P={accent:"var(--learning-block-accent)",primary:"var(--learning-block-color-primary)",secondary:"var(--learning-block-color-secondary)",third:"var(--learning-block-color-third)",fourth:"var(--learning-block-color-fourth)",neutral:"var(--text-secondary)"},L=({x:e,y:t,z:n})=>[e,t,n],j=({position:e})=>{let t=(0,l.C)(e=>e.camera),n=(0,l.C)(e=>e.invalidate);return(0,d.useEffect)(()=>{t.position.set(e[0],e[1],e[2]),t.lookAt(0,0,0),t.updateMatrixWorld(),n()},[t,n,e[0],e[1],e[2]]),null},_=({arrow:e,colors:t,showLabel:n})=>{let i=e.from??(0,m.ih)(0,0,0),a=(0,m.XT)(e.to,(0,m.oE)(i,-1)),o=(0,m.wi)(a);if(o<1e-5)return null;let s=(0,m.v7)(a),l=new f.PTz().setFromUnitVectors(new f.Pq0(0,1,0),new f.Pq0(s.x,s.y,s.z)),d=Math.min(e.headLength??(e.emphasis?.32:.24),.3*o),c=e.shaftRadius??(e.emphasis?.046:.034),u=e.headRadius??(e.emphasis?.13:.1),h=o-d,g=(0,m.XT)(i,(0,m.oE)(s,h/2)),y=(0,m.XT)(i,(0,m.oE)(s,h+d/2)),w=t[e.role??"primary"];return(0,r.jsxs)(x,{children:[(0,r.jsxs)(b,{position:L(g),quaternion:l.toArray(),children:[(0,r.jsx)("cylinderGeometry",{args:[c,c,h,16]}),(0,r.jsx)(M,{color:w,roughness:.45})]}),(0,r.jsxs)(b,{position:L(y),quaternion:l.toArray(),children:[(0,r.jsx)("coneGeometry",{args:[u,d,18]}),(0,r.jsx)(M,{color:w,roughness:.42})]}),n&&e.label?(0,r.jsx)(v,{center:!0,position:L((0,m.XT)(e.to,(0,m.oE)(s,.18))),children:(0,r.jsx)(p.r,{latex:e.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:w}})}):null]})},I=({patch:e,colors:t})=>{let n=(0,d.useMemo)(()=>{var t;let n;return t=e.corners,(n=new f.LoY).setAttribute("position",new f.qtW([0,1,2,0,2,3].flatMap(e=>L(t[e])),3)),n.computeVertexNormals(),n},[e.corners]);return(0,r.jsx)(b,{geometry:n,renderOrder:1,children:(0,r.jsx)(S,{color:t[e.role??"secondary"],side:2,transparent:!0,opacity:e.opacity??.16,depthWrite:!1})})},z=(e,t)=>{if(!t)return e.length>1?[e]:[];let n=[],r=[];return e.forEach((e,i)=>{t[i]?r.push(e):(r.length>1&&n.push(r),r=[])}),r.length>1&&n.push(r),n},C=(0,d.memo)(function({surface:e,colors:t}){let n=(0,d.useMemo)(()=>{let t=[];for(let n=0;n+1<e.grid.length;n+=1)for(let r=0;r+1<e.grid[n].length;r+=1){if(e.validity&&(!e.validity[n]?.[r]||!e.validity[n+1]?.[r]||!e.validity[n+1]?.[r+1]||!e.validity[n]?.[r+1]))continue;let i=e.grid[n][r],a=e.grid[n+1][r],o=e.grid[n+1][r+1],s=e.grid[n][r+1];t.push(...L(i),...L(a),...L(o)),t.push(...L(i),...L(o),...L(s))}let n=new f.LoY;return n.setAttribute("position",new f.qtW(t,3)),n.computeVertexNormals(),n},[e.grid,e.validity]),i=t[e.role??"secondary"],a=e.grid[0]?.length??0,o=(0,d.useMemo)(()=>e.grid.flatMap((t,n)=>z(t,e.validity?.[n]).map((e,t)=>({key:`row-${n}-${t}`,points:e.map(L)}))),[e.grid,e.validity]),s=(0,d.useMemo)(()=>Array.from({length:a},(t,n)=>({points:e.grid.map(e=>e[n]),validity:e.validity?.map(e=>e[n])})).flatMap(({points:e,validity:t},n)=>z(e,t).map((e,t)=>({key:`column-${n}-${t}`,points:e.map(L)}))),[a,e.grid,e.validity]);return(0,r.jsxs)(x,{children:[(0,r.jsx)(b,{geometry:n,renderOrder:1,children:(0,r.jsx)(S,{color:i,side:2,transparent:!0,opacity:e.opacity??.17,depthWrite:!1})}),o.map(({key:t,points:n})=>(0,r.jsx)(y,{points:n,color:i,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t)),s.map(({key:t,points:n})=>(0,r.jsx)(y,{points:n,color:i,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t))]})}),k=({curtain:e,colors:t})=>{let n=(0,d.useMemo)(()=>{let t=[],n=Math.min(e.upper.length,e.lower.length);for(let r=0;r+1<n;r+=1){let n=e.upper[r],i=e.upper[r+1],a=e.lower[r],o=e.lower[r+1];t.push(...L(n),...L(a),...L(o),...L(n),...L(o),...L(i))}let r=new f.LoY;return r.setAttribute("position",new f.qtW(t,3)),r.computeVertexNormals(),r},[e.lower,e.upper]);return(0,r.jsx)(b,{geometry:n,renderOrder:1,children:(0,r.jsx)(S,{color:t[e.role??"primary"],side:2,transparent:!0,opacity:e.opacity??.22,depthWrite:!1})})},U=({colors:e,extent:t,extents:n,labelScale:i=1,labels:a=["x","y","z"],showLabels:o})=>(0,r.jsx)(x,{children:[{endpoint:(0,m.ih)(n?.[0]??t,0,0),label:a[0]},{endpoint:(0,m.ih)(0,n?.[1]??t,0),label:a[1]},{endpoint:(0,m.ih)(0,0,n?.[2]??t),label:a[2]}].map(({endpoint:t,label:n})=>(0,r.jsxs)(x,{children:[(0,r.jsx)(y,{points:[L((0,m.oE)(t,-1)),L(t)],color:e.neutral,transparent:!0,opacity:.32,lineWidth:.85}),o?(0,r.jsx)(v,{center:!0,position:L((0,m.oE)(t,i)),children:(0,r.jsx)(p.r,{latex:n,className:"pointer-events-none text-xs whitespace-nowrap",style:{color:e.neutral}})}):null]},n))}),O=({colors:e,coordinateGroupRef:t,index:n,interactive:i,onDragActiveChange:a,onDragPoint:o,point:s,showLabel:l})=>{let c=(0,d.useRef)(null),u=(0,d.useRef)(new f.I9Y),h=(0,d.useRef)(null),g=i&&s.draggable&&void 0!==o,y=(e,t)=>{let n=e.nativeEvent.target;if(!(n instanceof HTMLElement))return e.ray;let r=t??n.getBoundingClientRect();return 0===r.width||0===r.height?e.ray:(u.current.set((e.nativeEvent.clientX-r.left)/r.width*2-1,-(2*((e.nativeEvent.clientY-r.top)/r.height))+1),h.current??=new f.tBo,h.current.setFromCamera(u.current,e.camera),h.current.ray)},E=(e,t)=>{let n=e.nativeEvent.target;n instanceof HTMLElement&&(n.style.cursor=t)},A=e=>{if(void 0===s.hitTolerancePixels)return!0;let n=e.nativeEvent.target,r=t.current;if(!(n instanceof HTMLElement)||!r)return!0;let i=n.getBoundingClientRect();if(0===i.width||0===i.height)return!0;r.updateWorldMatrix(!0,!1);let a=t=>{let n=r.localToWorld(new f.Pq0(t.x,t.y,t.z)).project(e.camera);return{x:i.left+(n.x+1)*i.width/2,y:i.top+(1-n.y)*i.height/2}},o=a(s.point),l=a(s.dragOrigin??s.point),d=o.x-l.x,c=o.y-l.y,u=d*d+c*c,p=u>0?Math.min(1,Math.max(0,((e.nativeEvent.clientX-l.x)*d+(e.nativeEvent.clientY-l.y)*c)/u)):1,h=l.x+p*d,m=l.y+p*c,g="touch"===e.nativeEvent.pointerType?Math.max(s.hitTolerancePixels,22):s.hitTolerancePixels;return Math.hypot(e.nativeEvent.clientX-h,e.nativeEvent.clientY-m)<=g},P=e=>{let t=c.current;if(t&&t.pointerId===e.pointerId){c.current=null,a(!1),E(e,"grab");try{e.target.releasePointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}};return(0,r.jsxs)(x,{position:L(s.point),onPointerDown:g?e=>{if(!g||!A(e))return;let n=new f.Pq0(s.point.x,s.point.y,s.point.z);t.current?.updateWorldMatrix(!0,!1),t.current?.localToWorld(n);let r=e.camera.getWorldDirection(new f.Pq0),i=new f.Zcv().setFromNormalAndCoplanarPoint(r,n),o=y(e).intersectPlane(i,new f.Pq0);if(!o)return;let l=e.nativeEvent.target;if(!(l instanceof HTMLElement))return;let d=l.getBoundingClientRect();c.current={bounds:{height:d.height,left:d.left,top:d.top,width:d.width},offset:n.sub(o),plane:i,pointerId:e.pointerId},a(!0),E(e,"grabbing");try{e.target.setPointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}:void 0,onPointerMove:g?e=>{let r=c.current;if(!g)return;if(!r)return void E(e,A(e)?"grab":"auto");if(r.pointerId!==e.pointerId)return;if(0===e.buttons)return void P(e);let i=y(e,r.bounds).intersectPlane(r.plane,new f.Pq0);if(!i)return;let a=i.add(r.offset);t.current?.worldToLocal(a),o(n,(0,m.ih)(a.x,a.y,a.z)),e.stopPropagation()}:void 0,onPointerUp:g?P:void 0,onPointerCancel:g?P:void 0,onLostPointerCapture:g?P:void 0,onPointerOver:g?e=>E(e,A(e)?"grab":"auto"):void 0,onPointerOut:g?e=>E(e,c.current?"grabbing":"auto"):void 0,children:[g?(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{args:[s.hitRadius??.36,16,12]}),(0,r.jsx)(S,{transparent:!0,opacity:0,depthWrite:!1})]}):null,(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{args:[s.radius??.085,20,16]}),(0,r.jsx)(M,{color:e[s.role??"accent"]})]}),l&&s.label?(0,r.jsx)(v,{center:!0,position:[.18,.14,0],children:(0,r.jsx)(p.r,{latex:s.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:e[s.role??"accent"]}})}):null]})},T=({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:i})=>{let a=(0,u.A)(),s=(0,d.useRef)(null),l=(0,d.useRef)(null),c=(0,d.useRef)(null),f=(e=>{let[t,n]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e=window.getComputedStyle(t),r=t=>e.getPropertyValue(t).trim()||e.color,i={accent:r("--learning-block-accent"),primary:r("--learning-block-color-primary"),secondary:r("--learning-block-color-secondary"),third:r("--learning-block-color-third"),fourth:r("--learning-block-color-fourth"),neutral:r("--text-secondary")};n(e=>e&&Object.keys(i).every(t=>e[t]===i[t])?e:i)};r();let i=new MutationObserver(r);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),i.observe(t,{attributes:!0,attributeFilter:["class","style"]}),()=>i.disconnect()},[e]),t})(s),p=(e=>{let[t,n]=(0,d.useState)(()=>"u"<typeof IntersectionObserver);return(0,d.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let r=new IntersectionObserver(([e])=>{n(e?.isIntersecting??!1)});return r.observe(t),()=>r.disconnect()},[e]),t})(s),h="thumbnail"===n,v=!h&&"fixed"!==e.cameraControls,[M,P]=(0,d.useState)(!1),z=e.extent??2.8,T=e.camera??[2.5*z,-(1.9*z),2.7*z];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:s,role:"img","aria-label":t,"aria-description":v?a.formatMessage(A.cameraInstructions):void 0,className:h?"text-token-text-primary relative h-full w-full overflow-hidden":"text-token-text-primary relative h-[246px] max-h-[270px] w-full overflow-hidden sm:h-[270px]",onKeyDown:v?e=>{let t=c.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+E);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-E);break;case"ArrowUp":t.setPolarAngle(t.getPolarAngle()-E);break;case"ArrowDown":t.setPolarAngle(t.getPolarAngle()+E);break;default:return}e.preventDefault()}}:void 0,tabIndex:v?0:void 0,children:f&&p?(0,r.jsxs)(g,{"data-learning-block-pan":v||!h&&i&&e.points?.some(e=>e.draggable)?"both":void 0,"aria-hidden":"true",camera:{position:T,fov:38},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0,powerPreference:"low-power"},style:{height:"100%",touchAction:h?"auto":"none",width:"100%"},children:[(0,r.jsx)(j,{position:T}),(0,r.jsx)("ambientLight",{intensity:1.5}),(0,r.jsx)("directionalLight",{position:[5,6,8],intensity:1.5}),(0,r.jsxs)(x,{ref:l,rotation:"y"===e.upAxis?void 0:[-Math.PI/2,0,0],children:[e.hideAxes?null:(0,r.jsx)(U,{colors:f,extent:z,extents:e.axisExtents,labelScale:e.axisLabelScale,labels:e.axisLabels,showLabels:!h}),e.surfaces?.map((e,t)=>(0,r.jsx)(C,{surface:e,colors:f},`surface-${t}`)),e.patches?.map((e,t)=>(0,r.jsx)(I,{patch:e,colors:f},`patch-${t}`)),e.curtains?.map((e,t)=>(0,r.jsx)(k,{curtain:e,colors:f},`curtain-${t}`)),e.lines?.map((e,t)=>(0,r.jsx)(y,{points:e.points.map(L),color:f[e.role??"primary"],lineWidth:e.width??1.7,transparent:!0,opacity:e.opacity??.9},`line-${t}`)),e.spheres?.map((e,t)=>(0,r.jsxs)(x,{position:L(e.center??(0,m.ih)(0,0,0)),children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{args:[e.radius,32,24]}),(0,r.jsx)(S,{color:f[e.role??"secondary"],transparent:!0,opacity:e.opacity??.15,depthWrite:!1,side:2})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{args:[e.radius,18,12]}),(0,r.jsx)(S,{color:f[e.role??"secondary"],transparent:!0,opacity:.28,wireframe:!0})]})]},`sphere-${t}`)),e.arrows?.map((e,t)=>(0,r.jsx)(_,{arrow:e,colors:f,showLabel:!h},`arrow-${t}`)),e.points?.map((e,t)=>(0,r.jsx)(O,{point:e,index:t,colors:f,coordinateGroupRef:l,interactive:!h,onDragActiveChange:P,onDragPoint:i,showLabel:!h},`point-${t}`))]}),v?(0,r.jsx)(o.N,{ref:c,enabled:!M,enableDamping:!1,enablePan:!1,enableZoom:!1,minPolarAngle:.18,maxPolarAngle:Math.PI-.18}):null]}):null}),!h&&i?e.points?.map((e,t)=>e.draggable?(0,r.jsx)("button",{type:"button","aria-label":e.ariaLabel,"aria-description":a.formatMessage(A.pointInstructions),className:"bg-token-main-surface-primary sr-only start-3 bottom-3 z-10 rounded-md text-xs focus:not-sr-only",style:{paddingBlock:"calc(var(--spacing) * 2)",paddingInline:"calc(var(--spacing) * 3)",position:"absolute"},onKeyDown:n=>{let r=e.keyboardStep??.1,a="ArrowLeft"===n.key?(0,m.ih)(-r,0,0):"ArrowRight"===n.key?(0,m.ih)(r,0,0):"ArrowDown"===n.key?(0,m.ih)(0,-r,0):"ArrowUp"===n.key?(0,m.ih)(0,r,0):"PageDown"===n.key?(0,m.ih)(0,0,-r):"PageUp"===n.key?(0,m.ih)(0,0,r):null;a&&(n.preventDefault(),n.stopPropagation(),i(t,(0,m.XT)(e.point,a)))},children:a.formatMessage(A.adjustPoint)},`point-control-${t}`):null):null]})},D=({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:i})=>{let a=e.segments?.map(e=>({from:e.from,to:e.to,stroke:P[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity,strokeDasharray:e.dashed?"5 4":void 0,endMarker:e.arrow?"arrow":void 0})),o=e.polygons?.map(e=>({points:e.points,fill:P[e.role??"secondary"],opacity:e.opacity??.18})),s=e.circles?.map(e=>({center:e.center,radius:e.radius,stroke:P[e.role??"secondary"],strokeWidth:1.6,opacity:e.opacity})),l=e.points?.map(e=>({x:e.point.x,y:e.point.y,label:"thumbnail"===n?void 0:e.label,labelStyle:"derived_pill",draggable:"thumbnail"!==n&&e.draggable,ariaLabel:e.ariaLabel,keyboardStep:e.keyboardStep,appearance:{fill:P[e.role??"accent"],stroke:"var(--learning-block-visualization-surface, var(--bg-primary))",strokeWidth:2,radius:4}})),d=e.curves?.map(e=>({kind:"polyline",points:e.points,closed:e.closed,stroke:P[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity}));return(0,r.jsx)(h.W0,{ariaLabel:t,presentationMode:n,canvasSize:{width:360,height:265,padding:22},viewport:{mode:"bounds",bounds:e.bounds,paddingUnits:.18},segments:a,polygons:o,circles:s,points:l,onDragPoint:"thumbnail"!==n&&i?(e,t,n)=>i(e,(0,m.ih)(n.x,n.y,0)):void 0,series:d,xAxisLabel:"x",yAxisLabel:"y",showAxisLabels:"thumbnail"!==n,showCoordinateTooltip:e.showCoordinateTooltip})};n.d(t,{},{P:({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:i})=>"three"===e.kind?(0,r.jsx)(T,{scene:e,ariaLabel:t,presentationMode:n,onDragPoint:i}):(0,r.jsx)(D,{scene:e,ariaLabel:t,presentationMode:n,onDragPoint:i})})},bKUr(e,t,n){var r=n("ABep"),i=n("Qgfj"),a=n("Wf1j"),o=n("oyxz"),s=n("KwmQ"),l=n("pNxJ"),d=n("tkCL"),c=n("Yqcp");let u=(0,i.YK)({targetLegend:{id:"learningBlock.shiftedInverseIteration.targetLegend",defaultMessage:"Target eigenvector"},iterateLegend:{id:"learningBlock.shiftedInverseIteration.iterateLegend",defaultMessage:"Current vector"},modeSelector:{id:"learningBlock.shiftedInverseIteration.modeSelector",defaultMessage:"Iteration method"},shiftedMode:{id:"learningBlock.shiftedInverseIteration.shiftedMode",defaultMessage:"Shifted"},inverseMode:{id:"learningBlock.shiftedInverseIteration.inverseMode",defaultMessage:"Inverse"},shiftedInverseMode:{id:"learningBlock.shiftedInverseIteration.shiftedInverseMode",defaultMessage:"Shifted inverse"},iterationsLabel:{id:"learningBlock.shiftedInverseIteration.iterationsLabel",defaultMessage:"Iterations"},coordinates:{id:"learningBlock.shiftedInverseIteration.coordinates",defaultMessage:"({x}, {y}, {z})"}}),f={shifted:u.shiftedMode,inverse:u.inverseMode,shifted_inverse:u.shiftedInverseMode},p=(e,t,n=3)=>e.formatNumber(Object.is(t,-0)?0:t,{maximumFractionDigits:n,useGrouping:!1}),h=(e,t)=>`\\begin{bmatrix}${p(e,t.x)}\\\\${p(e,t.y)}\\\\${p(e,t.z)}\\end{bmatrix}`,m=(e,t)=>e.formatMessage(u.coordinates,{x:p(e,t.x),y:p(e,t.y),z:p(e,t.z)});n.d(t,{},{ShiftedInverseIterationCaption:({values:e})=>{var t;let n=(0,a.A)(),i=(0,c.TQ)(e),l=`${(0,c.ip)(i.mode)}=${h(n,i.targetDirection)}`,d=`\\mu=${p(n,i.shift)}`,u=`\\mathbf{x}_{${p(n,i.values.iteration,0)}}=${h(n,i.vector)}`,f=Math.max(0,i.values.iteration-1),m=`\\mathbf{x}_{${p(n,f,0)}}`,g=`${"shifted"===(t=i.mode)?"(A-\\mu I)":"inverse"===t?"A^{-1}":"(A-\\mu I)^{-1}"}${m}`,v=0===i.values.iteration?u:`\\frac{${g}}{\\lVert ${g}\\rVert}=${u}`;return(0,r.jsxs)(s.Vq,{reserveLines:3,children:[(0,r.jsxs)("div",{className:"flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1",children:[(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(s.OZ,{content:l,format:"katex"})}),"inverse"!==i.mode?(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(s.OZ,{content:d,format:"katex"})}):null]}),(0,r.jsx)(s.OZ,{content:v,format:"katex"}),(0,r.jsx)(s.OZ,{children:(0,r.jsx)(o.A,{id:"learningBlock.shiftedInverseIteration.angleSummary",defaultMessage:"Angle to the target eigenvector: {angle}\xb0",values:{angle:p(n,i.angleDegrees,1)}})})]})},ShiftedInverseIterationControls:({values:e,setValues:t})=>{let n=(0,a.A)(),i=(0,c.TQ)(e),d=n.formatMessage(u.iterationsLabel);return(0,r.jsx)(s.Ur,{screenReaderContent:(0,r.jsx)(o.A,{id:"learningBlock.shiftedInverseIteration.controlsDescription",defaultMessage:"Choose shifted, inverse, or shifted-inverse iteration, then increase the iteration count to approach that method's target eigenvector."}),children:(0,r.jsx)(l.J,{inputs:[{min:0,max:c.k6.length-1,step:1,value:c.k6.indexOf(i.mode),ariaLabel:n.formatMessage(u.modeSelector),options:c.k6.map((e,t)=>({value:t,label:n.formatMessage(f[e])})),onChange:e=>t({mode:c.k6[e]??"shifted",iteration:0},"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")},{min:0,max:8,step:1,value:i.values.iteration,variable:d,variableFormat:"text",sliderStyle:"stepped",ariaLabel:d,ariaValueText:n.formatMessage({id:"learningBlock.shiftedInverseIteration.iterationValue",defaultMessage:"{iteration, plural, =0 {No iterations} one {# iteration} other {# iterations}}; {angleCount, plural, one {{angle} degree} other {{angle} degrees}} from the target eigenvector"},{iteration:i.values.iteration,angle:p(n,i.angleDegrees,1),angleCount:Math.round(10*i.angleDegrees)/10}),formatValueForInput:e=>p(n,e,0),onChange:e=>t(t=>(0,c.Mm)({...t,iteration:e}),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}]})})},ShiftedInverseIterationVisualization:({values:e,presentationMode:t})=>{let n=(0,a.A)(),i=(0,c.TQ)(e),s="thumbnail"===t,l=(0,c.lm)(i),h=n.formatMessage({id:"learningBlock.shiftedInverseIteration.visualizationDescription",defaultMessage:"{method}, iteration {iteration}. Current vector {vector} approaches the eigenvector {eigenvector} for eigenvalue {eigenvalue}; the angle between them is {angleCount, plural, one {{angle} degree} other {{angle} degrees}}."},{method:n.formatMessage(f[i.mode]),iteration:p(n,i.values.iteration,0),vector:m(n,i.vector),eigenvector:m(n,i.dominantEigenvector),eigenvalue:p(n,i.dominantEigenvalue),angle:p(n,i.angleDegrees,1),angleCount:Math.round(10*i.angleDegrees)/10});return(0,r.jsxs)("div",{className:s?"relative h-full w-full":"relative w-full",children:[(0,r.jsx)(d.P,{scene:l,ariaLabel:h,presentationMode:t}),s?null:(0,r.jsxs)("div",{"aria-hidden":"true",className:"pointer-events-none absolute start-3 top-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs",children:[(0,r.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,r.jsx)("span",{className:"size-2 rounded-full",style:{backgroundColor:"var(--learning-block-color-primary)"}}),(0,r.jsx)(o.A,{...u.targetLegend})]}),(0,r.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,r.jsx)("span",{className:"size-2 rounded-full",style:{backgroundColor:"var(--learning-block-color-secondary)"}}),(0,r.jsx)(o.A,{...u.iterateLegend})]})]})]})}})}};
//# sourceMappingURL=421115.d94bb46738.js.map