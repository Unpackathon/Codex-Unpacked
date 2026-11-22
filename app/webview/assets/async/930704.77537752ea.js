export const __rspack_esm_ids=[930704];export const __webpack_modules__={Ipng(e,t,n){let i,r;n.d(t,{N:()=>U});var a=n("unhp"),o=n("zd8w"),s=n("PVZC"),l=n("hPwS");let c=new s.NRn,d=new s.Pq0;class u extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(i,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)d.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(d)),d.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var p=n("STXV");let f=parseInt("179".replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=f>=125?"uv1":"uv2",g=new s.IUQ,v=new s.Pq0,y=new s.Pq0,x=new s.IUQ,b=new s.IUQ,w=new s.IUQ,S=new s.Pq0,E=new s.kn4,M=new s.cZY,A=new s.Pq0,P=new s.NRn,j=new s.iyt,L=new s.IUQ;function _(e,t,n){return L.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),L.multiplyScalar(1/L.w),L.x=r/n.width,L.y=r/n.height,L.applyMatrix4(e.projectionMatrixInverse),L.multiplyScalar(1/L.w),Math.abs(Math.max(L.x,L.y))}class k extends s.eaF{constructor(e=new u,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,r=0,a=t.count;e<a;e++,r+=2)v.fromBufferAttribute(t,e),y.fromBufferAttribute(n,e),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+v.distanceTo(y);let r=new s.LuO(i,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(r,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(r,1,1)),this}raycast(e,t){let n,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;i=e.ray;let d=this.matrixWorld,u=this.geometry,p=this.material;if(r=p.linewidth+c,null===u.boundingSphere&&u.computeBoundingSphere(),j.copy(u.boundingSphere).applyMatrix4(d),o)n=.5*r;else{let e=Math.max(l.near,j.distanceToPoint(i.origin));n=_(l,e,p.resolution)}if(j.radius+=n,!1!==i.intersectsSphere(j)){if(null===u.boundingBox&&u.computeBoundingBox(),P.copy(u.boundingBox).applyMatrix4(d),o)a=.5*r;else{let e=Math.max(l.near,P.distanceToPoint(i.origin));a=_(l,e,p.resolution)}P.expandByScalar(a),!1!==i.intersectsBox(P)&&(o?function(e,t){let n=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,c=Math.min(a.instanceCount,o.count);for(let a=0;a<c;a++){M.start.fromBufferAttribute(o,a),M.end.fromBufferAttribute(l,a),M.applyMatrix4(n);let c=new s.Pq0,d=new s.Pq0;i.distanceSqToSegment(M.start,M.end,d,c),d.distanceTo(c)<.5*r&&t.push({point:d,pointOnLine:c,distance:i.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,c=e.geometry,d=c.attributes.instanceStart,u=c.attributes.instanceEnd,p=Math.min(c.instanceCount,d.count),f=-t.near;i.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,S.copy(w),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<p;t++){if(x.fromBufferAttribute(d,t),b.fromBufferAttribute(u,t),x.w=1,b.w=1,x.applyMatrix4(E),b.applyMatrix4(E),x.z>f&&b.z>f)continue;if(x.z>f){let e=x.z-b.z,t=(x.z-f)/e;x.lerp(b,t)}else if(b.z>f){let e=b.z-x.z,t=(b.z-f)/e;b.lerp(x,t)}x.applyMatrix4(a),b.applyMatrix4(a),x.multiplyScalar(1/x.w),b.multiplyScalar(1/b.w),x.x*=o.x/2,x.y*=o.y/2,b.x*=o.x/2,b.y*=o.y/2,M.start.copy(x),M.start.z=0,M.end.copy(b),M.end.z=0;let c=M.closestPointToPointParameter(S,!0);M.at(c,A);let p=s.cj9.lerp(x.z,b.z,c),m=p>=-1&&p<=1,g=S.distanceTo(A)<.5*r;if(m&&g){M.start.fromBufferAttribute(d,t),M.end.fromBufferAttribute(u,t),M.start.applyMatrix4(l),M.end.applyMatrix4(l);let r=new s.Pq0,a=new s.Pq0;i.distanceSqToSegment(M.start,M.end,a,r),n.push({point:a,pointOnLine:r,distance:i.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(g),this.material.uniforms.resolution.value.set(g.z,g.w))}}class z extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];else for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5],i[2*r+6]=e[r+6],i[2*r+7]=e[r+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends k{constructor(e=new z,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let U=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:r,segments:c,dashed:d,...p},f){var h,g;let v=(0,l.C)(e=>e.size),y=o.useMemo(()=>c?new k:new C,[c]),[x]=o.useState(()=>new m),b=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,w=o.useMemo(()=>{let i=c?new u:new z,r=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(r.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);i.setColors(e.flat(),b)}return i},[e,c,n,b]);return o.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),o.useLayoutEffect(()=>{d?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[d,x]),o.useEffect(()=>()=>{w.dispose(),x.dispose()},[w]),o.createElement("primitive",(0,a.A)({object:y,ref:f},p),o.createElement("primitive",{object:w,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:x,attach:"material",color:t,vertexColors:!!n,resolution:[v.width,v.height],linewidth:null!=(g=null!=i?i:r)?g:1,dashed:d,transparent:4===b},p)))})},mevF(e,t,n){let i,r;var a=n("unhp"),o=n("zd8w"),s=n("CE87"),l=n("PVZC"),c=n("hPwS");let d=new l.Pq0,u=new l.Pq0,p=new l.Pq0,f=new l.I9Y;function m(e,t,n){let i=d.setFromMatrixPosition(e.matrixWorld);i.project(t);let r=n.width/2,a=n.height/2;return[i.x*r+r,-(i.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function g(e,t,n=""){let i="matrix3d(";for(let n=0;16!==n;n++)i+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+i}let v=(i=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>g(e,i)),y=(r=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>g(e,r(t),"translate(-50%,-50%)")),x=o.forwardRef(({children:e,eps:t=.001,style:n,className:i,prepend:r,center:g,fullscreen:x,portal:b,distanceFactor:w,sprite:S=!1,transform:E=!1,occlude:M,onOcclude:A,castShadow:P,receiveShadow:j,material:L,geometry:_,zIndexRange:k=[0x1000037,0],calculatePosition:z=m,as:C="div",wrapperClass:U,pointerEvents:O="auto",...I},D)=>{let{gl:T,camera:B,scene:R,size:W,raycaster:N,events:H,viewport:q}=(0,c.C)(),[$]=o.useState(()=>document.createElement(C)),F=o.useRef(null),G=o.useRef(null),V=o.useRef(0),Y=o.useRef([0,0]),X=o.useRef(null),Z=o.useRef(null),Q=(null==b?void 0:b.current)||H.connected||T.domElement.parentNode,K=o.useRef(null),J=o.useRef(!1),ee=o.useMemo(()=>{var e;return M&&"blending"!==M||Array.isArray(M)&&M.length&&(e=M[0])&&"object"==typeof e&&"current"in e},[M]);o.useLayoutEffect(()=>{let e=T.domElement;M&&"blending"===M?(e.style.zIndex=`${Math.floor(k[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[M]),o.useLayoutEffect(()=>{if(G.current){let e=F.current=s.createRoot($);if(R.updateMatrixWorld(),E)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=z(G.current,B,W);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(r?Q.prepend($):Q.appendChild($)),()=>{Q&&Q.removeChild($),e.unmount()}}},[Q,E]),o.useLayoutEffect(()=>{U&&($.className=U)},[U]);let et=o.useMemo(()=>E?{position:"absolute",top:0,left:0,width:W.width,height:W.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:g?"translate3d(-50%,-50%,0)":"none",...x&&{top:-W.height/2,left:-W.width/2,width:W.width,height:W.height},...n},[n,g,x,W,E]),en=o.useMemo(()=>({position:"absolute",pointerEvents:O}),[O]);o.useLayoutEffect(()=>{var t,r;J.current=!1,E?null==(t=F.current)||t.render(o.createElement("div",{ref:X,style:et},o.createElement("div",{ref:Z,style:en},o.createElement("div",{ref:D,className:i,style:n,children:e})))):null==(r=F.current)||r.render(o.createElement("div",{ref:D,style:et,className:i,children:e}))});let ei=o.useRef(!0);(0,c.D)(e=>{if(G.current){B.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=E?Y.current:z(G.current,B,W);if(E||Math.abs(V.current-B.zoom)>t||Math.abs(Y.current[0]-e[0])>t||Math.abs(Y.current[1]-e[1])>t){var n;let t,i,r,a,o=(n=G.current,t=d.setFromMatrixPosition(n.matrixWorld),i=u.setFromMatrixPosition(B.matrixWorld),r=t.sub(i),a=B.getWorldDirection(p),r.angleTo(a)>Math.PI/2),s=!1;ee&&(Array.isArray(M)?s=M.map(e=>e.current):"blending"!==M&&(s=[R]));let c=ei.current;s?ei.current=function(e,t,n,i){let r=d.setFromMatrixPosition(e.matrixWorld),a=r.clone();a.project(t),f.set(a.x,a.y),n.setFromCamera(f,t);let o=n.intersectObjects(i,!0);if(o.length){let e=o[0].distance;return r.distanceTo(n.ray.origin)<e}return!0}(G.current,B,N,s)&&!o:ei.current=!o,c!==ei.current&&(A?A(!ei.current):$.style.display=ei.current?"block":"none");let m=Math.floor(k[0]/2),g=M?ee?[k[0],m]:[m-1,0]:k;if($.style.zIndex=`${function(e,t,n){if(t instanceof l.ubm||t instanceof l.qUd){let i=d.setFromMatrixPosition(e.matrixWorld),r=u.setFromMatrixPosition(t.matrixWorld),a=i.distanceTo(r),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}(G.current,B,g)}`,E){let[e,t]=[W.width/2,W.height/2],n=B.projectionMatrix.elements[5]*t,{isOrthographicCamera:i,top:r,left:a,bottom:o,right:s}=B,l=v(B.matrixWorldInverse),c=i?`scale(${n})translate(${h(-(s+a)/2)}px,${h((r+o)/2)}px)`:`translateZ(${n}px)`,d=G.current.matrixWorld;S&&((d=B.matrixWorldInverse.clone().transpose().copyPosition(d).scale(G.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),$.style.width=W.width+"px",$.style.height=W.height+"px",$.style.perspective=i?"":`${n}px`,X.current&&Z.current&&(X.current.style.transform=`${c}${l}translate(${e}px,${t}px)`,Z.current.style.transform=y(d,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let n=d.setFromMatrixPosition(e.matrixWorld),i=u.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(i))}}(G.current,B)*w;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Y.current=e,V.current=B.zoom}}if(!ee&&K.current&&!J.current)if(E){if(X.current){let e=X.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=B;if(t||_)I.scale&&(Array.isArray(I.scale)?I.scale instanceof l.Pq0?K.current.scale.copy(I.scale.clone().divideScalar(1)):K.current.scale.set(1/I.scale[0],1/I.scale[1],1/I.scale[2]):K.current.scale.setScalar(1/I.scale));else{let t=(w||10)/400,n=e.clientWidth*t,i=e.clientHeight*t;K.current.scale.set(n,i,1)}J.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/q.factor,n=t.clientWidth*e,i=t.clientHeight*e;K.current.scale.set(n,i,1),J.current=!0}K.current.lookAt(e.camera.position)}});let er=o.useMemo(()=>({vertexShader:E?void 0:`
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
      `}),[E]);return o.createElement("group",(0,a.A)({},I,{ref:G}),M&&!ee&&o.createElement("mesh",{castShadow:P,receiveShadow:j,ref:K},_||o.createElement("planeGeometry",null),L||o.createElement("shaderMaterial",{side:2,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader})))});n.d(t,{},{E:x})},SqdN(e,t,n){var i=n("ABep"),r=n("Qgfj"),a=n("Wf1j"),o=n("oyxz"),s=n("KwmQ"),l=n("pNxJ"),c=n("tkCL"),d=n("ElcG");let u=(0,r.YK)({rankSelector:{id:"learningBlock.columnSpace.rankSelector",defaultMessage:"Matrix rank"},rankOption:{id:"learningBlock.columnSpace.rankOption",defaultMessage:"Rank {rank}"},inputVectorLegend:{id:"learningBlock.columnSpace.inputVectorLegend",defaultMessage:"Input vector"},columnSpaceLegend:{id:"learningBlock.columnSpace.columnSpaceLegend",defaultMessage:"Column space"},dragInstruction:{id:"learningBlock.columnSpace.dragInstruction",defaultMessage:"Drag the input vector"},inputVectorHandle:{id:"learningBlock.columnSpace.inputVectorHandle",defaultMessage:"Input vector, coordinates ({x}, {y}, {z})"},line:{id:"learningBlock.columnSpace.line",defaultMessage:"line"},plane:{id:"learningBlock.columnSpace.plane",defaultMessage:"plane"},space:{id:"learningBlock.columnSpace.space",defaultMessage:"three-dimensional space"},visualization:{id:"learningBlock.columnSpace.visualization",defaultMessage:"Rank {rank}. The column space is {shape, select, line {a line} plane {a plane} space {a three-dimensional space} other {a space}}. Input ({inputX}, {inputY}, {inputZ}) maps to ({outputX}, {outputY}, {outputZ})."}}),p=(e,t)=>e.formatNumber(Object.is(t,-0)?0:t,{maximumFractionDigits:3,useGrouping:!1});n.d(t,{},{ColumnSpaceCaption:({values:e})=>{let t,n=(0,a.A)(),r=(0,d.li)(e),o=`A=${(t=r.matrix,`\\begin{bmatrix}${t.map(e=>e.map(e=>p(n,e)).join("&")).join("\\\\")}\\end{bmatrix}`)},`,l=`\\operatorname{span}(A)=\\operatorname{span}\\left\\{${r.columnBasis.map(e=>`\\begin{bmatrix}${p(n,e.x)}\\\\${p(n,e.y)}\\\\${p(n,e.z)}\\end{bmatrix}`).join(",")}\\right\\}`;return(0,i.jsx)(s.Vq,{reserveLines:1,children:(0,i.jsxs)("div",{className:"flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1",children:[(0,i.jsx)("div",{className:"shrink-0",children:(0,i.jsx)(s.OZ,{content:o,format:"katex"})}),(0,i.jsx)("div",{className:"shrink-0",children:(0,i.jsx)(s.OZ,{content:l,format:"katex"})})]})})},ColumnSpaceControls:({values:e,setValues:t})=>{let n=(0,a.A)(),r=(0,d.kn)(e);return(0,i.jsx)(s.Ur,{screenReaderContent:(0,i.jsx)(o.A,{id:"learningBlock.columnSpace.controlsDescription",defaultMessage:"Choose matrix rank one, two, or three. Drag the input vector to see its output remain in the selected matrix's column space."}),children:(0,i.jsx)(l.J,{inputs:[{min:1,max:3,step:1,value:r.rank,ariaLabel:n.formatMessage(u.rankSelector),options:[1,2,3].map(e=>({value:e,label:n.formatMessage(u.rankOption,{rank:p(n,e)})})),onChange:e=>t({...r,rank:e},"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}]})})},ColumnSpaceVisualization:({values:e,presentationMode:t,setValues:n})=>{let r=(0,a.A)(),s=(0,d.kn)(e),l=(0,d.li)(s),f="thumbnail"===t,m=r.formatMessage(u.inputVectorHandle,{x:p(r,l.input.x),y:p(r,l.input.y),z:p(r,l.input.z)}),h=(0,d.Rp)(l,m),g=r.formatMessage(u.visualization,{rank:p(r,l.rank),shape:l.columnSpaceShape,inputX:p(r,l.input.x),inputY:p(r,l.input.y),inputZ:p(r,l.input.z),outputX:p(r,l.output.x),outputY:p(r,l.output.y),outputZ:p(r,l.output.z)});return(0,i.jsxs)("div",{className:f?"relative h-full w-full":"relative w-full",children:[(0,i.jsx)(c.P,{scene:h,ariaLabel:g,presentationMode:t,onDragPoint:f?void 0:(e,t)=>n((0,d.ED)(s,t),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}),f?null:(0,i.jsxs)("div",{"aria-hidden":"true",className:"pointer-events-none absolute start-3 top-3 flex flex-col gap-1.5 text-xs",children:[(0,i.jsx)(o.A,{...u.dragInstruction}),(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1",children:[(0,i.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,i.jsx)("span",{className:"size-2 rounded-full",style:{backgroundColor:"var(--learning-block-color-secondary)"}}),(0,i.jsx)(o.A,{...u.inputVectorLegend})]}),(0,i.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,i.jsx)("span",{className:"size-2 rounded-full",style:{backgroundColor:"var(--learning-block-color-primary)"}}),(0,i.jsx)(o.A,{...u.columnSpaceLegend})]})]})]})]})}})},tkCL(e,t,n){var i=n("ABep"),r=n("mevF"),a=n("Ipng"),o=n("Njew"),s=n("oeGO"),l=n("hPwS"),c=n("zd8w"),d=n("Qgfj"),u=n("Wf1j"),p=n("PVZC"),f=n("l7Go"),m=n("sCEh"),h=n("ZKaa");let g=s.Hl,v=r.E,y=a.N,x="group",b="mesh",w="sphereGeometry",S="meshBasicMaterial",E="meshStandardMaterial",M=Math.PI/12,A=(0,d.YK)({cameraInstructions:{id:"learningBlock.multivariable.cameraInstructions",defaultMessage:"Use the arrow keys to rotate the three-dimensional scene"},pointInstructions:{id:"learningBlock.multivariable.pointInstructions",defaultMessage:"Use the arrow keys to move horizontally or vertically, and Page Up or Page Down to move in depth"},adjustPoint:{id:"learningBlock.multivariable.adjustPoint",defaultMessage:"Adjust point"}}),P={accent:"var(--learning-block-accent)",primary:"var(--learning-block-color-primary)",secondary:"var(--learning-block-color-secondary)",third:"var(--learning-block-color-third)",fourth:"var(--learning-block-color-fourth)",neutral:"var(--text-secondary)"},j=({x:e,y:t,z:n})=>[e,t,n],L=({position:e})=>{let t=(0,l.C)(e=>e.camera),n=(0,l.C)(e=>e.invalidate);return(0,c.useEffect)(()=>{t.position.set(e[0],e[1],e[2]),t.lookAt(0,0,0),t.updateMatrixWorld(),n()},[t,n,e[0],e[1],e[2]]),null},_=({arrow:e,colors:t,showLabel:n})=>{let r=e.from??(0,h.ih)(0,0,0),a=(0,h.XT)(e.to,(0,h.oE)(r,-1)),o=(0,h.wi)(a);if(o<1e-5)return null;let s=(0,h.v7)(a),l=new p.PTz().setFromUnitVectors(new p.Pq0(0,1,0),new p.Pq0(s.x,s.y,s.z)),c=Math.min(e.headLength??(e.emphasis?.32:.24),.3*o),d=e.shaftRadius??(e.emphasis?.046:.034),u=e.headRadius??(e.emphasis?.13:.1),m=o-c,g=(0,h.XT)(r,(0,h.oE)(s,m/2)),y=(0,h.XT)(r,(0,h.oE)(s,m+c/2)),w=t[e.role??"primary"];return(0,i.jsxs)(x,{children:[(0,i.jsxs)(b,{position:j(g),quaternion:l.toArray(),children:[(0,i.jsx)("cylinderGeometry",{args:[d,d,m,16]}),(0,i.jsx)(E,{color:w,roughness:.45})]}),(0,i.jsxs)(b,{position:j(y),quaternion:l.toArray(),children:[(0,i.jsx)("coneGeometry",{args:[u,c,18]}),(0,i.jsx)(E,{color:w,roughness:.42})]}),n&&e.label?(0,i.jsx)(v,{center:!0,position:j((0,h.XT)(e.to,(0,h.oE)(s,.18))),children:(0,i.jsx)(f.r,{latex:e.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:w}})}):null]})},k=({patch:e,colors:t})=>{let n=(0,c.useMemo)(()=>{var t;let n;return t=e.corners,(n=new p.LoY).setAttribute("position",new p.qtW([0,1,2,0,2,3].flatMap(e=>j(t[e])),3)),n.computeVertexNormals(),n},[e.corners]);return(0,i.jsx)(b,{geometry:n,renderOrder:1,children:(0,i.jsx)(S,{color:t[e.role??"secondary"],side:2,transparent:!0,opacity:e.opacity??.16,depthWrite:!1})})},z=(e,t)=>{if(!t)return e.length>1?[e]:[];let n=[],i=[];return e.forEach((e,r)=>{t[r]?i.push(e):(i.length>1&&n.push(i),i=[])}),i.length>1&&n.push(i),n},C=(0,c.memo)(function({surface:e,colors:t}){let n=(0,c.useMemo)(()=>{let t=[];for(let n=0;n+1<e.grid.length;n+=1)for(let i=0;i+1<e.grid[n].length;i+=1){if(e.validity&&(!e.validity[n]?.[i]||!e.validity[n+1]?.[i]||!e.validity[n+1]?.[i+1]||!e.validity[n]?.[i+1]))continue;let r=e.grid[n][i],a=e.grid[n+1][i],o=e.grid[n+1][i+1],s=e.grid[n][i+1];t.push(...j(r),...j(a),...j(o)),t.push(...j(r),...j(o),...j(s))}let n=new p.LoY;return n.setAttribute("position",new p.qtW(t,3)),n.computeVertexNormals(),n},[e.grid,e.validity]),r=t[e.role??"secondary"],a=e.grid[0]?.length??0,o=(0,c.useMemo)(()=>e.grid.flatMap((t,n)=>z(t,e.validity?.[n]).map((e,t)=>({key:`row-${n}-${t}`,points:e.map(j)}))),[e.grid,e.validity]),s=(0,c.useMemo)(()=>Array.from({length:a},(t,n)=>({points:e.grid.map(e=>e[n]),validity:e.validity?.map(e=>e[n])})).flatMap(({points:e,validity:t},n)=>z(e,t).map((e,t)=>({key:`column-${n}-${t}`,points:e.map(j)}))),[a,e.grid,e.validity]);return(0,i.jsxs)(x,{children:[(0,i.jsx)(b,{geometry:n,renderOrder:1,children:(0,i.jsx)(S,{color:r,side:2,transparent:!0,opacity:e.opacity??.17,depthWrite:!1})}),o.map(({key:t,points:n})=>(0,i.jsx)(y,{points:n,color:r,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t)),s.map(({key:t,points:n})=>(0,i.jsx)(y,{points:n,color:r,transparent:!0,opacity:e.wireOpacity??.5,lineWidth:.9},t))]})}),U=({curtain:e,colors:t})=>{let n=(0,c.useMemo)(()=>{let t=[],n=Math.min(e.upper.length,e.lower.length);for(let i=0;i+1<n;i+=1){let n=e.upper[i],r=e.upper[i+1],a=e.lower[i],o=e.lower[i+1];t.push(...j(n),...j(a),...j(o),...j(n),...j(o),...j(r))}let i=new p.LoY;return i.setAttribute("position",new p.qtW(t,3)),i.computeVertexNormals(),i},[e.lower,e.upper]);return(0,i.jsx)(b,{geometry:n,renderOrder:1,children:(0,i.jsx)(S,{color:t[e.role??"primary"],side:2,transparent:!0,opacity:e.opacity??.22,depthWrite:!1})})},O=({colors:e,extent:t,extents:n,labelScale:r=1,labels:a=["x","y","z"],showLabels:o})=>(0,i.jsx)(x,{children:[{endpoint:(0,h.ih)(n?.[0]??t,0,0),label:a[0]},{endpoint:(0,h.ih)(0,n?.[1]??t,0),label:a[1]},{endpoint:(0,h.ih)(0,0,n?.[2]??t),label:a[2]}].map(({endpoint:t,label:n})=>(0,i.jsxs)(x,{children:[(0,i.jsx)(y,{points:[j((0,h.oE)(t,-1)),j(t)],color:e.neutral,transparent:!0,opacity:.32,lineWidth:.85}),o?(0,i.jsx)(v,{center:!0,position:j((0,h.oE)(t,r)),children:(0,i.jsx)(f.r,{latex:n,className:"pointer-events-none text-xs whitespace-nowrap",style:{color:e.neutral}})}):null]},n))}),I=({colors:e,coordinateGroupRef:t,index:n,interactive:r,onDragActiveChange:a,onDragPoint:o,point:s,showLabel:l})=>{let d=(0,c.useRef)(null),u=(0,c.useRef)(new p.I9Y),m=(0,c.useRef)(null),g=r&&s.draggable&&void 0!==o,y=(e,t)=>{let n=e.nativeEvent.target;if(!(n instanceof HTMLElement))return e.ray;let i=t??n.getBoundingClientRect();return 0===i.width||0===i.height?e.ray:(u.current.set((e.nativeEvent.clientX-i.left)/i.width*2-1,-(2*((e.nativeEvent.clientY-i.top)/i.height))+1),m.current??=new p.tBo,m.current.setFromCamera(u.current,e.camera),m.current.ray)},M=(e,t)=>{let n=e.nativeEvent.target;n instanceof HTMLElement&&(n.style.cursor=t)},A=e=>{if(void 0===s.hitTolerancePixels)return!0;let n=e.nativeEvent.target,i=t.current;if(!(n instanceof HTMLElement)||!i)return!0;let r=n.getBoundingClientRect();if(0===r.width||0===r.height)return!0;i.updateWorldMatrix(!0,!1);let a=t=>{let n=i.localToWorld(new p.Pq0(t.x,t.y,t.z)).project(e.camera);return{x:r.left+(n.x+1)*r.width/2,y:r.top+(1-n.y)*r.height/2}},o=a(s.point),l=a(s.dragOrigin??s.point),c=o.x-l.x,d=o.y-l.y,u=c*c+d*d,f=u>0?Math.min(1,Math.max(0,((e.nativeEvent.clientX-l.x)*c+(e.nativeEvent.clientY-l.y)*d)/u)):1,m=l.x+f*c,h=l.y+f*d,g="touch"===e.nativeEvent.pointerType?Math.max(s.hitTolerancePixels,22):s.hitTolerancePixels;return Math.hypot(e.nativeEvent.clientX-m,e.nativeEvent.clientY-h)<=g},P=e=>{let t=d.current;if(t&&t.pointerId===e.pointerId){d.current=null,a(!1),M(e,"grab");try{e.target.releasePointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}};return(0,i.jsxs)(x,{position:j(s.point),onPointerDown:g?e=>{if(!g||!A(e))return;let n=new p.Pq0(s.point.x,s.point.y,s.point.z);t.current?.updateWorldMatrix(!0,!1),t.current?.localToWorld(n);let i=e.camera.getWorldDirection(new p.Pq0),r=new p.Zcv().setFromNormalAndCoplanarPoint(i,n),o=y(e).intersectPlane(r,new p.Pq0);if(!o)return;let l=e.nativeEvent.target;if(!(l instanceof HTMLElement))return;let c=l.getBoundingClientRect();d.current={bounds:{height:c.height,left:c.left,top:c.top,width:c.width},offset:n.sub(o),plane:r,pointerId:e.pointerId},a(!0),M(e,"grabbing");try{e.target.setPointerCapture?.(e.pointerId)}catch{}e.stopPropagation()}:void 0,onPointerMove:g?e=>{let i=d.current;if(!g)return;if(!i)return void M(e,A(e)?"grab":"auto");if(i.pointerId!==e.pointerId)return;if(0===e.buttons)return void P(e);let r=y(e,i.bounds).intersectPlane(i.plane,new p.Pq0);if(!r)return;let a=r.add(i.offset);t.current?.worldToLocal(a),o(n,(0,h.ih)(a.x,a.y,a.z)),e.stopPropagation()}:void 0,onPointerUp:g?P:void 0,onPointerCancel:g?P:void 0,onLostPointerCapture:g?P:void 0,onPointerOver:g?e=>M(e,A(e)?"grab":"auto"):void 0,onPointerOut:g?e=>M(e,d.current?"grabbing":"auto"):void 0,children:[g?(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{args:[s.hitRadius??.36,16,12]}),(0,i.jsx)(S,{transparent:!0,opacity:0,depthWrite:!1})]}):null,(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{args:[s.radius??.085,20,16]}),(0,i.jsx)(E,{color:e[s.role??"accent"]})]}),l&&s.label?(0,i.jsx)(v,{center:!0,position:[.18,.14,0],children:(0,i.jsx)(f.r,{latex:s.label,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:e[s.role??"accent"]}})}):null]})},D=({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:r})=>{let a=(0,u.A)(),s=(0,c.useRef)(null),l=(0,c.useRef)(null),d=(0,c.useRef)(null),p=(e=>{let[t,n]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=window.getComputedStyle(t),i=t=>e.getPropertyValue(t).trim()||e.color,r={accent:i("--learning-block-accent"),primary:i("--learning-block-color-primary"),secondary:i("--learning-block-color-secondary"),third:i("--learning-block-color-third"),fourth:i("--learning-block-color-fourth"),neutral:i("--text-secondary")};n(e=>e&&Object.keys(r).every(t=>e[t]===r[t])?e:r)};i();let r=new MutationObserver(i);return r.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),r.observe(t,{attributes:!0,attributeFilter:["class","style"]}),()=>r.disconnect()},[e]),t})(s),f=(e=>{let[t,n]=(0,c.useState)(()=>"u"<typeof IntersectionObserver);return(0,c.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let i=new IntersectionObserver(([e])=>{n(e?.isIntersecting??!1)});return i.observe(t),()=>i.disconnect()},[e]),t})(s),m="thumbnail"===n,v=!m&&"fixed"!==e.cameraControls,[E,P]=(0,c.useState)(!1),z=e.extent??2.8,D=e.camera??[2.5*z,-(1.9*z),2.7*z];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:s,role:"img","aria-label":t,"aria-description":v?a.formatMessage(A.cameraInstructions):void 0,className:m?"text-token-text-primary relative h-full w-full overflow-hidden":"text-token-text-primary relative h-[246px] max-h-[270px] w-full overflow-hidden sm:h-[270px]",onKeyDown:v?e=>{let t=d.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+M);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-M);break;case"ArrowUp":t.setPolarAngle(t.getPolarAngle()-M);break;case"ArrowDown":t.setPolarAngle(t.getPolarAngle()+M);break;default:return}e.preventDefault()}}:void 0,tabIndex:v?0:void 0,children:p&&f?(0,i.jsxs)(g,{"data-learning-block-pan":v||!m&&r&&e.points?.some(e=>e.draggable)?"both":void 0,"aria-hidden":"true",camera:{position:D,fov:38},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0,powerPreference:"low-power"},style:{height:"100%",touchAction:m?"auto":"none",width:"100%"},children:[(0,i.jsx)(L,{position:D}),(0,i.jsx)("ambientLight",{intensity:1.5}),(0,i.jsx)("directionalLight",{position:[5,6,8],intensity:1.5}),(0,i.jsxs)(x,{ref:l,rotation:"y"===e.upAxis?void 0:[-Math.PI/2,0,0],children:[e.hideAxes?null:(0,i.jsx)(O,{colors:p,extent:z,extents:e.axisExtents,labelScale:e.axisLabelScale,labels:e.axisLabels,showLabels:!m}),e.surfaces?.map((e,t)=>(0,i.jsx)(C,{surface:e,colors:p},`surface-${t}`)),e.patches?.map((e,t)=>(0,i.jsx)(k,{patch:e,colors:p},`patch-${t}`)),e.curtains?.map((e,t)=>(0,i.jsx)(U,{curtain:e,colors:p},`curtain-${t}`)),e.lines?.map((e,t)=>(0,i.jsx)(y,{points:e.points.map(j),color:p[e.role??"primary"],lineWidth:e.width??1.7,transparent:!0,opacity:e.opacity??.9},`line-${t}`)),e.spheres?.map((e,t)=>(0,i.jsxs)(x,{position:j(e.center??(0,h.ih)(0,0,0)),children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{args:[e.radius,32,24]}),(0,i.jsx)(S,{color:p[e.role??"secondary"],transparent:!0,opacity:e.opacity??.15,depthWrite:!1,side:2})]}),(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{args:[e.radius,18,12]}),(0,i.jsx)(S,{color:p[e.role??"secondary"],transparent:!0,opacity:.28,wireframe:!0})]})]},`sphere-${t}`)),e.arrows?.map((e,t)=>(0,i.jsx)(_,{arrow:e,colors:p,showLabel:!m},`arrow-${t}`)),e.points?.map((e,t)=>(0,i.jsx)(I,{point:e,index:t,colors:p,coordinateGroupRef:l,interactive:!m,onDragActiveChange:P,onDragPoint:r,showLabel:!m},`point-${t}`))]}),v?(0,i.jsx)(o.N,{ref:d,enabled:!E,enableDamping:!1,enablePan:!1,enableZoom:!1,minPolarAngle:.18,maxPolarAngle:Math.PI-.18}):null]}):null}),!m&&r?e.points?.map((e,t)=>e.draggable?(0,i.jsx)("button",{type:"button","aria-label":e.ariaLabel,"aria-description":a.formatMessage(A.pointInstructions),className:"bg-token-main-surface-primary sr-only start-3 bottom-3 z-10 rounded-md text-xs focus:not-sr-only",style:{paddingBlock:"calc(var(--spacing) * 2)",paddingInline:"calc(var(--spacing) * 3)",position:"absolute"},onKeyDown:n=>{let i=e.keyboardStep??.1,a="ArrowLeft"===n.key?(0,h.ih)(-i,0,0):"ArrowRight"===n.key?(0,h.ih)(i,0,0):"ArrowDown"===n.key?(0,h.ih)(0,-i,0):"ArrowUp"===n.key?(0,h.ih)(0,i,0):"PageDown"===n.key?(0,h.ih)(0,0,-i):"PageUp"===n.key?(0,h.ih)(0,0,i):null;a&&(n.preventDefault(),n.stopPropagation(),r(t,(0,h.XT)(e.point,a)))},children:a.formatMessage(A.adjustPoint)},`point-control-${t}`):null):null]})},T=({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:r})=>{let a=e.segments?.map(e=>({from:e.from,to:e.to,stroke:P[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity,strokeDasharray:e.dashed?"5 4":void 0,endMarker:e.arrow?"arrow":void 0})),o=e.polygons?.map(e=>({points:e.points,fill:P[e.role??"secondary"],opacity:e.opacity??.18})),s=e.circles?.map(e=>({center:e.center,radius:e.radius,stroke:P[e.role??"secondary"],strokeWidth:1.6,opacity:e.opacity})),l=e.points?.map(e=>({x:e.point.x,y:e.point.y,label:"thumbnail"===n?void 0:e.label,labelStyle:"derived_pill",draggable:"thumbnail"!==n&&e.draggable,ariaLabel:e.ariaLabel,keyboardStep:e.keyboardStep,appearance:{fill:P[e.role??"accent"],stroke:"var(--learning-block-visualization-surface, var(--bg-primary))",strokeWidth:2,radius:4}})),c=e.curves?.map(e=>({kind:"polyline",points:e.points,closed:e.closed,stroke:P[e.role??"primary"],strokeWidth:e.width??2,opacity:e.opacity}));return(0,i.jsx)(m.W0,{ariaLabel:t,presentationMode:n,canvasSize:{width:360,height:265,padding:22},viewport:{mode:"bounds",bounds:e.bounds,paddingUnits:.18},segments:a,polygons:o,circles:s,points:l,onDragPoint:"thumbnail"!==n&&r?(e,t,n)=>r(e,(0,h.ih)(n.x,n.y,0)):void 0,series:c,xAxisLabel:"x",yAxisLabel:"y",showAxisLabels:"thumbnail"!==n,showCoordinateTooltip:e.showCoordinateTooltip})};n.d(t,{},{P:({scene:e,ariaLabel:t,presentationMode:n,onDragPoint:r})=>"three"===e.kind?(0,i.jsx)(D,{scene:e,ariaLabel:t,presentationMode:n,onDragPoint:r}):(0,i.jsx)(T,{scene:e,ariaLabel:t,presentationMode:n,onDragPoint:r})})}};
//# sourceMappingURL=930704.77537752ea.js.map