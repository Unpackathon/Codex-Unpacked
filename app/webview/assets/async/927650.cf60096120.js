export const __rspack_esm_ids=[927650];export const __webpack_modules__={Ipng(e,t,n){let r,i;n.d(t,{N:()=>N});var a=n("unhp"),s=n("zd8w"),o=n("PVZC"),l=n("hPwS");let u=new o.NRn,d=new o.Pq0;class c extends o.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new o.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new o.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new o.LuO(t,6,1);return this.setAttribute("instanceStart",new o.eHs(n,3,0)),this.setAttribute("instanceEnd",new o.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new o.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new o.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new o.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new o.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new o.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new o.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)d.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(d)),d.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n("STXV");let m=parseInt("179".replace(/\D+/g,""));class p extends o.BKk{constructor(e){super({type:"LineMaterial",uniforms:o.LlO.clone(o.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new o.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${m>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=m>=125?"uv1":"uv2",x=new o.IUQ,v=new o.Pq0,g=new o.Pq0,b=new o.IUQ,y=new o.IUQ,w=new o.IUQ,S=new o.Pq0,E=new o.kn4,M=new o.cZY,A=new o.Pq0,j=new o.NRn,L=new o.iyt,k=new o.IUQ;function z(e,t,n){return k.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),k.multiplyScalar(1/k.w),k.x=i/n.width,k.y=i/n.height,k.applyMatrix4(e.projectionMatrixInverse),k.multiplyScalar(1/k.w),Math.abs(Math.max(k.x,k.y))}class _ extends o.eaF{constructor(e=new c,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)v.fromBufferAttribute(t,e),g.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+v.distanceTo(g);let i=new o.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new o.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new o.eHs(i,1,1)),this}raycast(e,t){let n,a,s=this.material.worldUnits,l=e.camera;null!==l||s||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let d=this.matrixWorld,c=this.geometry,f=this.material;if(i=f.linewidth+u,null===c.boundingSphere&&c.computeBoundingSphere(),L.copy(c.boundingSphere).applyMatrix4(d),s)n=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(r.origin));n=z(l,e,f.resolution)}if(L.radius+=n,!1!==r.intersectsSphere(L)){if(null===c.boundingBox&&c.computeBoundingBox(),j.copy(c.boundingBox).applyMatrix4(d),s)a=.5*i;else{let e=Math.max(l.near,j.distanceToPoint(r.origin));a=z(l,e,f.resolution)}j.expandByScalar(a),!1!==r.intersectsBox(j)&&(s?function(e,t){let n=e.matrixWorld,a=e.geometry,s=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,s.count);for(let a=0;a<u;a++){M.start.fromBufferAttribute(s,a),M.end.fromBufferAttribute(l,a),M.applyMatrix4(n);let u=new o.Pq0,d=new o.Pq0;r.distanceSqToSegment(M.start,M.end,d,u),d.distanceTo(u)<.5*i&&t.push({point:d,pointOnLine:u,distance:r.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,s=e.material.resolution,l=e.matrixWorld,u=e.geometry,d=u.attributes.instanceStart,c=u.attributes.instanceEnd,f=Math.min(u.instanceCount,d.count),m=-t.near;r.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=s.x/2,w.y*=s.y/2,w.z=0,S.copy(w),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(b.fromBufferAttribute(d,t),y.fromBufferAttribute(c,t),b.w=1,y.w=1,b.applyMatrix4(E),y.applyMatrix4(E),b.z>m&&y.z>m)continue;if(b.z>m){let e=b.z-y.z,t=(b.z-m)/e;b.lerp(y,t)}else if(y.z>m){let e=y.z-b.z,t=(y.z-m)/e;y.lerp(b,t)}b.applyMatrix4(a),y.applyMatrix4(a),b.multiplyScalar(1/b.w),y.multiplyScalar(1/y.w),b.x*=s.x/2,b.y*=s.y/2,y.x*=s.x/2,y.y*=s.y/2,M.start.copy(b),M.start.z=0,M.end.copy(y),M.end.z=0;let u=M.closestPointToPointParameter(S,!0);M.at(u,A);let f=o.cj9.lerp(b.z,y.z,u),p=f>=-1&&f<=1,x=S.distanceTo(A)<.5*i;if(p&&x){M.start.fromBufferAttribute(d,t),M.end.fromBufferAttribute(c,t),M.start.applyMatrix4(l),M.end.applyMatrix4(l);let i=new o.Pq0,a=new o.Pq0;r.distanceSqToSegment(M.start,M.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(x),this.material.uniforms.resolution.value.set(x.z,x.w))}}class P extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends _{constructor(e=new P,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let N=s.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:u,dashed:d,...f},m){var h,x;let v=(0,l.C)(e=>e.size),g=s.useMemo(()=>u?new _:new C,[u]),[b]=s.useState(()=>new p),y=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,w=s.useMemo(()=>{let r=u?new c:new P,i=e.map(e=>{let t=Array.isArray(e);return e instanceof o.Pq0||e instanceof o.IUQ?[e.x,e.y,e.z]:e instanceof o.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof o.Q1f?e.toArray():e);r.setColors(e.flat(),y)}return r},[e,u,n,y]);return s.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),s.useLayoutEffect(()=>{d?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[d,b]),s.useEffect(()=>()=>{w.dispose(),b.dispose()},[w]),s.createElement("primitive",(0,a.A)({object:g,ref:m},f),s.createElement("primitive",{object:w,attach:"geometry"}),s.createElement("primitive",(0,a.A)({object:b,attach:"material",color:t,vertexColors:!!n,resolution:[v.width,v.height],linewidth:null!=(x=null!=r?r:i)?x:1,dashed:d,transparent:4===y},f)))})},mevF(e,t,n){let r,i;var a=n("unhp"),s=n("zd8w"),o=n("CE87"),l=n("PVZC"),u=n("hPwS");let d=new l.Pq0,c=new l.Pq0,f=new l.Pq0,m=new l.I9Y;function p(e,t,n){let r=d.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function x(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let v=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>x(e,r)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>x(e,i(t),"translate(-50%,-50%)")),b=s.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:x,fullscreen:b,portal:y,distanceFactor:w,sprite:S=!1,transform:E=!1,occlude:M,onOcclude:A,castShadow:j,receiveShadow:L,material:k,geometry:z,zIndexRange:_=[0x1000037,0],calculatePosition:P=p,as:C="div",wrapperClass:N,pointerEvents:U="auto",...R},O)=>{let{gl:D,camera:B,scene:T,size:W,raycaster:I,events:F,viewport:H}=(0,u.C)(),[$]=s.useState(()=>document.createElement(C)),V=s.useRef(null),q=s.useRef(null),G=s.useRef(0),Z=s.useRef([0,0]),K=s.useRef(null),Y=s.useRef(null),Q=(null==y?void 0:y.current)||F.connected||D.domElement.parentNode,J=s.useRef(null),X=s.useRef(!1),ee=s.useMemo(()=>{var e;return M&&"blending"!==M||Array.isArray(M)&&M.length&&(e=M[0])&&"object"==typeof e&&"current"in e},[M]);s.useLayoutEffect(()=>{let e=D.domElement;M&&"blending"===M?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[M]),s.useLayoutEffect(()=>{if(q.current){let e=V.current=o.createRoot($);if(T.updateMatrixWorld(),E)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=P(q.current,B,W);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(i?Q.prepend($):Q.appendChild($)),()=>{Q&&Q.removeChild($),e.unmount()}}},[Q,E]),s.useLayoutEffect(()=>{N&&($.className=N)},[N]);let et=s.useMemo(()=>E?{position:"absolute",top:0,left:0,width:W.width,height:W.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:x?"translate3d(-50%,-50%,0)":"none",...b&&{top:-W.height/2,left:-W.width/2,width:W.width,height:W.height},...n},[n,x,b,W,E]),en=s.useMemo(()=>({position:"absolute",pointerEvents:U}),[U]);s.useLayoutEffect(()=>{var t,i;X.current=!1,E?null==(t=V.current)||t.render(s.createElement("div",{ref:K,style:et},s.createElement("div",{ref:Y,style:en},s.createElement("div",{ref:O,className:r,style:n,children:e})))):null==(i=V.current)||i.render(s.createElement("div",{ref:O,style:et,className:r,children:e}))});let er=s.useRef(!0);(0,u.D)(e=>{if(q.current){B.updateMatrixWorld(),q.current.updateWorldMatrix(!0,!1);let e=E?Z.current:P(q.current,B,W);if(E||Math.abs(G.current-B.zoom)>t||Math.abs(Z.current[0]-e[0])>t||Math.abs(Z.current[1]-e[1])>t){var n;let t,r,i,a,s=(n=q.current,t=d.setFromMatrixPosition(n.matrixWorld),r=c.setFromMatrixPosition(B.matrixWorld),i=t.sub(r),a=B.getWorldDirection(f),i.angleTo(a)>Math.PI/2),o=!1;ee&&(Array.isArray(M)?o=M.map(e=>e.current):"blending"!==M&&(o=[T]));let u=er.current;o?er.current=function(e,t,n,r){let i=d.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),m.set(a.x,a.y),n.setFromCamera(m,t);let s=n.intersectObjects(r,!0);if(s.length){let e=s[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}(q.current,B,I,o)&&!s:er.current=!s,u!==er.current&&(A?A(!er.current):$.style.display=er.current?"block":"none");let p=Math.floor(_[0]/2),x=M?ee?[_[0],p]:[p-1,0]:_;if($.style.zIndex=`${function(e,t,n){if(t instanceof l.ubm||t instanceof l.qUd){let r=d.setFromMatrixPosition(e.matrixWorld),i=c.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),s=(n[1]-n[0])/(t.far-t.near),o=n[1]-s*t.far;return Math.round(s*a+o)}}(q.current,B,x)}`,E){let[e,t]=[W.width/2,W.height/2],n=B.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:s,right:o}=B,l=v(B.matrixWorldInverse),u=r?`scale(${n})translate(${h(-(o+a)/2)}px,${h((i+s)/2)}px)`:`translateZ(${n}px)`,d=q.current.matrixWorld;S&&((d=B.matrixWorldInverse.clone().transpose().copyPosition(d).scale(q.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),$.style.width=W.width+"px",$.style.height=W.height+"px",$.style.perspective=r?"":`${n}px`,K.current&&Y.current&&(K.current.style.transform=`${u}${l}translate(${e}px,${t}px)`,Y.current.style.transform=g(d,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let n=d.setFromMatrixPosition(e.matrixWorld),r=c.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}(q.current,B)*w;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Z.current=e,G.current=B.zoom}}if(!ee&&J.current&&!X.current)if(E){if(K.current){let e=K.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=B;if(t||z)R.scale&&(Array.isArray(R.scale)?R.scale instanceof l.Pq0?J.current.scale.copy(R.scale.clone().divideScalar(1)):J.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):J.current.scale.setScalar(1/R.scale));else{let t=(w||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;J.current.scale.set(n,r,1)}X.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,n=t.clientWidth*e,r=t.clientHeight*e;J.current.scale.set(n,r,1),X.current=!0}J.current.lookAt(e.camera.position)}});let ei=s.useMemo(()=>({vertexShader:E?void 0:`
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
      `}),[E]);return s.createElement("group",(0,a.A)({},R,{ref:q}),M&&!ee&&s.createElement("mesh",{castShadow:j,receiveShadow:L,ref:J},z||s.createElement("planeGeometry",null),k||s.createElement("shaderMaterial",{side:2,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))});n.d(t,{},{E:b})},sKwe(e,t,n){var r=n("ABep"),i=n("on57"),a=n("zd8w"),s=n("iLdV");let o=e=>e?e.replace(/\\mid/g,"|").replace(/\\neg/g,"\xac").replace(/\\cap/g,"\u2229").replace(/\\cup/g,"\u222A").replace(/\\text\{([^}]*)\}/g,"$1").replace(/\\mathrm\{([^}]*)\}/g,"$1").replace(/\\[a-zA-Z]+/g,"").replace(/[{}_^]/g,"").replace(/\s+/g," ").trim().length:0,l=e=>{let t=e.formatValueForInput??s.hG,n=Math.max((0,s.m_)(e.min,e.step,t).length,(0,s.m_)(e.max,e.step,t).length),r=e.inlineUnit?e.unit?.length??0:0;return e.range?2*n+2:n+r};n.d(t,{},{J:({inputs:e})=>{let t=(0,a.useRef)(null),[n,u]=(0,a.useState)(),d=e.some(e=>e.before),c=e.filter(e=>!e.options&&!1!==e.showValueInput),f=Math.max(0,...e.map(e=>o(e.variable))),m=Math.max(0,...c.map(l)),p=Math.max(0,...c.map(e=>o(e.inlineUnit?void 0:e.unit))),h=e.map(e=>e.variable??"").join("\0");return(0,a.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let n=Array.from(e.querySelectorAll("[data-input-selector-variable]"));if(0===n.length)return;let r=()=>{let t=n.filter(e=>"stacked"!==e.dataset.inputSelectorLabelLayout),r=t.length?Math.max(...t.map(t=>{let n=t.cloneNode(!0);n.removeAttribute("data-input-selector-variable"),Object.assign(n.style,{inset:"0 auto auto 0",maxWidth:"none",position:"absolute",visibility:"hidden",whiteSpace:"nowrap",width:"max-content"}),e.appendChild(n);let r=n.getBoundingClientRect().width;return n.remove(),r})):void 0;u(e=>e===r?e:r)};if(r(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(r);n.forEach(e=>i.observe(e));let a=new MutationObserver(r);return n.forEach(e=>a.observe(e,{attributeFilter:["data-input-selector-label-layout"]})),()=>{i.disconnect(),a.disconnect()}},[h]),(0,r.jsx)("div",{ref:t,"data-input-selector-group":!0,className:"grid min-h-fit min-w-0 shrink grow-0 gap-y-3",children:e.map((e,t)=>(0,r.jsxs)("div",{className:(0,i.A)("grid h-full min-w-0 items-center gap-x-2",d?"grid-cols-[auto_minmax(0,1fr)]":"grid-cols-[minmax(0,1fr)]"),children:[d?e.before??(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)(s.KV,{...e,groupVariableWidthCh:f,groupVariableWidthPx:n,groupUnitWidthCh:p,groupValueWidthCh:m})]},t))})},b:(e,t,n,r,{before:i,disabled:a,displayValue:s,editType:o="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",formatValueForInput:l,inlineUnit:u,parseInputValue:d,mapValue:c,options:f,optionLabelFormat:m,showValueInput:p,sliderStyle:h,ariaLabel:x,ariaValueText:v,onActiveChange:g,value:b,variable:y,variableBold:w,variableFormat:S,unit:E}={})=>{var M;return{before:i,disabled:a,displayValue:s,options:f,optionLabelFormat:m,showValueInput:p,sliderStyle:h,inlineUnit:u,ariaLabel:x,ariaValueText:v,variable:y??t.variable??(M=String(e),M.match(/[A-Za-z]/)?.[0]??M),variableBold:w??t.variableBold,variableFormat:S??t.variableFormat,unit:E??t.unit,formatValueForInput:l,parseInputValue:d,max:t.max,min:t.min,step:t.step,value:b??Number(n[e]),onActiveChange:g,onChange:(t,n)=>{let i=c?c(t):t;r(t=>({...t,[e]:i}),"function"==typeof o?o(n):o)}}}})},iLdV(e,t,n){var r=n("ABep"),i=n("YAOF"),a=n("on57"),s=n("zd8w"),o=n("Wf1j"),l=n("l7Go"),u=n("jYuH"),d=n("Bdtm");let c=(e,t,n)=>Math.min(Math.max(e,t),n),f=/[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?/i,m=(e,t,n,r)=>{if(!Number.isFinite(e))return t;let i=Math.round((c(e,t,n)-t)/r),a=(0,u.Dp)(r);return c((0,u.eB)(t+i*r,Math.max(1,a)),t,n)},p=(e,t)=>Number.isFinite(e)?e.toFixed(Math.max(1,(0,u.Dp)(t))):"",h=(e,t,n)=>{let r=n(e,t);return r.match(f)?.[0]??r},x=96,v=e=>{let t=[],n=e.parentElement;for(;n;)"visible"!==window.getComputedStyle(n).overflowY&&t.push(n),n=n.parentElement;return t},g=(0,s.createContext)({isNativeSlider:!1}),b=()=>(0,r.jsx)("svg",{"aria-hidden":!0,className:"h-4 w-4 flex-none",fill:"none",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"m5 6 3-3 3 3M5 10l3 3 3-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});n.d(t,{},{KV:({min:e,max:t,step:n,value:u,displayValue:c,onChange:y,onActiveChange:w,disabled:S,options:E,optionLabelFormat:M="text",sliderStyle:A="continuous",ariaLabel:j,ariaValueText:L,variable:k,variableBold:z,variableFormat:_,inlineUnit:P,unit:C,formatValueForInput:N=p,parseInputValue:U,normalizeCommittedValue:R,minSliderWidthPx:O,showValueInput:D=!0,range:B,valueClassName:T,groupVariableWidthCh:W,groupVariableWidthPx:I,groupUnitWidthCh:F,groupValueWidthCh:H})=>{let $,{isNativeSlider:V,onSliderInteractionEnd:q,onSliderInteractionStart:G}=(0,s.useContext)(g),Z=(0,o.A)(),K=U??Number.parseFloat,Y=m(u,e,t,n),Q=Number.isFinite(c)?c:Y,[J,X]=(0,s.useState)(()=>h(Q,n,N)),[ee,et]=(0,s.useState)(!1),en=(0,s.useRef)(!1),er=(0,s.useRef)(!1),ei=(0,s.useRef)(!1),ea=(0,s.useRef)(null),es=(0,s.useRef)(null),eo=(0,s.useRef)(null),el=(0,s.useRef)(null),eu=(0,s.useRef)(null),ed=(0,s.useRef)(null),ec=(0,s.useRef)(null),ef=(0,s.useRef)(null),em=(0,s.useRef)(!1),[ep,eh]=(0,s.useState)(!1),[ex,ev]=(0,s.useState)(!1),[eg,eb]=(0,s.useState)(!1),[ey,ew]=(0,s.useState)(V?"above":"below"),eS=(e="blur")=>{"blur"===e&&ei.current||er.current&&(er.current=!1,w?.(!1),q?.())},eE=()=>{er.current||(er.current=!0,w?.(!0),G?.(k))},eM=()=>{ei.current=!0,eE()};(0,s.useEffect)(()=>{let e=()=>{ei.current=!1,eS("pointer-end")};return window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e)}},[w,q]),(0,s.useLayoutEffect)(()=>{let e=eu.current,t=ed.current;if(!E||!e||!t)return void eh(!1);let n=()=>{let n=e.clientWidth,r=t.scrollWidth>n+1;eh(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{r?.removeEventListener("loadingdone",n),i.disconnect()}},[E,M]),(0,s.useEffect)(()=>{let e=e=>{"Escape"===e.key&&em.current&&(em.current=!1,e.preventDefault(),e.stopPropagation())};return document.addEventListener("keyup",e,!0),()=>document.removeEventListener("keyup",e,!0)},[]),(0,s.useEffect)(()=>{if(!eg)return;em.current=!1;let e=e=>{let t=e.target;!(t instanceof Node)||ec.current?.contains(t)||ef.current?.contains(t)||eb(!1)},t=e=>{"Escape"===e.key&&(em.current=!0,e.preventDefault(),e.stopPropagation(),eb(!1),ef.current?.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t,!0)}},[eg]),(0,s.useEffect)(()=>{(!ep||S)&&eb(!1)},[S,ep]),(0,s.useLayoutEffect)(()=>{if(!eg)return void ew(V?"above":"below");let e=ec.current,t=ef.current;if(!e||!t)return;let n=()=>{ew((({boundary:e,menuHeight:t,trigger:n})=>{let r=e.bottom-n.bottom-4;if(t<=r)return"below";let i=n.top-e.top-4;return t<=i||i>r?"above":"below"})({boundary:(({clippingAncestors:e,viewport:t})=>e.reduce((e,t)=>({bottom:Math.min(e.bottom,t.bottom),top:Math.max(e.top,t.top)}),t))({clippingAncestors:v(t).map(e=>e.getBoundingClientRect()),viewport:{bottom:window.innerHeight,top:0}}),menuHeight:e.getBoundingClientRect().height,trigger:t.getBoundingClientRect()}))};if(n(),window.addEventListener("resize",n),"u"<typeof ResizeObserver)return()=>window.removeEventListener("resize",n);let r=new ResizeObserver(n);return r.observe(e),r.observe(t),v(t).forEach(e=>r.observe(e)),()=>{window.removeEventListener("resize",n),r.disconnect()}},[eg,V]);let eA=ee?J:h(Q,n,N),ej=Math.max(h(e,n,N).length,h(t,n,N).length),eL=B?($=B.displayValues??B.ariaValueTexts??[h(B.values[0],n,N),h(B.values[1],n,N)],`(${$[0]}, ${$[1]})`):void 0,ek=B?2*ej+2:ej,ez=H??ek,e_=O??x,eP=z??!1,eC=k?k.replace(/[^\w-]+/g,"_"):"input-selector-value",eN=j??(k?Z.formatMessage({id:"learningBlock.inputSelector.valueAriaLabel",defaultMessage:"{label} value"},{label:k}):void 0),eU=!!k&&"text"!==_&&(!!("katex"===_||/\\/.test(k))||/^[A-Za-z\u03b8\u03bc\u03c3\u03bb\u03c0\u0394](?:[_^][A-Za-z0-9{}]+)?$/.test(k)),eR=E?.find(r=>m(r.value,e,t,n)===Y)??E?.[0],eO=ep?Z.formatMessage({id:"learningBlock.inputSelector.overflowMenuAriaLabel",defaultMessage:"{value}. Show all {label} options"},{label:eN??Z.formatMessage({id:"learningBlock.inputSelector.selectorAriaLabel",defaultMessage:"selector"}),value:eR?.ariaLabel??eR?.label??""}):void 0,eD=(0,s.useId)(),eB=(e,t)=>"katex"!==t?e:(0,r.jsx)(l.r,{className:"katex",latex:e}),eT=r=>m(r.value,e,t,n),eW=E?.find(e=>eT(e)===Y)??E?.[0],eI=r=>{let i=K(r);if(!Number.isFinite(i))return void X(h(Q,n,N));let a=((e,{max:t,min:n,normalizeCommittedValue:r,step:i})=>r?r(e):m(e,n,t,i))(i,{min:e,max:t,step:n,normalizeCommittedValue:R});y(a,"input"),X(h(a,n,N))},eF=k?(0,r.jsx)("div",{"data-input-selector-variable":!0,"data-input-selector-label-layout":ex?"stacked":"inline",className:(0,a.A)("text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]",eP&&"font-medium"),children:eU?(0,r.jsx)(l.r,{className:"katex",latex:k??""}):k}):null,eH=!!(P&&C&&!B),e$=C&&!eH?(0,r.jsx)("div",{ref:el,className:"text-token-text-secondary shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit",children:C}):null,eV=!!H,eq=`minmax(max(${ez}ch,2rem), max(${ez}ch,2rem))`,eG=!!F,eZ=`minmax(${F??0}ch, ${F??0}ch)`,eK=!E&&eG?e$??(0,r.jsx)("div",{ref:el,"aria-hidden":!0}):null,eY=I?`${I}px`:W?`${W}ch`:null,eQ=eY?`minmax(0, min(${eY}, 40%))`:"fit-content(40%)";(0,s.useLayoutEffect)(()=>{let e=ea.current,t=es.current;if(E||!e||!t)return void ev(!1);let n=()=>{let n=e.clientWidth;if(0===n)return;let r=(({availableWidth:e,labelWidth:t,minSliderWidthPx:n=x,unitWidth:r,valueWidth:i})=>{let a=2+Number(i>0)+Number(r>0);return t+i+r+(a-1)*12+n>e+1})({availableWidth:n,labelWidth:Math.max(t.scrollWidth,I??0),minSliderWidthPx:e_,unitWidth:el.current?.clientWidth??0,valueWidth:eo.current?.clientWidth??0});ev(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let i=new ResizeObserver(n);return i.observe(e),i.observe(t),eo.current&&i.observe(eo.current),el.current&&i.observe(el.current),()=>{r?.removeEventListener("loadingdone",n),i.disconnect()}},[F,H,I,E,e_,k,D,C]);let eJ=e=>ec.current?.querySelectorAll("[data-input-selector-discrete-menu-option]").item(e).focus();(0,s.useEffect)(()=>{eg&&E&&eJ(Math.max(E.findIndex(e=>eT(e)===Y),0))},[eg,E,Y]);let eX=E?(0,r.jsx)("div",{role:"radiogroup","aria-label":eN,className:(0,a.A)("flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6",S&&"opacity-40"),children:E.map(e=>{let t=eT(e),n=t===Y;return(0,r.jsx)("button",{type:"button",role:"radio","aria-checked":n,"aria-label":e.ariaLabel,disabled:S,className:(0,a.A)("text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",n&&"bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black",!n&&!S&&"hover:text-token-text-primary focus-visible:text-token-text-primary",!S&&"focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),onClick:()=>y(t,"input"),children:(0,r.jsx)("span",{className:"min-w-6",children:eB(e.label,M)})},e.value)})}):null,e0=E?(0,r.jsxs)("div",{"data-input-selector-discrete-rail":!0,className:(0,a.A)("relative h-6 w-full min-w-0",ep&&"flex justify-end"),children:[ep&&eW?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{type:"button","aria-controls":eD,"aria-expanded":eg,"aria-haspopup":"listbox","aria-label":eO,disabled:S,"data-input-selector-discrete-menu-trigger":!0,ref:ef,className:(0,a.A)("text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",!S&&"hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10"),onClick:()=>eb(e=>!e),children:[(0,r.jsx)("span",{className:"min-w-0 truncate",children:eB(eW.label,M)}),(0,r.jsx)(b,{})]}),eg?(0,r.jsx)("div",{ref:ec,"aria-label":eN,className:(0,a.A)("border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg","above"===ey?"bottom-full mb-1":"top-full mt-1"),id:eD,role:"listbox",children:E.map((e,t)=>{let n=eT(e),i=n===Y;return(0,r.jsx)("button",{type:"button","aria-selected":i,"data-input-selector-discrete-menu-option":!0,role:"option",className:(0,a.A)("flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]",i&&"bg-black/7 font-medium dark:bg-white/10",!i&&"hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10"),onClick:()=>{y(n,"input"),eb(!1),ef.current?.focus()},onKeyDown:e=>((e,t)=>{if(E)switch(e.key){case"ArrowDown":e.preventDefault(),eJ((t+1)%E.length);break;case"ArrowUp":e.preventDefault(),eJ((t-1+E.length)%E.length);break;case"Home":e.preventDefault(),eJ(0);break;case"End":e.preventDefault(),eJ(E.length-1)}})(e,t),children:eB(e.label,M)},e.value)})}):null]}):eX,(0,r.jsx)("div",{ref:ed,"aria-hidden":!0,"data-input-selector-overflow-measure":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0",children:(0,r.jsx)("div",{className:"flex h-6 w-max min-w-max gap-0.5 p-0.5",children:E.map(e=>(0,r.jsx)("span",{className:"flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]",children:(0,r.jsx)("span",{className:"min-w-6",children:eB(e.label,M)})},e.value))})})]}):null,e1=k&&!E&&D&&(0,r.jsxs)("div",{ref:eo,className:(0,a.A)("text-token-text-primary grid h-5 min-w-8 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]",eH?"grid-cols-[minmax(0,1fr)_auto] gap-x-0.5":"grid-cols-1",B&&(ex?"text-end":"text-start"),T,!S&&!B&&"transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7"),"data-value":"0".repeat(ez),children:[B?(0,r.jsx)("span",{"data-input-selector-range-value":!0,className:(0,a.A)("relative flex h-full items-center tabular-nums [grid-area:1/1]",ex?"justify-end":"justify-start"),children:eL}):(0,r.jsx)("input",{"aria-label":eN,className:"relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none",disabled:S,inputMode:"decimal",name:eC,size:1,type:"text",value:eA,onBlur:()=>{if(en.current){en.current=!1;return}et(!1),eI(J)},onChange:e=>{var t;let n;return X(U?e.currentTarget.value:""===(n=(t=e.currentTarget.value).trim())||"-"===n||"."===n?t:n.match(f)?.[0]??t)},onFocus:()=>{et(!0),X(h(Q,n,N))},onKeyDown:e=>{if("Enter"===e.key){e.preventDefault(),en.current=!0,et(!1),eI(J),e.currentTarget.blur();return}"Escape"===e.key&&(e.preventDefault(),en.current=!0,et(!1),X(h(Y,n,N)),e.currentTarget.blur())}}),eH?(0,r.jsx)("span",{"aria-hidden":!0,className:"text-token-text-secondary self-center text-xs leading-4",children:C}):null]}),e2=[];ex?(k&&e2.push("minmax(0, 1fr)"),e1&&e2.push(eq),eK&&e2.push(eZ)):(k&&e2.push(eQ),e1&&e2.push(eq),eK&&e2.push(eZ),e2.push("minmax(0, 1fr)"));let e3=[],e4=eV&&!!k,e5=eG&&!!k;k&&e3.push(eQ),e4&&e3.push(eq),e5&&e3.push(eZ),e3.push("minmax(0, 1fr)");let e6=`${e3.length} / ${e3.length+1}`,e7=k?"2 / -1":"1 / -1",e9=Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(n)&&n>0&&t>=e?Math.max(0,Math.round((t-e)/n)):0,e8=Math.min(e9+1,12),te="stepped"===A&&e9>0?Array.from({length:e8},(e,t)=>t):[],tt="stepped"===A?"h-6 w-6":"h-5 w-5",tn="relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]",tr=te.length>0?(0,r.jsx)("div",{"aria-hidden":!0,"data-input-selector-rendered-marker-count":te.length,className:"pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between",children:te.map(e=>(0,r.jsx)("span",{"data-input-selector-step-marker":!0,className:"h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20"},e))}):null,ti=V&&!B?(0,r.jsxs)("div",{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,className:(0,a.A)(tn,S&&"opacity-40"),children:[tr,(0,r.jsx)("input",{"aria-label":eN,"aria-valuetext":L,type:"range","data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(d.A.inputSelector,"stepped"===A&&d.A.inputSelectorStepped,"text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center"),disabled:S,max:t,min:e,step:n,value:Y,onBlur:()=>eS("blur"),onChange:r=>{eE(),y(m(r.currentTarget.valueAsNumber,e,t,n),"slider")},onPointerDown:eM})]}):(0,r.jsxs)(i.bL,{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,"data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(tn,"touch-pan-y",S&&"opacity-40"),disabled:S,max:t,min:e,onBlurCapture:()=>eS("blur"),onPointerDownCapture:eM,step:n,value:B?B.values.map(r=>m(r,e,t,n)):[Y],onValueChange:r=>{(eE(),B)?B.onChange([m(r[0],e,t,n),m(r[1],e,t,n)]):y(m(r[0],e,t,n),"slider")},children:[(0,r.jsx)(i.CC,{className:"absolute inset-0 rounded-full",children:(0,r.jsx)(i.Q6,{className:"absolute inset-y-0 rounded-full bg-transparent"})}),tr,(0,r.jsx)(i.zi,{"aria-label":B?.ariaLabels[0]??eN,"aria-valuetext":B?.ariaValueTexts?.[0]??L,className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt,B?"flex items-center justify-center text-black":"block"),children:B?.thumbLabels?.[0]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:B.thumbLabels[0]})}),B&&(0,r.jsx)(i.zi,{"aria-label":B.ariaLabels[1],"aria-valuetext":B.ariaValueTexts?.[1],className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative flex cursor-pointer items-center justify-center rounded-full border text-black shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt),children:B.thumbLabels?.[1]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:B.thumbLabels[1]})})]});return E?(0,r.jsxs)("div",{className:"grid h-full min-w-0 items-center gap-x-3",style:{gridTemplateColumns:e3.join(" ")},children:[eF,!ep&&e4?(0,r.jsx)("div",{"aria-hidden":!0}):null,!ep&&e5?(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)("div",{className:"h-full min-w-0",style:{gridColumn:ep?e7:e6,gridRow:1},children:e0}),(0,r.jsx)("div",{ref:eu,"aria-hidden":!0,"data-input-selector-discrete-width-measure":!0,className:"pointer-events-none h-0 min-w-0 opacity-0",style:{gridColumn:e6,gridRow:1}})]}):(0,r.jsxs)("div",{ref:ea,className:(0,a.A)("relative grid min-w-0 items-center gap-x-3",B&&"text-[11px]",ex&&"gap-y-2"),style:{gridTemplateColumns:e2.join(" ")},children:[eF,e1,eK,(0,r.jsx)("div",{className:"min-w-0",style:ex?{gridColumn:"1 / -1"}:void 0,children:ti}),k?(0,r.jsx)("div",{ref:es,"aria-hidden":!0,"data-input-selector-label-measure":!0,className:(0,a.A)("pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]",eP&&"font-medium"),children:eU?(0,r.jsx)(l.r,{className:"katex",latex:k??""}):k}):null]})},hG:p,m_:h,xT:e=>e})},xSSK(e,t,n){var r=n("ABep"),i=n("mevF"),a=n("Ipng"),s=n("Njew"),o=n("oeGO"),l=n("zd8w"),u=n("Qgfj"),d=n("Wf1j"),c=n("oyxz"),f=n("PVZC"),m=n("KwmQ"),p=n("sKwe"),h=n("LP6J"),x=n("I1g8"),v=n("qHXe");let g=o.Hl,b=i.E,y=a.N,w=s.N,S="group",E="mesh",M=Math.PI/12,A=[4.08,3.36,4.44],j={x:2.4,y:2.4,z:2.4},L=(0,u.YK)({surface:{id:"learningBlock.parametrizedSurfaces.surfaceKind",defaultMessage:"surface"},cameraInstructions:{id:"learningBlock.parametrizedSurfaces.cameraInstructions",defaultMessage:"Use the arrow keys to rotate the three-dimensional scene"}}),k=(e,t)=>e.formatNumber(1e-9>Math.abs(t)?0:t,{maximumFractionDigits:2,useGrouping:!1}),z=(e,t)=>k(e,t).replaceAll(",","{,}"),_=(0,l.memo)(function({color:e,opacity:t=1,points:n,width:i=1.4}){let a=(0,l.useMemo)(()=>n.map(v.tS),[n]);return a.length<2?null:(0,r.jsx)(y,{color:e,depthWrite:!1,lineWidth:i,opacity:t,points:a,transparent:t<1})}),P=({bounds:e,color:t,showLabels:n})=>(0,r.jsxs)(S,{children:[(0,r.jsx)(_,{color:t,opacity:.4,points:[[-e.x,0,0],[e.x,0,0]],width:1}),(0,r.jsx)(_,{color:t,opacity:.4,points:[[0,-e.y,0],[0,e.y,0]],width:1}),(0,r.jsx)(_,{color:t,opacity:.45,points:[[0,0,-e.z],[0,0,e.z]],width:1}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{center:!0,position:[e.x+.2,0,0],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"x"})}),(0,r.jsx)(b,{center:!0,position:[0,0,e.y+.2],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"y"})}),(0,r.jsx)(b,{center:!0,position:[0,e.z+.2,0],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"z"})})]})]}),C=(0,l.memo)(function({colors:e,geometry:t,isThumbnail:n,scale:i,staticColumnSegments:a,staticRowSegments:s}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,{bounds:j,color:e.axis,showLabels:!n}),(0,r.jsxs)(S,{scale:i,children:[(0,r.jsx)(E,{geometry:t,renderOrder:1,children:(0,r.jsx)("meshBasicMaterial",{color:e.primary,depthWrite:!1,opacity:.15,side:2,transparent:!0})}),s.map(({key:t,points:n})=>(0,r.jsx)(_,{color:e.primary,opacity:.3,points:n,width:.95},t)),a.map(({key:t,points:n})=>(0,r.jsx)(_,{color:e.primary,opacity:.3,points:n,width:.95},t))]})]})}),N=({colors:e,isThumbnail:t,parsed:n,values:i})=>{let a=(0,l.useMemo)(()=>(0,v.Lo)(n),[n]),s=(0,l.useMemo)(()=>(0,v.eB)(n),[n]),o=(0,l.useMemo)(()=>(e=>{let t=[];for(let n=0;n+1<e.length;n+=1)for(let r=0;r+1<e[n].length;r+=1){let i=e[n][r],a=e[n+1][r],s=e[n+1][r+1],o=e[n][r+1];i&&a&&s&&o&&t.push(...(0,v.tS)(i),...(0,v.tS)(a),...(0,v.tS)(s),...(0,v.tS)(i),...(0,v.tS)(s),...(0,v.tS)(o))}let n=new f.LoY;return n.setAttribute("position",new f.qtW(t,3)),n.computeVertexNormals(),n})(s),[s]),u=(0,v.zr)(n,i),d=(0,l.useMemo)(()=>(0,v.I5)(s.flat()),[s]),c=(0,l.useMemo)(()=>[d.x,d.z,d.y],[d]),m=a[0]?.slot??"t",p="t"===m?i.s:i.t,h=(0,l.useMemo)(()=>(0,v.ul)(n,i,m),[p,m,n]),x=a[1]?.slot,g="t"===x?i.s:i.t,b=(0,l.useMemo)(()=>x?(0,v.ul)(n,i,x):[],[n,g,x]),y=(0,l.useMemo)(()=>s.filter((e,t)=>t%4==0).flatMap((e,t)=>(0,v.gW)(e).map((e,n)=>({key:`first-parameter-${t}-${n}`,points:e}))),[s]),w=(0,l.useMemo)(()=>Array.from({length:9},(e,t)=>Math.round(t*((s[0]?.length??1)-1)/8)).flatMap(e=>(0,v.gW)(s.map(t=>t[e]??null)).map((t,n)=>({key:`second-parameter-${e}-${n}`,points:t}))),[s]);return(0,l.useEffect)(()=>()=>o.dispose(),[o]),(0,r.jsxs)(S,{children:[(0,r.jsx)(C,{colors:e,geometry:o,isThumbnail:t,scale:c,staticColumnSegments:w,staticRowSegments:y}),(0,r.jsx)(S,{scale:c,children:!t&&(0,r.jsxs)(r.Fragment,{children:[h.map((t,n)=>(0,r.jsx)(_,{color:e.companion,points:t,width:2.2},`selected-first-parameter-${n}`)),b.map((t,n)=>(0,r.jsx)(_,{color:e.accent,points:t,width:2.4},`selected-second-parameter-${n}`))]})}),!t&&u&&(0,r.jsx)(S,{position:(0,v.tS)((0,v.oy)(u,d)),children:(0,r.jsxs)(E,{children:[(0,r.jsx)("sphereGeometry",{args:[.13,20,16]}),(0,r.jsx)("meshStandardMaterial",{color:e.accent,roughness:.45})]})})]})};n.d(t,{},{ParametrizedSurfacesCaption:({values:e})=>{let t=(0,d.A)(),n=(0,v.s4)(e),i=(0,x.WY)(n.sourceContent)??v.Rz,a=(0,v.Lo)(i),s=(0,v.zr)(i,n);if(!s)return null;let o=i.declaredParameters.map(e=>{let r,i=a.find(({name:t})=>t===e);return i?(0,x.Zh)(i.name)?1e-9>Math.abs(r=n[i.slot]/Math.PI)?"0":1e-9>Math.abs(r-1)?"\\pi":1e-9>Math.abs(r+1)?"-\\pi":`${z(t,r)}\\pi`:z(t,n[i.slot]):(0,x.ns)(e)}).join(","),l=s.map(e=>z(t,e)).join(",\\,");return(0,r.jsx)(m.Vq,{reserveLines:1,children:(0,r.jsx)(m.OZ,{className:"text-sm leading-6 sm:text-base",format:"katex",content:`${i.functionName}\\left(${o}\\right)=\\left[${l}\\right]`,noWrap:!0})})},ParametrizedSurfacesControls:({values:e,setValues:t})=>{let n=(0,d.A)(),i=(0,v.s4)(e),a=(0,x.WY)(i.sourceContent)??v.Rz,s=(0,v.Lo)(a),o=(0,h.Z7)(n);return(0,r.jsx)(m.Ur,{screenReaderContent:(0,r.jsx)(c.A,{id:"learningBlock.parametrizedSurfaces.controlsDescription",defaultMessage:"Adjust both parameters of the vector-valued surface. The selected point and the corresponding parameter curves update together."}),children:(0,r.jsx)(p.J,{inputs:s.map(({name:e,slot:r})=>{let a=(0,x.ns)(e),s=n.formatMessage({id:"learningBlock.parametrizedSurfaces.surfaceParameter",defaultMessage:"Surface parameter {parameter}"},{parameter:e});if(!(0,x.Zh)(e))return(0,p.b)(r,"t"===r?v.Tj:v.gC,i,t,{...o,ariaLabel:s,variable:a,variableFormat:"katex"});let l="t"===r?v.Tj:v.gC,u=i[r]/Math.PI;return{...o,formatValueForInput:e=>k(n,e),ariaLabel:s,ariaValueText:n.formatMessage({id:"learningBlock.parametrizedSurfaces.angularParameterValuePluralized",defaultMessage:"{coefficient, plural, one {# pi radian} other {# pi radians}}"},{coefficient:u}),min:l.min/Math.PI,max:l.max/Math.PI,step:l.step,value:u,variable:a,variableFormat:"katex",inlineUnit:!0,unit:"\u03C0",onChange:e=>t(t=>({...t,[r]:e*Math.PI}),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}})})})},ParametrizedSurfacesVisualization:({values:e,presentationMode:t})=>{let n=(0,d.A)(),i=(0,l.useRef)(null),a=(0,l.useRef)(null),s=(e=>{let[t,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e,r,i=(e=window.getComputedStyle(t),{accent:(r=t=>e.getPropertyValue(t).trim()||e.color)("--learning-block-accent"),axis:r("--text-tertiary"),companion:r("--learning-block-color-companion"),primary:r("--learning-block-color-primary")});n(e=>e&&Object.keys(i).every(t=>e[t]===i[t])?e:i)};r();let i=new MutationObserver(r);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),i.observe(t,{attributes:!0,attributeFilter:["class","style"]}),()=>i.disconnect()},[e]),t})(i),o=(e=>{let[t,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let t=e.current;if(!t)return;if("u"<typeof IntersectionObserver)return void n(!0);let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&n(!0)},{rootMargin:"64px 0px"});return r.observe(t),()=>r.disconnect()},[e]),t})(i),u=(0,l.useMemo)(()=>(0,v.s4)(e),[e.s,e.sourceContent,e.t]),c=(0,l.useMemo)(()=>(0,x.WY)(u.sourceContent)??v.Rz,[u.sourceContent]),f=(0,l.useMemo)(()=>(0,v.Lo)(c),[c]),m=(0,v.zr)(c,u),p="thumbnail"===t,h=n.formatMessage(L.surface),b=f.map(({name:e,slot:t})=>(0,x.Zh)(e)?`${e} = ${k(n,u[t]/Math.PI)}\u{3C0}`:`${e} = ${k(n,u[t])}`).join(", "),y=m?m.map(e=>k(n,e)).join(", "):n.formatMessage({id:"learningBlock.parametrizedSurfaces.undefinedPoint",defaultMessage:"undefined"}),S=n.formatMessage({id:"learningBlock.parametrizedSurfaces.visualizationDescription",defaultMessage:"Three-dimensional parametrized {kind} with {parameters} and selected point ({point})."},{kind:h,parameters:b,point:y});return(0,r.jsx)("div",{ref:i,"aria-label":S,"aria-description":p?void 0:n.formatMessage(L.cameraInstructions),className:`text-token-text-primary relative w-full overflow-hidden ${p?"h-full":"h-[252px] sm:h-[270px]"}`,onKeyDown:p?void 0:e=>{let t=a.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+M);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-M);break;case"ArrowUp":t.setPolarAngle(t.getPolarAngle()-M);break;case"ArrowDown":t.setPolarAngle(t.getPolarAngle()+M);break;default:return}e.preventDefault()}},role:"img",tabIndex:p?void 0:0,children:s&&o&&(0,r.jsxs)(g,{"data-learning-block-pan":p?void 0:"both","aria-hidden":"true",camera:{fov:43,position:A},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0,powerPreference:"low-power"},style:{height:"100%",touchAction:p?"auto":"none",width:"100%"},children:[(0,r.jsx)("ambientLight",{intensity:1.5}),(0,r.jsx)("directionalLight",{position:[4,7,5],intensity:1.25}),(0,r.jsx)(N,{colors:s,isThumbnail:p,parsed:c,values:u}),!p&&(0,r.jsx)(w,{ref:a,enableDamping:!1,enablePan:!1,enableZoom:!1,minPolarAngle:.18,maxPolarAngle:Math.PI-.18})]})})}})}};
//# sourceMappingURL=927650.cf60096120.js.map