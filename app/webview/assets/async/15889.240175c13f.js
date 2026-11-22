export const __rspack_esm_ids=[15889];export const __webpack_modules__={Ipng(e,t,n){let r,i;n.d(t,{N:()=>P});var a=n("unhp"),o=n("zd8w"),s=n("PVZC"),l=n("hPwS");let u=new s.NRn,d=new s.Pq0;class c extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)d.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(d)),d.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n("STXV");let p=parseInt("179".replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=p>=125?"uv1":"uv2",v=new s.IUQ,x=new s.Pq0,g=new s.Pq0,b=new s.IUQ,w=new s.IUQ,y=new s.IUQ,S=new s.Pq0,E=new s.kn4,M=new s.cZY,A=new s.Pq0,L=new s.NRn,_=new s.iyt,j=new s.IUQ;function k(e,t,n){return j.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),j.multiplyScalar(1/j.w),j.x=i/n.width,j.y=i/n.height,j.applyMatrix4(e.projectionMatrixInverse),j.multiplyScalar(1/j.w),Math.abs(Math.max(j.x,j.y))}class z extends s.eaF{constructor(e=new c,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)x.fromBufferAttribute(t,e),g.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+x.distanceTo(g);let i=new s.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let n,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let d=this.matrixWorld,c=this.geometry,f=this.material;if(i=f.linewidth+u,null===c.boundingSphere&&c.computeBoundingSphere(),_.copy(c.boundingSphere).applyMatrix4(d),o)n=.5*i;else{let e=Math.max(l.near,_.distanceToPoint(r.origin));n=k(l,e,f.resolution)}if(_.radius+=n,!1!==r.intersectsSphere(_)){if(null===c.boundingBox&&c.computeBoundingBox(),L.copy(c.boundingBox).applyMatrix4(d),o)a=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(r.origin));a=k(l,e,f.resolution)}L.expandByScalar(a),!1!==r.intersectsBox(L)&&(o?function(e,t){let n=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let a=0;a<u;a++){M.start.fromBufferAttribute(o,a),M.end.fromBufferAttribute(l,a),M.applyMatrix4(n);let u=new s.Pq0,d=new s.Pq0;r.distanceSqToSegment(M.start,M.end,d,u),d.distanceTo(u)<.5*i&&t.push({point:d,pointOnLine:u,distance:r.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,u=e.geometry,d=u.attributes.instanceStart,c=u.attributes.instanceEnd,f=Math.min(u.instanceCount,d.count),p=-t.near;r.at(1,y),y.w=1,y.applyMatrix4(t.matrixWorldInverse),y.applyMatrix4(a),y.multiplyScalar(1/y.w),y.x*=o.x/2,y.y*=o.y/2,y.z=0,S.copy(y),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(b.fromBufferAttribute(d,t),w.fromBufferAttribute(c,t),b.w=1,w.w=1,b.applyMatrix4(E),w.applyMatrix4(E),b.z>p&&w.z>p)continue;if(b.z>p){let e=b.z-w.z,t=(b.z-p)/e;b.lerp(w,t)}else if(w.z>p){let e=w.z-b.z,t=(w.z-p)/e;w.lerp(b,t)}b.applyMatrix4(a),w.applyMatrix4(a),b.multiplyScalar(1/b.w),w.multiplyScalar(1/w.w),b.x*=o.x/2,b.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,M.start.copy(b),M.start.z=0,M.end.copy(w),M.end.z=0;let u=M.closestPointToPointParameter(S,!0);M.at(u,A);let f=s.cj9.lerp(b.z,w.z,u),m=f>=-1&&f<=1,v=S.distanceTo(A)<.5*i;if(m&&v){M.start.fromBufferAttribute(d,t),M.end.fromBufferAttribute(c,t),M.start.applyMatrix4(l),M.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;r.distanceSqToSegment(M.start,M.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class C extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class N extends z{constructor(e=new C,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let P=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:u,dashed:d,...f},p){var h,v;let x=(0,l.C)(e=>e.size),g=o.useMemo(()=>u?new z:new N,[u]),[b]=o.useState(()=>new m),w=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,y=o.useMemo(()=>{let r=u?new c:new C,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);r.setColors(e.flat(),w)}return r},[e,u,n,w]);return o.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),o.useLayoutEffect(()=>{d?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[d,b]),o.useEffect(()=>()=>{y.dispose(),b.dispose()},[y]),o.createElement("primitive",(0,a.A)({object:g,ref:p},f),o.createElement("primitive",{object:y,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:b,attach:"material",color:t,vertexColors:!!n,resolution:[x.width,x.height],linewidth:null!=(v=null!=r?r:i)?v:1,dashed:d,transparent:4===w},f)))})},mevF(e,t,n){let r,i;var a=n("unhp"),o=n("zd8w"),s=n("CE87"),l=n("PVZC"),u=n("hPwS");let d=new l.Pq0,c=new l.Pq0,f=new l.Pq0,p=new l.I9Y;function m(e,t,n){let r=d.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let x=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,r)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,i(t),"translate(-50%,-50%)")),b=o.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:v,fullscreen:b,portal:w,distanceFactor:y,sprite:S=!1,transform:E=!1,occlude:M,onOcclude:A,castShadow:L,receiveShadow:_,material:j,geometry:k,zIndexRange:z=[0x1000037,0],calculatePosition:C=m,as:N="div",wrapperClass:P,pointerEvents:U="auto",...B},R)=>{let{gl:T,camera:O,scene:D,size:I,raycaster:W,events:H,viewport:F}=(0,u.C)(),[$]=o.useState(()=>document.createElement(N)),V=o.useRef(null),q=o.useRef(null),G=o.useRef(0),Q=o.useRef([0,0]),K=o.useRef(null),Y=o.useRef(null),Z=(null==w?void 0:w.current)||H.connected||T.domElement.parentNode,J=o.useRef(null),X=o.useRef(!1),ee=o.useMemo(()=>{var e;return M&&"blending"!==M||Array.isArray(M)&&M.length&&(e=M[0])&&"object"==typeof e&&"current"in e},[M]);o.useLayoutEffect(()=>{let e=T.domElement;M&&"blending"===M?(e.style.zIndex=`${Math.floor(z[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[M]),o.useLayoutEffect(()=>{if(q.current){let e=V.current=s.createRoot($);if(D.updateMatrixWorld(),E)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=C(q.current,O,I);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(i?Z.prepend($):Z.appendChild($)),()=>{Z&&Z.removeChild($),e.unmount()}}},[Z,E]),o.useLayoutEffect(()=>{P&&($.className=P)},[P]);let et=o.useMemo(()=>E?{position:"absolute",top:0,left:0,width:I.width,height:I.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...b&&{top:-I.height/2,left:-I.width/2,width:I.width,height:I.height},...n},[n,v,b,I,E]),en=o.useMemo(()=>({position:"absolute",pointerEvents:U}),[U]);o.useLayoutEffect(()=>{var t,i;X.current=!1,E?null==(t=V.current)||t.render(o.createElement("div",{ref:K,style:et},o.createElement("div",{ref:Y,style:en},o.createElement("div",{ref:R,className:r,style:n,children:e})))):null==(i=V.current)||i.render(o.createElement("div",{ref:R,style:et,className:r,children:e}))});let er=o.useRef(!0);(0,u.D)(e=>{if(q.current){O.updateMatrixWorld(),q.current.updateWorldMatrix(!0,!1);let e=E?Q.current:C(q.current,O,I);if(E||Math.abs(G.current-O.zoom)>t||Math.abs(Q.current[0]-e[0])>t||Math.abs(Q.current[1]-e[1])>t){var n;let t,r,i,a,o=(n=q.current,t=d.setFromMatrixPosition(n.matrixWorld),r=c.setFromMatrixPosition(O.matrixWorld),i=t.sub(r),a=O.getWorldDirection(f),i.angleTo(a)>Math.PI/2),s=!1;ee&&(Array.isArray(M)?s=M.map(e=>e.current):"blending"!==M&&(s=[D]));let u=er.current;s?er.current=function(e,t,n,r){let i=d.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),p.set(a.x,a.y),n.setFromCamera(p,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}(q.current,O,W,s)&&!o:er.current=!o,u!==er.current&&(A?A(!er.current):$.style.display=er.current?"block":"none");let m=Math.floor(z[0]/2),v=M?ee?[z[0],m]:[m-1,0]:z;if($.style.zIndex=`${function(e,t,n){if(t instanceof l.ubm||t instanceof l.qUd){let r=d.setFromMatrixPosition(e.matrixWorld),i=c.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}(q.current,O,v)}`,E){let[e,t]=[I.width/2,I.height/2],n=O.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=O,l=x(O.matrixWorldInverse),u=r?`scale(${n})translate(${h(-(s+a)/2)}px,${h((i+o)/2)}px)`:`translateZ(${n}px)`,d=q.current.matrixWorld;S&&((d=O.matrixWorldInverse.clone().transpose().copyPosition(d).scale(q.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),$.style.width=I.width+"px",$.style.height=I.height+"px",$.style.perspective=r?"":`${n}px`,K.current&&Y.current&&(K.current.style.transform=`${u}${l}translate(${e}px,${t}px)`,Y.current.style.transform=g(d,1/((y||10)/400)))}else{let t=void 0===y?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let n=d.setFromMatrixPosition(e.matrixWorld),r=c.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}(q.current,O)*y;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Q.current=e,G.current=O.zoom}}if(!ee&&J.current&&!X.current)if(E){if(K.current){let e=K.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=O;if(t||k)B.scale&&(Array.isArray(B.scale)?B.scale instanceof l.Pq0?J.current.scale.copy(B.scale.clone().divideScalar(1)):J.current.scale.set(1/B.scale[0],1/B.scale[1],1/B.scale[2]):J.current.scale.setScalar(1/B.scale));else{let t=(y||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;J.current.scale.set(n,r,1)}X.current=!0}}}else{let t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/F.factor,n=t.clientWidth*e,r=t.clientHeight*e;J.current.scale.set(n,r,1),X.current=!0}J.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:E?void 0:`
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
      `}),[E]);return o.createElement("group",(0,a.A)({},B,{ref:q}),M&&!ee&&o.createElement("mesh",{castShadow:L,receiveShadow:_,ref:J},k||o.createElement("planeGeometry",null),j||o.createElement("shaderMaterial",{side:2,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))});n.d(t,{},{E:b})},xJmQ(e,t,n){var r=n("Qgfj"),i=n("tARr");let a=(0,r.YK)({plus:{id:"learningBlock.accessibleMath.plus",defaultMessage:"{left} plus {right}"},minus:{id:"learningBlock.accessibleMath.minus",defaultMessage:"{left} minus {right}"},times:{id:"learningBlock.accessibleMath.times",defaultMessage:"{left} times {right}"},over:{id:"learningBlock.accessibleMath.over",defaultMessage:"{left} over {right}"},power:{id:"learningBlock.accessibleMath.power",defaultMessage:"{base} to the power of {exponent}"},squared:{id:"learningBlock.accessibleMath.squared",defaultMessage:"{value} squared"},cubed:{id:"learningBlock.accessibleMath.cubed",defaultMessage:"{value} cubed"},negative:{id:"learningBlock.accessibleMath.negative",defaultMessage:"negative {value}"},squareRoot:{id:"learningBlock.accessibleMath.squareRoot",defaultMessage:"square root of {value}"},function:{id:"learningBlock.accessibleMath.function",defaultMessage:"{functionName} of {value}"}}),o=/^(?:[a-z][a-z0-9]*|-?\d+(?:\.\d+)?)$/i;n.d(t,{},{_:(e,t)=>{let n=t.replaceAll("\\left","").replaceAll("\\right","").trim();if(o.test(n)){let t=Number(n);return Number.isFinite(t)?e.formatNumber(t,{maximumSignificantDigits:6}):n}let r=(0,i.qQ)(`z=${n}`);if(!r)return n.replace(/[{}\\]/g,"");let s=[];for(let t of r){if("number"===t.type){s.push({text:e.formatNumber(t.value,{maximumSignificantDigits:6,useGrouping:!1}),numericValue:t.value});continue}if("identifier"===t.type){s.push({text:t.value});continue}if("function"===t.type){let r=s.pop();if(!r)return n.replace(/[{}\\]/g,"");let i="sqrt"===t.value?a.squareRoot:"neg"===t.value?a.negative:a.function;s.push({text:e.formatMessage(i,{functionName:t.value,value:r.text})});continue}if("operator"!==t.type)continue;let r=s.pop(),i=s.pop();if(!i||!r)return n.replace(/[{}\\]/g,"");if("^"===t.value&&2===r.numericValue){s.push({text:e.formatMessage(a.squared,{value:i.text})});continue}if("^"===t.value&&3===r.numericValue){s.push({text:e.formatMessage(a.cubed,{value:i.text})});continue}let o="+"===t.value?a.plus:"-"===t.value?a.minus:"*"===t.value?a.times:"/"===t.value?a.over:a.power;s.push({text:e.formatMessage(o,{left:i.text,right:r.text,base:i.text,exponent:r.text})})}return 1===s.length?s[0].text:n.replace(/[{}\\]/g,"")}})},sKwe(e,t,n){var r=n("ABep"),i=n("on57"),a=n("zd8w"),o=n("iLdV");let s=e=>e?e.replace(/\\mid/g,"|").replace(/\\neg/g,"\xac").replace(/\\cap/g,"\u2229").replace(/\\cup/g,"\u222A").replace(/\\text\{([^}]*)\}/g,"$1").replace(/\\mathrm\{([^}]*)\}/g,"$1").replace(/\\[a-zA-Z]+/g,"").replace(/[{}_^]/g,"").replace(/\s+/g," ").trim().length:0,l=e=>{let t=e.formatValueForInput??o.hG,n=Math.max((0,o.m_)(e.min,e.step,t).length,(0,o.m_)(e.max,e.step,t).length),r=e.inlineUnit?e.unit?.length??0:0;return e.range?2*n+2:n+r};n.d(t,{},{J:({inputs:e})=>{let t=(0,a.useRef)(null),[n,u]=(0,a.useState)(),d=e.some(e=>e.before),c=e.filter(e=>!e.options&&!1!==e.showValueInput),f=Math.max(0,...e.map(e=>s(e.variable))),p=Math.max(0,...c.map(l)),m=Math.max(0,...c.map(e=>s(e.inlineUnit?void 0:e.unit))),h=e.map(e=>e.variable??"").join("\0");return(0,a.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let n=Array.from(e.querySelectorAll("[data-input-selector-variable]"));if(0===n.length)return;let r=()=>{let t=n.filter(e=>"stacked"!==e.dataset.inputSelectorLabelLayout),r=t.length?Math.max(...t.map(t=>{let n=t.cloneNode(!0);n.removeAttribute("data-input-selector-variable"),Object.assign(n.style,{inset:"0 auto auto 0",maxWidth:"none",position:"absolute",visibility:"hidden",whiteSpace:"nowrap",width:"max-content"}),e.appendChild(n);let r=n.getBoundingClientRect().width;return n.remove(),r})):void 0;u(e=>e===r?e:r)};if(r(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(r);n.forEach(e=>i.observe(e));let a=new MutationObserver(r);return n.forEach(e=>a.observe(e,{attributeFilter:["data-input-selector-label-layout"]})),()=>{i.disconnect(),a.disconnect()}},[h]),(0,r.jsx)("div",{ref:t,"data-input-selector-group":!0,className:"grid min-h-fit min-w-0 shrink grow-0 gap-y-3",children:e.map((e,t)=>(0,r.jsxs)("div",{className:(0,i.A)("grid h-full min-w-0 items-center gap-x-2",d?"grid-cols-[auto_minmax(0,1fr)]":"grid-cols-[minmax(0,1fr)]"),children:[d?e.before??(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)(o.KV,{...e,groupVariableWidthCh:f,groupVariableWidthPx:n,groupUnitWidthCh:m,groupValueWidthCh:p})]},t))})},b:(e,t,n,r,{before:i,disabled:a,displayValue:o,editType:s="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",formatValueForInput:l,inlineUnit:u,parseInputValue:d,mapValue:c,options:f,optionLabelFormat:p,showValueInput:m,sliderStyle:h,ariaLabel:v,ariaValueText:x,onActiveChange:g,value:b,variable:w,variableBold:y,variableFormat:S,unit:E}={})=>{var M;return{before:i,disabled:a,displayValue:o,options:f,optionLabelFormat:p,showValueInput:m,sliderStyle:h,inlineUnit:u,ariaLabel:v,ariaValueText:x,variable:w??t.variable??(M=String(e),M.match(/[A-Za-z]/)?.[0]??M),variableBold:y??t.variableBold,variableFormat:S??t.variableFormat,unit:E??t.unit,formatValueForInput:l,parseInputValue:d,max:t.max,min:t.min,step:t.step,value:b??Number(n[e]),onActiveChange:g,onChange:(t,n)=>{let i=c?c(t):t;r(t=>({...t,[e]:i}),"function"==typeof s?s(n):s)}}}})},iLdV(e,t,n){var r=n("ABep"),i=n("YAOF"),a=n("on57"),o=n("zd8w"),s=n("Wf1j"),l=n("l7Go"),u=n("jYuH"),d=n("Bdtm");let c=(e,t,n)=>Math.min(Math.max(e,t),n),f=/[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?/i,p=(e,t,n,r)=>{if(!Number.isFinite(e))return t;let i=Math.round((c(e,t,n)-t)/r),a=(0,u.Dp)(r);return c((0,u.eB)(t+i*r,Math.max(1,a)),t,n)},m=(e,t)=>Number.isFinite(e)?e.toFixed(Math.max(1,(0,u.Dp)(t))):"",h=(e,t,n)=>{let r=n(e,t);return r.match(f)?.[0]??r},v=96,x=e=>{let t=[],n=e.parentElement;for(;n;)"visible"!==window.getComputedStyle(n).overflowY&&t.push(n),n=n.parentElement;return t},g=(0,o.createContext)({isNativeSlider:!1}),b=()=>(0,r.jsx)("svg",{"aria-hidden":!0,className:"h-4 w-4 flex-none",fill:"none",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"m5 6 3-3 3 3M5 10l3 3 3-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});n.d(t,{},{KV:({min:e,max:t,step:n,value:u,displayValue:c,onChange:w,onActiveChange:y,disabled:S,options:E,optionLabelFormat:M="text",sliderStyle:A="continuous",ariaLabel:L,ariaValueText:_,variable:j,variableBold:k,variableFormat:z,inlineUnit:C,unit:N,formatValueForInput:P=m,parseInputValue:U,normalizeCommittedValue:B,minSliderWidthPx:R,showValueInput:T=!0,range:O,valueClassName:D,groupVariableWidthCh:I,groupVariableWidthPx:W,groupUnitWidthCh:H,groupValueWidthCh:F})=>{let $,{isNativeSlider:V,onSliderInteractionEnd:q,onSliderInteractionStart:G}=(0,o.useContext)(g),Q=(0,s.A)(),K=U??Number.parseFloat,Y=p(u,e,t,n),Z=Number.isFinite(c)?c:Y,[J,X]=(0,o.useState)(()=>h(Z,n,P)),[ee,et]=(0,o.useState)(!1),en=(0,o.useRef)(!1),er=(0,o.useRef)(!1),ei=(0,o.useRef)(!1),ea=(0,o.useRef)(null),eo=(0,o.useRef)(null),es=(0,o.useRef)(null),el=(0,o.useRef)(null),eu=(0,o.useRef)(null),ed=(0,o.useRef)(null),ec=(0,o.useRef)(null),ef=(0,o.useRef)(null),ep=(0,o.useRef)(!1),[em,eh]=(0,o.useState)(!1),[ev,ex]=(0,o.useState)(!1),[eg,eb]=(0,o.useState)(!1),[ew,ey]=(0,o.useState)(V?"above":"below"),eS=(e="blur")=>{"blur"===e&&ei.current||er.current&&(er.current=!1,y?.(!1),q?.())},eE=()=>{er.current||(er.current=!0,y?.(!0),G?.(j))},eM=()=>{ei.current=!0,eE()};(0,o.useEffect)(()=>{let e=()=>{ei.current=!1,eS("pointer-end")};return window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e)}},[y,q]),(0,o.useLayoutEffect)(()=>{let e=eu.current,t=ed.current;if(!E||!e||!t)return void eh(!1);let n=()=>{let n=e.clientWidth,r=t.scrollWidth>n+1;eh(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{r?.removeEventListener("loadingdone",n),i.disconnect()}},[E,M]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&ep.current&&(ep.current=!1,e.preventDefault(),e.stopPropagation())};return document.addEventListener("keyup",e,!0),()=>document.removeEventListener("keyup",e,!0)},[]),(0,o.useEffect)(()=>{if(!eg)return;ep.current=!1;let e=e=>{let t=e.target;!(t instanceof Node)||ec.current?.contains(t)||ef.current?.contains(t)||eb(!1)},t=e=>{"Escape"===e.key&&(ep.current=!0,e.preventDefault(),e.stopPropagation(),eb(!1),ef.current?.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t,!0)}},[eg]),(0,o.useEffect)(()=>{(!em||S)&&eb(!1)},[S,em]),(0,o.useLayoutEffect)(()=>{if(!eg)return void ey(V?"above":"below");let e=ec.current,t=ef.current;if(!e||!t)return;let n=()=>{ey((({boundary:e,menuHeight:t,trigger:n})=>{let r=e.bottom-n.bottom-4;if(t<=r)return"below";let i=n.top-e.top-4;return t<=i||i>r?"above":"below"})({boundary:(({clippingAncestors:e,viewport:t})=>e.reduce((e,t)=>({bottom:Math.min(e.bottom,t.bottom),top:Math.max(e.top,t.top)}),t))({clippingAncestors:x(t).map(e=>e.getBoundingClientRect()),viewport:{bottom:window.innerHeight,top:0}}),menuHeight:e.getBoundingClientRect().height,trigger:t.getBoundingClientRect()}))};if(n(),window.addEventListener("resize",n),"u"<typeof ResizeObserver)return()=>window.removeEventListener("resize",n);let r=new ResizeObserver(n);return r.observe(e),r.observe(t),x(t).forEach(e=>r.observe(e)),()=>{window.removeEventListener("resize",n),r.disconnect()}},[eg,V]);let eA=ee?J:h(Z,n,P),eL=Math.max(h(e,n,P).length,h(t,n,P).length),e_=O?($=O.displayValues??O.ariaValueTexts??[h(O.values[0],n,P),h(O.values[1],n,P)],`(${$[0]}, ${$[1]})`):void 0,ej=O?2*eL+2:eL,ek=F??ej,ez=R??v,eC=k??!1,eN=j?j.replace(/[^\w-]+/g,"_"):"input-selector-value",eP=L??(j?Q.formatMessage({id:"learningBlock.inputSelector.valueAriaLabel",defaultMessage:"{label} value"},{label:j}):void 0),eU=!!j&&"text"!==z&&(!!("katex"===z||/\\/.test(j))||/^[A-Za-z\u03b8\u03bc\u03c3\u03bb\u03c0\u0394](?:[_^][A-Za-z0-9{}]+)?$/.test(j)),eB=E?.find(r=>p(r.value,e,t,n)===Y)??E?.[0],eR=em?Q.formatMessage({id:"learningBlock.inputSelector.overflowMenuAriaLabel",defaultMessage:"{value}. Show all {label} options"},{label:eP??Q.formatMessage({id:"learningBlock.inputSelector.selectorAriaLabel",defaultMessage:"selector"}),value:eB?.ariaLabel??eB?.label??""}):void 0,eT=(0,o.useId)(),eO=(e,t)=>"katex"!==t?e:(0,r.jsx)(l.r,{className:"katex",latex:e}),eD=r=>p(r.value,e,t,n),eI=E?.find(e=>eD(e)===Y)??E?.[0],eW=r=>{let i=K(r);if(!Number.isFinite(i))return void X(h(Z,n,P));let a=((e,{max:t,min:n,normalizeCommittedValue:r,step:i})=>r?r(e):p(e,n,t,i))(i,{min:e,max:t,step:n,normalizeCommittedValue:B});w(a,"input"),X(h(a,n,P))},eH=j?(0,r.jsx)("div",{"data-input-selector-variable":!0,"data-input-selector-label-layout":ev?"stacked":"inline",className:(0,a.A)("text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]",eC&&"font-medium"),children:eU?(0,r.jsx)(l.r,{className:"katex",latex:j??""}):j}):null,eF=!!(C&&N&&!O),e$=N&&!eF?(0,r.jsx)("div",{ref:el,className:"text-token-text-secondary shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit",children:N}):null,eV=!!F,eq=`minmax(max(${ek}ch,2rem), max(${ek}ch,2rem))`,eG=!!H,eQ=`minmax(${H??0}ch, ${H??0}ch)`,eK=!E&&eG?e$??(0,r.jsx)("div",{ref:el,"aria-hidden":!0}):null,eY=W?`${W}px`:I?`${I}ch`:null,eZ=eY?`minmax(0, min(${eY}, 40%))`:"fit-content(40%)";(0,o.useLayoutEffect)(()=>{let e=ea.current,t=eo.current;if(E||!e||!t)return void ex(!1);let n=()=>{let n=e.clientWidth;if(0===n)return;let r=(({availableWidth:e,labelWidth:t,minSliderWidthPx:n=v,unitWidth:r,valueWidth:i})=>{let a=2+Number(i>0)+Number(r>0);return t+i+r+(a-1)*12+n>e+1})({availableWidth:n,labelWidth:Math.max(t.scrollWidth,W??0),minSliderWidthPx:ez,unitWidth:el.current?.clientWidth??0,valueWidth:es.current?.clientWidth??0});ex(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let i=new ResizeObserver(n);return i.observe(e),i.observe(t),es.current&&i.observe(es.current),el.current&&i.observe(el.current),()=>{r?.removeEventListener("loadingdone",n),i.disconnect()}},[H,F,W,E,ez,j,T,N]);let eJ=e=>ec.current?.querySelectorAll("[data-input-selector-discrete-menu-option]").item(e).focus();(0,o.useEffect)(()=>{eg&&E&&eJ(Math.max(E.findIndex(e=>eD(e)===Y),0))},[eg,E,Y]);let eX=E?(0,r.jsx)("div",{role:"radiogroup","aria-label":eP,className:(0,a.A)("flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6",S&&"opacity-40"),children:E.map(e=>{let t=eD(e),n=t===Y;return(0,r.jsx)("button",{type:"button",role:"radio","aria-checked":n,"aria-label":e.ariaLabel,disabled:S,className:(0,a.A)("text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",n&&"bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black",!n&&!S&&"hover:text-token-text-primary focus-visible:text-token-text-primary",!S&&"focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),onClick:()=>w(t,"input"),children:(0,r.jsx)("span",{className:"min-w-6",children:eO(e.label,M)})},e.value)})}):null,e0=E?(0,r.jsxs)("div",{"data-input-selector-discrete-rail":!0,className:(0,a.A)("relative h-6 w-full min-w-0",em&&"flex justify-end"),children:[em&&eI?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{type:"button","aria-controls":eT,"aria-expanded":eg,"aria-haspopup":"listbox","aria-label":eR,disabled:S,"data-input-selector-discrete-menu-trigger":!0,ref:ef,className:(0,a.A)("text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",!S&&"hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10"),onClick:()=>eb(e=>!e),children:[(0,r.jsx)("span",{className:"min-w-0 truncate",children:eO(eI.label,M)}),(0,r.jsx)(b,{})]}),eg?(0,r.jsx)("div",{ref:ec,"aria-label":eP,className:(0,a.A)("border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg","above"===ew?"bottom-full mb-1":"top-full mt-1"),id:eT,role:"listbox",children:E.map((e,t)=>{let n=eD(e),i=n===Y;return(0,r.jsx)("button",{type:"button","aria-selected":i,"data-input-selector-discrete-menu-option":!0,role:"option",className:(0,a.A)("flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]",i&&"bg-black/7 font-medium dark:bg-white/10",!i&&"hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10"),onClick:()=>{w(n,"input"),eb(!1),ef.current?.focus()},onKeyDown:e=>((e,t)=>{if(E)switch(e.key){case"ArrowDown":e.preventDefault(),eJ((t+1)%E.length);break;case"ArrowUp":e.preventDefault(),eJ((t-1+E.length)%E.length);break;case"Home":e.preventDefault(),eJ(0);break;case"End":e.preventDefault(),eJ(E.length-1)}})(e,t),children:eO(e.label,M)},e.value)})}):null]}):eX,(0,r.jsx)("div",{ref:ed,"aria-hidden":!0,"data-input-selector-overflow-measure":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0",children:(0,r.jsx)("div",{className:"flex h-6 w-max min-w-max gap-0.5 p-0.5",children:E.map(e=>(0,r.jsx)("span",{className:"flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]",children:(0,r.jsx)("span",{className:"min-w-6",children:eO(e.label,M)})},e.value))})})]}):null,e1=j&&!E&&T&&(0,r.jsxs)("div",{ref:es,className:(0,a.A)("text-token-text-primary grid h-5 min-w-8 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]",eF?"grid-cols-[minmax(0,1fr)_auto] gap-x-0.5":"grid-cols-1",O&&(ev?"text-end":"text-start"),D,!S&&!O&&"transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7"),"data-value":"0".repeat(ek),children:[O?(0,r.jsx)("span",{"data-input-selector-range-value":!0,className:(0,a.A)("relative flex h-full items-center tabular-nums [grid-area:1/1]",ev?"justify-end":"justify-start"),children:e_}):(0,r.jsx)("input",{"aria-label":eP,className:"relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none",disabled:S,inputMode:"decimal",name:eN,size:1,type:"text",value:eA,onBlur:()=>{if(en.current){en.current=!1;return}et(!1),eW(J)},onChange:e=>{var t;let n;return X(U?e.currentTarget.value:""===(n=(t=e.currentTarget.value).trim())||"-"===n||"."===n?t:n.match(f)?.[0]??t)},onFocus:()=>{et(!0),X(h(Z,n,P))},onKeyDown:e=>{if("Enter"===e.key){e.preventDefault(),en.current=!0,et(!1),eW(J),e.currentTarget.blur();return}"Escape"===e.key&&(e.preventDefault(),en.current=!0,et(!1),X(h(Y,n,P)),e.currentTarget.blur())}}),eF?(0,r.jsx)("span",{"aria-hidden":!0,className:"text-token-text-secondary self-center text-xs leading-4",children:N}):null]}),e2=[];ev?(j&&e2.push("minmax(0, 1fr)"),e1&&e2.push(eq),eK&&e2.push(eQ)):(j&&e2.push(eZ),e1&&e2.push(eq),eK&&e2.push(eQ),e2.push("minmax(0, 1fr)"));let e3=[],e4=eV&&!!j,e5=eG&&!!j;j&&e3.push(eZ),e4&&e3.push(eq),e5&&e3.push(eQ),e3.push("minmax(0, 1fr)");let e6=`${e3.length} / ${e3.length+1}`,e7=j?"2 / -1":"1 / -1",e8=Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(n)&&n>0&&t>=e?Math.max(0,Math.round((t-e)/n)):0,e9=Math.min(e8+1,12),te="stepped"===A&&e8>0?Array.from({length:e9},(e,t)=>t):[],tt="stepped"===A?"h-6 w-6":"h-5 w-5",tn="relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]",tr=te.length>0?(0,r.jsx)("div",{"aria-hidden":!0,"data-input-selector-rendered-marker-count":te.length,className:"pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between",children:te.map(e=>(0,r.jsx)("span",{"data-input-selector-step-marker":!0,className:"h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20"},e))}):null,ti=V&&!O?(0,r.jsxs)("div",{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,className:(0,a.A)(tn,S&&"opacity-40"),children:[tr,(0,r.jsx)("input",{"aria-label":eP,"aria-valuetext":_,type:"range","data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(d.A.inputSelector,"stepped"===A&&d.A.inputSelectorStepped,"text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center"),disabled:S,max:t,min:e,step:n,value:Y,onBlur:()=>eS("blur"),onChange:r=>{eE(),w(p(r.currentTarget.valueAsNumber,e,t,n),"slider")},onPointerDown:eM})]}):(0,r.jsxs)(i.bL,{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,"data-learning-block-pan":S?void 0:"horizontal",className:(0,a.A)(tn,"touch-pan-y",S&&"opacity-40"),disabled:S,max:t,min:e,onBlurCapture:()=>eS("blur"),onPointerDownCapture:eM,step:n,value:O?O.values.map(r=>p(r,e,t,n)):[Y],onValueChange:r=>{(eE(),O)?O.onChange([p(r[0],e,t,n),p(r[1],e,t,n)]):w(p(r[0],e,t,n),"slider")},children:[(0,r.jsx)(i.CC,{className:"absolute inset-0 rounded-full",children:(0,r.jsx)(i.Q6,{className:"absolute inset-y-0 rounded-full bg-transparent"})}),tr,(0,r.jsx)(i.zi,{"aria-label":O?.ariaLabels[0]??eP,"aria-valuetext":O?.ariaValueTexts?.[0]??_,className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt,O?"flex items-center justify-center text-black":"block"),children:O?.thumbLabels?.[0]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:O.thumbLabels[0]})}),O&&(0,r.jsx)(i.zi,{"aria-label":O.ariaLabels[1],"aria-valuetext":O.ariaValueTexts?.[1],className:(0,a.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative flex cursor-pointer items-center justify-center rounded-full border text-black shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt),children:O.thumbLabels?.[1]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:O.thumbLabels[1]})})]});return E?(0,r.jsxs)("div",{className:"grid h-full min-w-0 items-center gap-x-3",style:{gridTemplateColumns:e3.join(" ")},children:[eH,!em&&e4?(0,r.jsx)("div",{"aria-hidden":!0}):null,!em&&e5?(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)("div",{className:"h-full min-w-0",style:{gridColumn:em?e7:e6,gridRow:1},children:e0}),(0,r.jsx)("div",{ref:eu,"aria-hidden":!0,"data-input-selector-discrete-width-measure":!0,className:"pointer-events-none h-0 min-w-0 opacity-0",style:{gridColumn:e6,gridRow:1}})]}):(0,r.jsxs)("div",{ref:ea,className:(0,a.A)("relative grid min-w-0 items-center gap-x-3",O&&"text-[11px]",ev&&"gap-y-2"),style:{gridTemplateColumns:e2.join(" ")},children:[eH,e1,eK,(0,r.jsx)("div",{className:"min-w-0",style:ev?{gridColumn:"1 / -1"}:void 0,children:ti}),j?(0,r.jsx)("div",{ref:eo,"aria-hidden":!0,"data-input-selector-label-measure":!0,className:(0,a.A)("pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]",eC&&"font-medium"),children:eU?(0,r.jsx)(l.r,{className:"katex",latex:j??""}):j}):null]})},hG:m,m_:h,xT:e=>e})},eBVc(e,t,n){var r=n("ABep"),i=n("Ipng"),a=n("mevF"),o=n("Njew"),s=n("oeGO"),l=n("zd8w"),u=n("Qgfj"),d=n("Wf1j"),c=n("oyxz"),f=n("PVZC"),p=n("KwmQ"),m=n("sKwe"),h=n("xJmQ"),v=n("LP6J"),x=n("l7Go"),g=n("jwNX"),b=n("uUVS");let w=(0,u.YK)({lower:{id:"learningBlock.cartesianTripleIntegral.lowerBound",defaultMessage:"Lower {axis} integration bound"},upper:{id:"learningBlock.cartesianTripleIntegral.upperBound",defaultMessage:"Upper {axis} integration bound"}}),y=(e,t)=>e.formatNumber(1e-9>Math.abs(t)?0:t,{maximumFractionDigits:2,useGrouping:!1}),S=e=>[...(0,b._n)(e)],E=({active:e,colors:t,face:n})=>{let i=(0,l.useMemo)(()=>(e=>{let t=[];for(let n=0;n+1<e.grid.length;n+=1)for(let r=0;r+1<e.grid[n].length;r+=1){let i=e.grid[n][r],a=e.grid[n+1][r],o=e.grid[n+1][r+1],s=e.grid[n][r+1];i&&a&&o&&s&&t.push(...(0,b._n)(i),...(0,b._n)(a),...(0,b._n)(o),...(0,b._n)(i),...(0,b._n)(o),...(0,b._n)(s))}let n=new f.LoY;return n.setAttribute("position",new f.qtW(t,3)),n.computeVertexNormals(),n})(n),[n]);return(0,l.useEffect)(()=>()=>i.dispose(),[i]),(0,r.jsx)("mesh",{geometry:i,renderOrder:e?2:1,children:(0,r.jsx)("meshBasicMaterial",{color:e?t.accent:t.secondary,depthWrite:!1,opacity:e?"upper"===n.side?.24:.14:.085,side:2,transparent:!0})})},M=({color:e,from:t,opacity:n=1,points:a,to:o,width:s=1.5})=>(0,r.jsx)(i.N,{color:e,depthWrite:!1,lineWidth:s,opacity:n,points:(a??(t&&o?[t,o]:[])).map(S),transparent:n<1}),A=({color:e,extent:t,showLabels:n})=>(0,r.jsx)("group",{children:[{axis:"x",from:[-t,0,0],to:[t,0,0]},{axis:"y",from:[0,-t,0],to:[0,t,0]},{axis:"z",from:[0,0,-t],to:[0,0,t]}].map(({axis:t,from:i,to:o})=>(0,r.jsxs)("group",{children:[(0,r.jsx)(M,{color:e,from:i,opacity:.46,to:o,width:.95}),n?(0,r.jsx)(a.E,{center:!0,position:S(o),children:(0,r.jsx)(x.r,{latex:t,className:"pointer-events-none text-xs whitespace-nowrap",style:{color:e}})}):null]},t))}),L=(e,t,n,r)=>(0,h._)(r,(0,g.c0)(e.parsed.expressions[t][n],e.parsed.bounds[t][n],e.bounds[t][n],e=>y(r,e))),_=({analysis:e,colors:t,intl:n,isThumbnail:i})=>{let o=e.values.activeAxis,s=e.bounds[o],l=s.lower===s.upper?["upper"]:["lower","upper"];return(0,r.jsxs)("group",{children:[e.faces.map(e=>(0,r.jsx)(E,{active:e.axis===o,colors:t,face:e},`${e.axis}:${e.side}`)),e.edges.map((e,n)=>(0,r.jsx)(M,{color:e.axis===o?t.accent:t.primary,opacity:e.axis===o?.95:.7,points:e.points,width:e.axis===o?2.45:1.35},`${e.axis}:${n}`)),i?null:l.map(i=>(0,r.jsx)(a.E,{center:!0,position:S(((e,t)=>{let n=e.values.activeAxis,r=e.faces.find(e=>e.axis===n&&e.side===t),i=r?Math.floor(r.grid.length/2):0,a=r?.grid[i]?Math.floor(r.grid[i].length/2):0,[o,s,l]=r?.grid[i]?.[a]??e.center,u="lower"===t?-.35:.35;return"x"===n?[o+u,s,l]:"y"===n?[o,s+u,l]:[o,s,l+u]})(e,i)),children:(0,r.jsx)(x.r,{latex:`${o}=${(0,g.c0)(e.parsed.expressions[o][i],e.parsed.bounds[o][i],e.bounds[o][i],e=>y(n,e).replaceAll(",","{,}"))}`,className:"pointer-events-none text-xs font-semibold whitespace-nowrap",style:{color:t.accent}})},i))]})},j=({analysis:e,ariaLabel:t,groundAxis:n="z",presentationMode:i})=>{let a=(0,d.A)(),u=(0,l.useRef)(null),c=(e=>{let[t,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e=window.getComputedStyle(t),r=t=>e.getPropertyValue(t).trim()||e.color,i={accent:r("--learning-block-accent"),axis:r("--text-tertiary"),primary:r("--learning-block-color-primary"),secondary:r("--learning-block-color-secondary")};n(e=>e&&Object.keys(i).every(t=>e[t]===i[t])?e:i)};r();let i=new MutationObserver(r);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),i.observe(t,{attributes:!0,attributeFilter:["class","style"]}),()=>i.disconnect()},[e]),t})(u),f=(e=>{let[t,n]=(0,l.useState)(()=>"u"<typeof IntersectionObserver);return(0,l.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let r=new IntersectionObserver(([e])=>n(e?.isIntersecting??!1),{rootMargin:"48px 0px"});return r.observe(t),()=>r.disconnect()},[e]),t})(u),p="thumbnail"===i,m=p?Math.max(1.1,e.parsed.maxCoordinate+.25):e.rangeLimit+.3,h=p?Math.max(1.5,e.parsed.maxCoordinate+.55):e.rangeLimit+.7;return(0,r.jsx)("div",{ref:u,"aria-label":t,className:`text-token-text-primary relative w-full overflow-hidden ${p?"h-full":"h-[246px] sm:h-[270px]"}`,role:"img",children:c&&f?(0,r.jsxs)(s.Hl,{"data-learning-block-pan":p?void 0:"both","aria-hidden":"true",camera:{fov:p?35:40,position:[1.65*h,1.42*h,1.7*h]},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0,powerPreference:"low-power"},style:{height:"100%",touchAction:"none",width:"100%"},children:[(0,r.jsx)("ambientLight",{intensity:1.45}),(0,r.jsx)("directionalLight",{intensity:1.3,position:[4,7,5]}),p?null:(0,r.jsx)("gridHelper",{args:[2*e.rangeLimit,8,c.axis,c.axis],"material-opacity":.13,"material-transparent":!0,rotation:"x"===n?[0,0,Math.PI/2]:"y"===n?[Math.PI/2,0,0]:[0,0,0]}),(0,r.jsx)(A,{color:c.axis,extent:m,showLabels:!p}),(0,r.jsx)(_,{analysis:e,colors:c,intl:a,isThumbnail:p}),p?null:(0,r.jsx)(o.N,{enableDamping:!1,enablePan:!1,enableZoom:!1,minPolarAngle:.18,maxPolarAngle:Math.PI-.18})]}):null})};n.d(t,{},{CartesianTripleIntegralControls:({values:e,setValues:t})=>{let n=(0,d.A)(),i=(0,b.pI)(e),a=g.dW.filter(e=>{let t=i.parsed.expressions[e];return 0===t.lower.dependencies.length&&0===t.upper.dependencies.length}),o=(0,v.Z7)(n),s=(e,[n,r])=>{t(t=>{let i=(0,b.pI)({...t,[`${e}Lower`]:n,[`${e}Upper`]:r,activeAxis:e}).values;return i[`${e}Lower`]===n&&i[`${e}Upper`]===r?i:t},"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")};return(0,r.jsx)(p.Ur,{screenReaderContent:(0,r.jsx)(c.A,{id:"learningBlock.cartesianTripleIntegral.controlsDescription",defaultMessage:"Adjust the constant Cartesian integration bounds to reshape the three-dimensional region."}),children:(0,r.jsx)(m.J,{inputs:a.map(e=>{let r=n.formatMessage(w.lower,{axis:e}),a=n.formatMessage(w.upper,{axis:e}),l=i.bounds[e],u=l.lower>l.upper,d=u?[l.upper,l.lower]:[l.lower,l.upper],c=u?[y(n,l.upper),y(n,l.lower)]:[y(n,l.lower),y(n,l.upper)];return{...o,variable:e,variableFormat:"katex",min:-i.rangeLimit,max:i.rangeLimit,step:.01,value:l.upper,ariaLabel:a,ariaValueText:y(n,l.upper),onChange:t=>s(e,[u?Math.max(l.lower,t):Math.min(l.lower,t),t]),range:{values:d,ariaLabels:u?[a,r]:[r,a],ariaValueTexts:c,displayValues:[y(n,l.lower),y(n,l.upper)],onChange:t=>s(e,u?[t[1],t[0]]:t)},onActiveChange:n=>{n&&i.values.activeAxis!==e&&t(t=>({...t,activeAxis:e}),"CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")}}})})})},CartesianTripleIntegralVisualization:({values:e,presentationMode:t})=>{let n=(0,d.A)(),i=(0,l.useMemo)(()=>(0,b.pI)(e),[e]),a=n.formatMessage({id:"learningBlock.cartesianTripleIntegral.visualizationDescription",defaultMessage:"Cartesian triple-integral region with x from {xLower} to {xUpper}, y from {yLower} to {yUpper}, and z from {zLower} to {zUpper}. The oriented bounds enclose approximately {volumeCount, plural, one {{volume} cubic unit} other {{volume} cubic units}} of signed volume."},{xLower:L(i,"x","lower",n),xUpper:L(i,"x","upper",n),yLower:L(i,"y","lower",n),yUpper:L(i,"y","upper",n),zLower:L(i,"z","lower",n),zUpper:L(i,"z","upper",n),volume:y(n,i.volume),volumeCount:i.volume});return(0,r.jsx)(j,{analysis:i,ariaLabel:a,presentationMode:t})},v:j})}};
//# sourceMappingURL=15889.240175c13f.js.map