export const __rspack_esm_ids=[249107];export const __webpack_modules__={Ipng(e,t,n){let r,a;n.d(t,{N:()=>B});var i=n("unhp"),o=n("zd8w"),s=n("PVZC"),l=n("hPwS");let d=new s.NRn,u=new s.Pq0;class c extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let a=0,i=e.count;a<i;a++)u.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(u)),u.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var p=n("STXV");let f=parseInt("179".replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=f>=125?"uv1":"uv2",v=new s.IUQ,g=new s.Pq0,x=new s.Pq0,b=new s.IUQ,y=new s.IUQ,w=new s.IUQ,S=new s.Pq0,M=new s.kn4,E=new s.cZY,A=new s.Pq0,L=new s.NRn,j=new s.iyt,k=new s.IUQ;function z(e,t,n){return k.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),k.multiplyScalar(1/k.w),k.x=a/n.width,k.y=a/n.height,k.applyMatrix4(e.projectionMatrixInverse),k.multiplyScalar(1/k.w),Math.abs(Math.max(k.x,k.y))}class _ extends s.eaF{constructor(e=new c,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,a=0,i=t.count;e<i;e++,a+=2)g.fromBufferAttribute(t,e),x.fromBufferAttribute(n,e),r[a]=0===a?0:r[a-1],r[a+1]=r[a]+g.distanceTo(x);let a=new s.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(a,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(a,1,1)),this}raycast(e,t){let n,i,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let u=this.matrixWorld,c=this.geometry,p=this.material;if(a=p.linewidth+d,null===c.boundingSphere&&c.computeBoundingSphere(),j.copy(c.boundingSphere).applyMatrix4(u),o)n=.5*a;else{let e=Math.max(l.near,j.distanceToPoint(r.origin));n=z(l,e,p.resolution)}if(j.radius+=n,!1!==r.intersectsSphere(j)){if(null===c.boundingBox&&c.computeBoundingBox(),L.copy(c.boundingBox).applyMatrix4(u),o)i=.5*a;else{let e=Math.max(l.near,L.distanceToPoint(r.origin));i=z(l,e,p.resolution)}L.expandByScalar(i),!1!==r.intersectsBox(L)&&(o?function(e,t){let n=e.matrixWorld,i=e.geometry,o=i.attributes.instanceStart,l=i.attributes.instanceEnd,d=Math.min(i.instanceCount,o.count);for(let i=0;i<d;i++){E.start.fromBufferAttribute(o,i),E.end.fromBufferAttribute(l,i),E.applyMatrix4(n);let d=new s.Pq0,u=new s.Pq0;r.distanceSqToSegment(E.start,E.end,u,d),u.distanceTo(d)<.5*a&&t.push({point:u,pointOnLine:d,distance:r.origin.distanceTo(u),object:e,face:null,faceIndex:i,uv:null,[h]:null})}}(this,t):function(e,t,n){let i=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,u=d.attributes.instanceStart,c=d.attributes.instanceEnd,p=Math.min(d.instanceCount,u.count),f=-t.near;r.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(i),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,S.copy(w),M.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<p;t++){if(b.fromBufferAttribute(u,t),y.fromBufferAttribute(c,t),b.w=1,y.w=1,b.applyMatrix4(M),y.applyMatrix4(M),b.z>f&&y.z>f)continue;if(b.z>f){let e=b.z-y.z,t=(b.z-f)/e;b.lerp(y,t)}else if(y.z>f){let e=y.z-b.z,t=(y.z-f)/e;y.lerp(b,t)}b.applyMatrix4(i),y.applyMatrix4(i),b.multiplyScalar(1/b.w),y.multiplyScalar(1/y.w),b.x*=o.x/2,b.y*=o.y/2,y.x*=o.x/2,y.y*=o.y/2,E.start.copy(b),E.start.z=0,E.end.copy(y),E.end.z=0;let d=E.closestPointToPointParameter(S,!0);E.at(d,A);let p=s.cj9.lerp(b.z,y.z,d),m=p>=-1&&p<=1,v=S.distanceTo(A)<.5*a;if(m&&v){E.start.fromBufferAttribute(u,t),E.end.fromBufferAttribute(c,t),E.start.applyMatrix4(l),E.end.applyMatrix4(l);let a=new s.Pq0,i=new s.Pq0;r.distanceSqToSegment(E.start,E.end,i,a),n.push({point:i,pointOnLine:a,distance:r.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class C extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let a=0;a<n;a+=t)r[2*a]=e[a],r[2*a+1]=e[a+1],r[2*a+2]=e[a+2],r[2*a+3]=e[a+3],r[2*a+4]=e[a+4],r[2*a+5]=e[a+5];else for(let a=0;a<n;a+=t)r[2*a]=e[a],r[2*a+1]=e[a+1],r[2*a+2]=e[a+2],r[2*a+3]=e[a+3],r[2*a+4]=e[a+4],r[2*a+5]=e[a+5],r[2*a+6]=e[a+6],r[2*a+7]=e[a+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class P extends _{constructor(e=new C,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let B=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:a,segments:d,dashed:u,...p},f){var h,v;let g=(0,l.C)(e=>e.size),x=o.useMemo(()=>d?new _:new P,[d]),[b]=o.useState(()=>new m),y=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,w=o.useMemo(()=>{let r=d?new c:new C,a=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(a.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);r.setColors(e.flat(),y)}return r},[e,d,n,y]);return o.useLayoutEffect(()=>{x.computeLineDistances()},[e,x]),o.useLayoutEffect(()=>{u?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[u,b]),o.useEffect(()=>()=>{w.dispose(),b.dispose()},[w]),o.createElement("primitive",(0,i.A)({object:x,ref:f},p),o.createElement("primitive",{object:w,attach:"geometry"}),o.createElement("primitive",(0,i.A)({object:b,attach:"material",color:t,vertexColors:!!n,resolution:[g.width,g.height],linewidth:null!=(v=null!=r?r:a)?v:1,dashed:u,transparent:4===y},p)))})},mevF(e,t,n){let r,a;var i=n("unhp"),o=n("zd8w"),s=n("CE87"),l=n("PVZC"),d=n("hPwS");let u=new l.Pq0,c=new l.Pq0,p=new l.Pq0,f=new l.I9Y;function m(e,t,n){let r=u.setFromMatrixPosition(e.matrixWorld);r.project(t);let a=n.width/2,i=n.height/2;return[r.x*a+a,-(r.y*i)+i]}let h=e=>1e-10>Math.abs(e)?0:e;function v(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let g=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>v(e,r)),x=(a=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>v(e,a(t),"translate(-50%,-50%)")),b=o.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:a,center:v,fullscreen:b,portal:y,distanceFactor:w,sprite:S=!1,transform:M=!1,occlude:E,onOcclude:A,castShadow:L,receiveShadow:j,material:k,geometry:z,zIndexRange:_=[0x1000037,0],calculatePosition:C=m,as:P="div",wrapperClass:B,pointerEvents:N="auto",...U},R)=>{let{gl:O,camera:D,scene:T,size:I,raycaster:W,events:F,viewport:H}=(0,d.C)(),[V]=o.useState(()=>document.createElement(P)),$=o.useRef(null),q=o.useRef(null),G=o.useRef(0),K=o.useRef([0,0]),Y=o.useRef(null),Z=o.useRef(null),Q=(null==y?void 0:y.current)||F.connected||O.domElement.parentNode,J=o.useRef(null),X=o.useRef(!1),ee=o.useMemo(()=>{var e;return E&&"blending"!==E||Array.isArray(E)&&E.length&&(e=E[0])&&"object"==typeof e&&"current"in e},[E]);o.useLayoutEffect(()=>{let e=O.domElement;E&&"blending"===E?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[E]),o.useLayoutEffect(()=>{if(q.current){let e=$.current=s.createRoot(V);if(T.updateMatrixWorld(),M)V.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=C(q.current,D,I);V.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(a?Q.prepend(V):Q.appendChild(V)),()=>{Q&&Q.removeChild(V),e.unmount()}}},[Q,M]),o.useLayoutEffect(()=>{B&&(V.className=B)},[B]);let et=o.useMemo(()=>M?{position:"absolute",top:0,left:0,width:I.width,height:I.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:v?"translate3d(-50%,-50%,0)":"none",...b&&{top:-I.height/2,left:-I.width/2,width:I.width,height:I.height},...n},[n,v,b,I,M]),en=o.useMemo(()=>({position:"absolute",pointerEvents:N}),[N]);o.useLayoutEffect(()=>{var t,a;X.current=!1,M?null==(t=$.current)||t.render(o.createElement("div",{ref:Y,style:et},o.createElement("div",{ref:Z,style:en},o.createElement("div",{ref:R,className:r,style:n,children:e})))):null==(a=$.current)||a.render(o.createElement("div",{ref:R,style:et,className:r,children:e}))});let er=o.useRef(!0);(0,d.D)(e=>{if(q.current){D.updateMatrixWorld(),q.current.updateWorldMatrix(!0,!1);let e=M?K.current:C(q.current,D,I);if(M||Math.abs(G.current-D.zoom)>t||Math.abs(K.current[0]-e[0])>t||Math.abs(K.current[1]-e[1])>t){var n;let t,r,a,i,o=(n=q.current,t=u.setFromMatrixPosition(n.matrixWorld),r=c.setFromMatrixPosition(D.matrixWorld),a=t.sub(r),i=D.getWorldDirection(p),a.angleTo(i)>Math.PI/2),s=!1;ee&&(Array.isArray(E)?s=E.map(e=>e.current):"blending"!==E&&(s=[T]));let d=er.current;s?er.current=function(e,t,n,r){let a=u.setFromMatrixPosition(e.matrixWorld),i=a.clone();i.project(t),f.set(i.x,i.y),n.setFromCamera(f,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return a.distanceTo(n.ray.origin)<e}return!0}(q.current,D,W,s)&&!o:er.current=!o,d!==er.current&&(A?A(!er.current):V.style.display=er.current?"block":"none");let m=Math.floor(_[0]/2),v=E?ee?[_[0],m]:[m-1,0]:_;if(V.style.zIndex=`${function(e,t,n){if(t instanceof l.ubm||t instanceof l.qUd){let r=u.setFromMatrixPosition(e.matrixWorld),a=c.setFromMatrixPosition(t.matrixWorld),i=r.distanceTo(a),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*i+s)}}(q.current,D,v)}`,M){let[e,t]=[I.width/2,I.height/2],n=D.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:a,left:i,bottom:o,right:s}=D,l=g(D.matrixWorldInverse),d=r?`scale(${n})translate(${h(-(s+i)/2)}px,${h((a+o)/2)}px)`:`translateZ(${n}px)`,u=q.current.matrixWorld;S&&((u=D.matrixWorldInverse.clone().transpose().copyPosition(u).scale(q.current.scale)).elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),V.style.width=I.width+"px",V.style.height=I.height+"px",V.style.perspective=r?"":`${n}px`,Y.current&&Z.current&&(Y.current.style.transform=`${d}${l}translate(${e}px,${t}px)`,Z.current.style.transform=x(u,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.qUd)return t.zoom;if(!(t instanceof l.ubm))return 1;{let n=u.setFromMatrixPosition(e.matrixWorld),r=c.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}(q.current,D)*w;V.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}K.current=e,G.current=D.zoom}}if(!ee&&J.current&&!X.current)if(M){if(Y.current){let e=Y.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=D;if(t||z)U.scale&&(Array.isArray(U.scale)?U.scale instanceof l.Pq0?J.current.scale.copy(U.scale.clone().divideScalar(1)):J.current.scale.set(1/U.scale[0],1/U.scale[1],1/U.scale[2]):J.current.scale.setScalar(1/U.scale));else{let t=(w||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;J.current.scale.set(n,r,1)}X.current=!0}}}else{let t=V.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,n=t.clientWidth*e,r=t.clientHeight*e;J.current.scale.set(n,r,1),X.current=!0}J.current.lookAt(e.camera.position)}});let ea=o.useMemo(()=>({vertexShader:M?void 0:`
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
      `}),[M]);return o.createElement("group",(0,i.A)({},U,{ref:q}),E&&!ee&&o.createElement("mesh",{castShadow:L,receiveShadow:j,ref:J},z||o.createElement("planeGeometry",null),k||o.createElement("shaderMaterial",{side:2,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader})))});n.d(t,{},{E:b})},Zva3(e,t,n){var r=n("ABep"),a=n("Ipng"),i=n("mevF"),o=n("Njew"),s=n("oeGO"),l=n("zd8w"),d=n("Qgfj"),u=n("Wf1j"),c=n("oyxz"),p=n("PVZC"),f=n("KwmQ"),m=n("iLdV"),h=n("sKwe"),v=n("LP6J"),g=n("SfwA"),x=n("b6Ou");let b=Math.PI/12,y=x.FF.max+.45,w=x.FF.max+.72,S=x.hN.max+.45,M=x.hN.max+.72,E=(0,d.YK)({cylinder:{id:"learningBlock.cylindricalCoordinates.cylinderOption",defaultMessage:"Cylinder"},sector:{id:"learningBlock.cylindricalCoordinates.sectorOption",defaultMessage:"Sector"},"cylindrical-shell":{id:"learningBlock.cylindricalCoordinates.shellOption",defaultMessage:"Shell"},shapeAriaLabel:{id:"learningBlock.cylindricalCoordinates.shapeAriaLabel",defaultMessage:"Cylindrical-coordinate shape preset"},radialLowerBound:{id:"learningBlock.cylindricalCoordinates.radialLowerBound",defaultMessage:"Radial lower bound r"},radialUpperBound:{id:"learningBlock.cylindricalCoordinates.radialUpperBound",defaultMessage:"Radial upper bound r"},angularLowerBound:{id:"learningBlock.cylindricalCoordinates.angularLowerBound",defaultMessage:"Azimuthal-angle lower bound theta"},angularUpperBound:{id:"learningBlock.cylindricalCoordinates.angularUpperBound",defaultMessage:"Azimuthal-angle upper bound theta"},heightLowerBound:{id:"learningBlock.cylindricalCoordinates.heightLowerBound",defaultMessage:"Height lower bound z"},heightUpperBound:{id:"learningBlock.cylindricalCoordinates.heightUpperBound",defaultMessage:"Height upper bound z"},angularValue:{id:"learningBlock.cylindricalCoordinates.angularValue",defaultMessage:"{multiple, plural, one {# pi radian} other {# pi radians}}"},cameraInstructions:{id:"learningBlock.cylindricalCoordinates.cameraInstructions",defaultMessage:"Use the arrow keys to rotate the three-dimensional region"}}),A=(e,t,n)=>{let r=document.createElement("span");r.style.color=`var(${t})`,r.style.position="absolute",r.style.visibility="hidden",e.appendChild(r);let a=window.getComputedStyle(r).color||n;return r.remove(),a},L=({boundary:e,color:t,opacity:n,oppositeBoundary:a})=>{let i=(0,l.useMemo)(()=>{let t,n;return t=[...e,...a].map(x.sE),(n=new p.LoY).setAttribute("position",new p.qtW(t.flat(),3)),n.setIndex(Array.from({length:Math.max(0,e.length-1)},(t,n)=>[n,n+1,e.length+n,n+1,e.length+n+1,e.length+n]).flat()),n.computeVertexNormals(),n},[e,a]);return(0,l.useLayoutEffect)(()=>()=>i.dispose(),[i]),(0,r.jsx)("mesh",{geometry:i,renderOrder:1,children:(0,r.jsx)("meshBasicMaterial",{color:t,depthWrite:!1,opacity:n,side:2,transparent:!0})})},j=({color:e,opacity:t=1,points:n,width:i=1.6})=>(0,r.jsx)(a.N,{color:e,depthWrite:!1,lineWidth:i,opacity:t,points:n.map(x.sE),transparent:t<1}),k=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.E,{center:!0,position:[w,0,0],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"x"})}),(0,r.jsx)(i.E,{center:!0,position:[0,0,w],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"y"})}),(0,r.jsx)(i.E,{center:!0,position:[0,M,0],children:(0,r.jsx)("span",{className:"text-token-text-secondary text-xs",children:"z"})})]}),z=({colors:e,isThumbnail:t,values:n})=>{let{rStart:a,r:i,thetaStart:o,theta:s,zStart:d,z:u}=n,c=(0,l.useMemo)(()=>(0,x.hb)(i,o,s,d),[i,o,s,d]),p=(0,l.useMemo)(()=>(0,x.hb)(i,o,s,u),[i,o,s,u]),f=(0,l.useMemo)(()=>(0,x.hb)(a,o,s,d),[a,o,s,d]),m=(0,l.useMemo)(()=>(0,x.hb)(a,o,s,u),[a,o,s,u]),h=(0,l.useMemo)(()=>(0,x.hb)(x.FF.max,0,2*Math.PI,0),[]),v=(0,x.t8)(i,o,d),g=(0,x.t8)(i,o,u),b=(0,x.t8)(i,s,d),w=(0,x.t8)(i,s,u),M=(0,x.t8)(a,o,d),E=(0,x.t8)(a,o,u),A=(0,x.t8)(a,s,d),z=(0,x.t8)(a,s,u),_=s-o>1e-6,C=u-d>1e-6,P=i-a>1e-6&&_&&C,B=s-o<x.hM.max-1e-6,N=a>1e-6;return(0,r.jsxs)("group",{children:[!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{color:e.secondary,opacity:.22,points:[[-y,0,0],[y,0,0]],width:1}),(0,r.jsx)(j,{color:e.secondary,opacity:.22,points:[[0,-y,0],[0,y,0]],width:1}),(0,r.jsx)(j,{color:e.secondary,opacity:.22,points:[[0,0,-.45],[0,0,S]],width:1}),(0,r.jsx)(j,{color:e.secondary,opacity:.14,points:h,width:1}),(0,r.jsx)(k,{})]}),P&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{boundary:c,color:e.primary,opacity:.23,oppositeBoundary:p}),(0,r.jsx)(L,{boundary:c,color:e.companion,opacity:.12,oppositeBoundary:f}),(0,r.jsx)(L,{boundary:p,color:e.accent,opacity:.16,oppositeBoundary:m})]}),P&&N&&(0,r.jsx)(L,{boundary:f,color:e.companion,opacity:.2,oppositeBoundary:m}),P&&B&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{boundary:[v,g],color:e.companion,opacity:.13,oppositeBoundary:[M,E]}),(0,r.jsx)(L,{boundary:[b,w],color:e.companion,opacity:.2,oppositeBoundary:[A,z]})]}),i>1e-6&&_&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{color:e.primary,points:c}),(0,r.jsx)(j,{color:e.accent,points:p,width:2})]}),N&&_&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{color:e.companion,opacity:.75,points:f}),(0,r.jsx)(j,{color:e.companion,points:m})]})]})};n.d(t,{},{CylindricalCoordinatesControls:({values:e,setValues:t})=>{let n=(0,u.A)(),a=(0,x.hg)(e),i=(0,v.Z7)(n),o=e=>n.formatMessage(E.angularValue,{multiple:e/Math.PI}),s=(0,m.xT)(x.KB.map((e,t)=>({label:n.formatMessage(E[e]),value:t}))),l="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",d=(e,n,r,a=1)=>t(t=>(0,x.hg)({...t,[e]:r[0]*a,[n]:r[1]*a}),l);return(0,r.jsx)(f.Ur,{screenReaderContent:(0,r.jsx)(c.A,{id:"learningBlock.cylindricalCoordinates.controlsDescription",defaultMessage:"Choose a cylinder, sector, or shell preset, then adjust the lower and upper radial, azimuthal-angle, and height bounds."}),children:(0,r.jsx)(h.J,{inputs:[{ariaLabel:n.formatMessage(E.shapeAriaLabel),min:0,max:x.KB.length-1,step:1,value:x.KB.indexOf(a.shape),options:s,onChange:e=>{let n=x.KB[e];n&&t((0,x.v7)(n),l)}},{...i,min:x.G$.min,max:x.FF.max,step:x.FF.step,value:a.r,variable:"r",ariaLabel:n.formatMessage(E.radialUpperBound),onChange:e=>d("rStart","r",[a.rStart,e]),range:{ariaLabels:[n.formatMessage(E.radialLowerBound),n.formatMessage(E.radialUpperBound)],ariaValueTexts:[(0,g.Sp)(n,a.rStart),(0,g.Sp)(n,a.r)],displayValues:[(0,g.Sp)(n,a.rStart),(0,g.Sp)(n,a.r)],onChange:e=>d("rStart","r",e),values:[a.rStart,a.r]}},{...i,min:x.Yf.min/Math.PI,max:x.hM.max/Math.PI,step:x.hM.sliderStep,value:a.theta/Math.PI,variable:"\\theta",ariaLabel:n.formatMessage(E.angularUpperBound),onChange:e=>d("thetaStart","theta",[a.thetaStart/Math.PI,e],Math.PI),range:{ariaLabels:[n.formatMessage(E.angularLowerBound),n.formatMessage(E.angularUpperBound)],ariaValueTexts:[o(a.thetaStart),o(a.theta)],displayValues:[(0,g.sS)(n,a.thetaStart),(0,g.sS)(n,a.theta)],onChange:e=>d("thetaStart","theta",e,Math.PI),values:[a.thetaStart/Math.PI,a.theta/Math.PI]}},{...i,min:x.QS.min,max:x.hN.max,step:x.hN.step,value:a.z,variable:"z",ariaLabel:n.formatMessage(E.heightUpperBound),onChange:e=>d("zStart","z",[a.zStart,e]),range:{ariaLabels:[n.formatMessage(E.heightLowerBound),n.formatMessage(E.heightUpperBound)],ariaValueTexts:[(0,g.Sp)(n,a.zStart),(0,g.Sp)(n,a.z)],displayValues:[(0,g.Sp)(n,a.zStart),(0,g.Sp)(n,a.z)],onChange:e=>d("zStart","z",e),values:[a.zStart,a.z]}}]})})},CylindricalCoordinatesVisualization:({values:e,presentationMode:t})=>{let n=(0,u.A)(),a=(0,l.useRef)(null),i=(0,l.useRef)(null),d=(e=>{let[t,n]=(0,l.useState)(null);return(0,l.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e=window.getComputedStyle(t).color,r={accent:A(t,"--learning-block-accent",e),companion:A(t,"--learning-block-color-companion",e),primary:A(t,"--learning-block-color-primary",e),secondary:A(t,"--text-secondary",e)};n(e=>e?.accent===r.accent&&e.companion===r.companion&&e.primary===r.primary&&e.secondary===r.secondary?e:r)};if(r(),"u"<typeof MutationObserver)return;let a=new MutationObserver(r),i={attributes:!0,attributeFilter:["class","style","data-theme","data-accent"]};return a.observe(document.documentElement,i),document.body&&a.observe(document.body,i),a.observe(t,i),()=>a.disconnect()},[e]),t})(a),c=(0,x.hg)(e),p="thumbnail"===t,f=n.formatMessage({id:"learningBlock.cylindricalCoordinates.regionDescription",defaultMessage:"{shape} in cylindrical coordinates with radius from {radialStart} to {radialEnd}, azimuthal angle from {angularStart} to {angularEnd}, and height from {heightStart} to {heightEnd}."},{shape:n.formatMessage(E[c.shape]),radialStart:(0,g.Sp)(n,c.rStart),radialEnd:(0,g.Sp)(n,c.r),angularStart:n.formatMessage(E.angularValue,{multiple:c.thetaStart/Math.PI}),angularEnd:n.formatMessage(E.angularValue,{multiple:c.theta/Math.PI}),heightStart:(0,g.Sp)(n,c.zStart),heightEnd:(0,g.Sp)(n,c.z)});return(0,r.jsx)("div",{ref:a,"aria-description":p?void 0:n.formatMessage(E.cameraInstructions),"aria-label":f,className:`text-token-text-primary focus-visible:outline-token-border-heavy relative w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${p?"h-full":"h-[252px]"}`,onKeyDown:p?void 0:e=>{let t=i.current;if(t){switch(e.key){case"ArrowLeft":t.setAzimuthalAngle(t.getAzimuthalAngle()+b);break;case"ArrowRight":t.setAzimuthalAngle(t.getAzimuthalAngle()-b);break;case"ArrowUp":t.setPolarAngle(t.getPolarAngle()-b);break;case"ArrowDown":t.setPolarAngle(t.getPolarAngle()+b);break;default:return}e.preventDefault()}},role:"img",tabIndex:p?void 0:0,children:d&&(0,r.jsxs)(s.Hl,{"data-learning-block-pan":p?void 0:"both","aria-hidden":!0,camera:{fov:p?43:45,position:[12,9,12]},dpr:[1,1.5],frameloop:"demand",gl:{alpha:!0,antialias:!0},style:{height:"100%",touchAction:p?"auto":"none",width:"100%"},children:[(0,r.jsx)(z,{colors:d,isThumbnail:p,values:c}),!p&&(0,r.jsx)(o.N,{ref:i,enableDamping:!1,enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI-.16,minPolarAngle:.16,target:[0,x.hN.max/2,0]})]})})}})},sKwe(e,t,n){var r=n("ABep"),a=n("on57"),i=n("zd8w"),o=n("iLdV");let s=e=>e?e.replace(/\\mid/g,"|").replace(/\\neg/g,"\xac").replace(/\\cap/g,"\u2229").replace(/\\cup/g,"\u222A").replace(/\\text\{([^}]*)\}/g,"$1").replace(/\\mathrm\{([^}]*)\}/g,"$1").replace(/\\[a-zA-Z]+/g,"").replace(/[{}_^]/g,"").replace(/\s+/g," ").trim().length:0,l=e=>{let t=e.formatValueForInput??o.hG,n=Math.max((0,o.m_)(e.min,e.step,t).length,(0,o.m_)(e.max,e.step,t).length),r=e.inlineUnit?e.unit?.length??0:0;return e.range?2*n+2:n+r};n.d(t,{},{J:({inputs:e})=>{let t=(0,i.useRef)(null),[n,d]=(0,i.useState)(),u=e.some(e=>e.before),c=e.filter(e=>!e.options&&!1!==e.showValueInput),p=Math.max(0,...e.map(e=>s(e.variable))),f=Math.max(0,...c.map(l)),m=Math.max(0,...c.map(e=>s(e.inlineUnit?void 0:e.unit))),h=e.map(e=>e.variable??"").join("\0");return(0,i.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let n=Array.from(e.querySelectorAll("[data-input-selector-variable]"));if(0===n.length)return;let r=()=>{let t=n.filter(e=>"stacked"!==e.dataset.inputSelectorLabelLayout),r=t.length?Math.max(...t.map(t=>{let n=t.cloneNode(!0);n.removeAttribute("data-input-selector-variable"),Object.assign(n.style,{inset:"0 auto auto 0",maxWidth:"none",position:"absolute",visibility:"hidden",whiteSpace:"nowrap",width:"max-content"}),e.appendChild(n);let r=n.getBoundingClientRect().width;return n.remove(),r})):void 0;d(e=>e===r?e:r)};if(r(),"u"<typeof ResizeObserver)return;let a=new ResizeObserver(r);n.forEach(e=>a.observe(e));let i=new MutationObserver(r);return n.forEach(e=>i.observe(e,{attributeFilter:["data-input-selector-label-layout"]})),()=>{a.disconnect(),i.disconnect()}},[h]),(0,r.jsx)("div",{ref:t,"data-input-selector-group":!0,className:"grid min-h-fit min-w-0 shrink grow-0 gap-y-3",children:e.map((e,t)=>(0,r.jsxs)("div",{className:(0,a.A)("grid h-full min-w-0 items-center gap-x-2",u?"grid-cols-[auto_minmax(0,1fr)]":"grid-cols-[minmax(0,1fr)]"),children:[u?e.before??(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)(o.KV,{...e,groupVariableWidthCh:p,groupVariableWidthPx:n,groupUnitWidthCh:m,groupValueWidthCh:f})]},t))})},b:(e,t,n,r,{before:a,disabled:i,displayValue:o,editType:s="CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",formatValueForInput:l,inlineUnit:d,parseInputValue:u,mapValue:c,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,ariaLabel:v,ariaValueText:g,onActiveChange:x,value:b,variable:y,variableBold:w,variableFormat:S,unit:M}={})=>{var E;return{before:a,disabled:i,displayValue:o,options:p,optionLabelFormat:f,showValueInput:m,sliderStyle:h,inlineUnit:d,ariaLabel:v,ariaValueText:g,variable:y??t.variable??(E=String(e),E.match(/[A-Za-z]/)?.[0]??E),variableBold:w??t.variableBold,variableFormat:S??t.variableFormat,unit:M??t.unit,formatValueForInput:l,parseInputValue:u,max:t.max,min:t.min,step:t.step,value:b??Number(n[e]),onActiveChange:x,onChange:(t,n)=>{let a=c?c(t):t;r(t=>({...t,[e]:a}),"function"==typeof s?s(n):s)}}}})},iLdV(e,t,n){var r=n("ABep"),a=n("YAOF"),i=n("on57"),o=n("zd8w"),s=n("Wf1j"),l=n("l7Go"),d=n("jYuH"),u=n("Bdtm");let c=(e,t,n)=>Math.min(Math.max(e,t),n),p=/[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?/i,f=(e,t,n,r)=>{if(!Number.isFinite(e))return t;let a=Math.round((c(e,t,n)-t)/r),i=(0,d.Dp)(r);return c((0,d.eB)(t+a*r,Math.max(1,i)),t,n)},m=(e,t)=>Number.isFinite(e)?e.toFixed(Math.max(1,(0,d.Dp)(t))):"",h=(e,t,n)=>{let r=n(e,t);return r.match(p)?.[0]??r},v=96,g=e=>{let t=[],n=e.parentElement;for(;n;)"visible"!==window.getComputedStyle(n).overflowY&&t.push(n),n=n.parentElement;return t},x=(0,o.createContext)({isNativeSlider:!1}),b=()=>(0,r.jsx)("svg",{"aria-hidden":!0,className:"h-4 w-4 flex-none",fill:"none",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"m5 6 3-3 3 3M5 10l3 3 3-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});n.d(t,{},{KV:({min:e,max:t,step:n,value:d,displayValue:c,onChange:y,onActiveChange:w,disabled:S,options:M,optionLabelFormat:E="text",sliderStyle:A="continuous",ariaLabel:L,ariaValueText:j,variable:k,variableBold:z,variableFormat:_,inlineUnit:C,unit:P,formatValueForInput:B=m,parseInputValue:N,normalizeCommittedValue:U,minSliderWidthPx:R,showValueInput:O=!0,range:D,valueClassName:T,groupVariableWidthCh:I,groupVariableWidthPx:W,groupUnitWidthCh:F,groupValueWidthCh:H})=>{let V,{isNativeSlider:$,onSliderInteractionEnd:q,onSliderInteractionStart:G}=(0,o.useContext)(x),K=(0,s.A)(),Y=N??Number.parseFloat,Z=f(d,e,t,n),Q=Number.isFinite(c)?c:Z,[J,X]=(0,o.useState)(()=>h(Q,n,B)),[ee,et]=(0,o.useState)(!1),en=(0,o.useRef)(!1),er=(0,o.useRef)(!1),ea=(0,o.useRef)(!1),ei=(0,o.useRef)(null),eo=(0,o.useRef)(null),es=(0,o.useRef)(null),el=(0,o.useRef)(null),ed=(0,o.useRef)(null),eu=(0,o.useRef)(null),ec=(0,o.useRef)(null),ep=(0,o.useRef)(null),ef=(0,o.useRef)(!1),[em,eh]=(0,o.useState)(!1),[ev,eg]=(0,o.useState)(!1),[ex,eb]=(0,o.useState)(!1),[ey,ew]=(0,o.useState)($?"above":"below"),eS=(e="blur")=>{"blur"===e&&ea.current||er.current&&(er.current=!1,w?.(!1),q?.())},eM=()=>{er.current||(er.current=!0,w?.(!0),G?.(k))},eE=()=>{ea.current=!0,eM()};(0,o.useEffect)(()=>{let e=()=>{ea.current=!1,eS("pointer-end")};return window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),()=>{window.removeEventListener("pointerup",e),window.removeEventListener("pointercancel",e)}},[w,q]),(0,o.useLayoutEffect)(()=>{let e=ed.current,t=eu.current;if(!M||!e||!t)return void eh(!1);let n=()=>{let n=e.clientWidth,r=t.scrollWidth>n+1;eh(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let a=new ResizeObserver(n);return a.observe(e),a.observe(t),()=>{r?.removeEventListener("loadingdone",n),a.disconnect()}},[M,E]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&ef.current&&(ef.current=!1,e.preventDefault(),e.stopPropagation())};return document.addEventListener("keyup",e,!0),()=>document.removeEventListener("keyup",e,!0)},[]),(0,o.useEffect)(()=>{if(!ex)return;ef.current=!1;let e=e=>{let t=e.target;!(t instanceof Node)||ec.current?.contains(t)||ep.current?.contains(t)||eb(!1)},t=e=>{"Escape"===e.key&&(ef.current=!0,e.preventDefault(),e.stopPropagation(),eb(!1),ep.current?.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t,!0)}},[ex]),(0,o.useEffect)(()=>{(!em||S)&&eb(!1)},[S,em]),(0,o.useLayoutEffect)(()=>{if(!ex)return void ew($?"above":"below");let e=ec.current,t=ep.current;if(!e||!t)return;let n=()=>{ew((({boundary:e,menuHeight:t,trigger:n})=>{let r=e.bottom-n.bottom-4;if(t<=r)return"below";let a=n.top-e.top-4;return t<=a||a>r?"above":"below"})({boundary:(({clippingAncestors:e,viewport:t})=>e.reduce((e,t)=>({bottom:Math.min(e.bottom,t.bottom),top:Math.max(e.top,t.top)}),t))({clippingAncestors:g(t).map(e=>e.getBoundingClientRect()),viewport:{bottom:window.innerHeight,top:0}}),menuHeight:e.getBoundingClientRect().height,trigger:t.getBoundingClientRect()}))};if(n(),window.addEventListener("resize",n),"u"<typeof ResizeObserver)return()=>window.removeEventListener("resize",n);let r=new ResizeObserver(n);return r.observe(e),r.observe(t),g(t).forEach(e=>r.observe(e)),()=>{window.removeEventListener("resize",n),r.disconnect()}},[ex,$]);let eA=ee?J:h(Q,n,B),eL=Math.max(h(e,n,B).length,h(t,n,B).length),ej=D?(V=D.displayValues??D.ariaValueTexts??[h(D.values[0],n,B),h(D.values[1],n,B)],`(${V[0]}, ${V[1]})`):void 0,ek=D?2*eL+2:eL,ez=H??ek,e_=R??v,eC=z??!1,eP=k?k.replace(/[^\w-]+/g,"_"):"input-selector-value",eB=L??(k?K.formatMessage({id:"learningBlock.inputSelector.valueAriaLabel",defaultMessage:"{label} value"},{label:k}):void 0),eN=!!k&&"text"!==_&&(!!("katex"===_||/\\/.test(k))||/^[A-Za-z\u03b8\u03bc\u03c3\u03bb\u03c0\u0394](?:[_^][A-Za-z0-9{}]+)?$/.test(k)),eU=M?.find(r=>f(r.value,e,t,n)===Z)??M?.[0],eR=em?K.formatMessage({id:"learningBlock.inputSelector.overflowMenuAriaLabel",defaultMessage:"{value}. Show all {label} options"},{label:eB??K.formatMessage({id:"learningBlock.inputSelector.selectorAriaLabel",defaultMessage:"selector"}),value:eU?.ariaLabel??eU?.label??""}):void 0,eO=(0,o.useId)(),eD=(e,t)=>"katex"!==t?e:(0,r.jsx)(l.r,{className:"katex",latex:e}),eT=r=>f(r.value,e,t,n),eI=M?.find(e=>eT(e)===Z)??M?.[0],eW=r=>{let a=Y(r);if(!Number.isFinite(a))return void X(h(Q,n,B));let i=((e,{max:t,min:n,normalizeCommittedValue:r,step:a})=>r?r(e):f(e,n,t,a))(a,{min:e,max:t,step:n,normalizeCommittedValue:U});y(i,"input"),X(h(i,n,B))},eF=k?(0,r.jsx)("div",{"data-input-selector-variable":!0,"data-input-selector-label-layout":ev?"stacked":"inline",className:(0,i.A)("text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]",eC&&"font-medium"),children:eN?(0,r.jsx)(l.r,{className:"katex",latex:k??""}):k}):null,eH=!!(C&&P&&!D),eV=P&&!eH?(0,r.jsx)("div",{ref:el,className:"text-token-text-secondary shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit",children:P}):null,e$=!!H,eq=`minmax(max(${ez}ch,2rem), max(${ez}ch,2rem))`,eG=!!F,eK=`minmax(${F??0}ch, ${F??0}ch)`,eY=!M&&eG?eV??(0,r.jsx)("div",{ref:el,"aria-hidden":!0}):null,eZ=W?`${W}px`:I?`${I}ch`:null,eQ=eZ?`minmax(0, min(${eZ}, 40%))`:"fit-content(40%)";(0,o.useLayoutEffect)(()=>{let e=ei.current,t=eo.current;if(M||!e||!t)return void eg(!1);let n=()=>{let n=e.clientWidth;if(0===n)return;let r=(({availableWidth:e,labelWidth:t,minSliderWidthPx:n=v,unitWidth:r,valueWidth:a})=>{let i=2+Number(a>0)+Number(r>0);return t+a+r+(i-1)*12+n>e+1})({availableWidth:n,labelWidth:Math.max(t.scrollWidth,W??0),minSliderWidthPx:e_,unitWidth:el.current?.clientWidth??0,valueWidth:es.current?.clientWidth??0});eg(e=>e===r?e:r)};n();let r="u"<typeof document?void 0:document.fonts;if(r?.addEventListener("loadingdone",n),"u"<typeof ResizeObserver)return()=>r?.removeEventListener("loadingdone",n);let a=new ResizeObserver(n);return a.observe(e),a.observe(t),es.current&&a.observe(es.current),el.current&&a.observe(el.current),()=>{r?.removeEventListener("loadingdone",n),a.disconnect()}},[F,H,W,M,e_,k,O,P]);let eJ=e=>ec.current?.querySelectorAll("[data-input-selector-discrete-menu-option]").item(e).focus();(0,o.useEffect)(()=>{ex&&M&&eJ(Math.max(M.findIndex(e=>eT(e)===Z),0))},[ex,M,Z]);let eX=M?(0,r.jsx)("div",{role:"radiogroup","aria-label":eB,className:(0,i.A)("flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6",S&&"opacity-40"),children:M.map(e=>{let t=eT(e),n=t===Z;return(0,r.jsx)("button",{type:"button",role:"radio","aria-checked":n,"aria-label":e.ariaLabel,disabled:S,className:(0,i.A)("text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",n&&"bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black",!n&&!S&&"hover:text-token-text-primary focus-visible:text-token-text-primary",!S&&"focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),onClick:()=>y(t,"input"),children:(0,r.jsx)("span",{className:"min-w-6",children:eD(e.label,E)})},e.value)})}):null,e0=M?(0,r.jsxs)("div",{"data-input-selector-discrete-rail":!0,className:(0,i.A)("relative h-6 w-full min-w-0",em&&"flex justify-end"),children:[em&&eI?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{type:"button","aria-controls":eO,"aria-expanded":ex,"aria-haspopup":"listbox","aria-label":eR,disabled:S,"data-input-selector-discrete-menu-trigger":!0,ref:ep,className:(0,i.A)("text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]",!S&&"hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10"),onClick:()=>eb(e=>!e),children:[(0,r.jsx)("span",{className:"min-w-0 truncate",children:eD(eI.label,E)}),(0,r.jsx)(b,{})]}),ex?(0,r.jsx)("div",{ref:ec,"aria-label":eB,className:(0,i.A)("border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg","above"===ey?"bottom-full mb-1":"top-full mt-1"),id:eO,role:"listbox",children:M.map((e,t)=>{let n=eT(e),a=n===Z;return(0,r.jsx)("button",{type:"button","aria-selected":a,"data-input-selector-discrete-menu-option":!0,role:"option",className:(0,i.A)("flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]",a&&"bg-black/7 font-medium dark:bg-white/10",!a&&"hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10"),onClick:()=>{y(n,"input"),eb(!1),ep.current?.focus()},onKeyDown:e=>((e,t)=>{if(M)switch(e.key){case"ArrowDown":e.preventDefault(),eJ((t+1)%M.length);break;case"ArrowUp":e.preventDefault(),eJ((t-1+M.length)%M.length);break;case"Home":e.preventDefault(),eJ(0);break;case"End":e.preventDefault(),eJ(M.length-1)}})(e,t),children:eD(e.label,E)},e.value)})}):null]}):eX,(0,r.jsx)("div",{ref:eu,"aria-hidden":!0,"data-input-selector-overflow-measure":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0",children:(0,r.jsx)("div",{className:"flex h-6 w-max min-w-max gap-0.5 p-0.5",children:M.map(e=>(0,r.jsx)("span",{className:"flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]",children:(0,r.jsx)("span",{className:"min-w-6",children:eD(e.label,E)})},e.value))})})]}):null,e1=k&&!M&&O&&(0,r.jsxs)("div",{ref:es,className:(0,i.A)("text-token-text-primary grid h-5 min-w-8 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]",eH?"grid-cols-[minmax(0,1fr)_auto] gap-x-0.5":"grid-cols-1",D&&(ev?"text-end":"text-start"),T,!S&&!D&&"transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7"),"data-value":"0".repeat(ez),children:[D?(0,r.jsx)("span",{"data-input-selector-range-value":!0,className:(0,i.A)("relative flex h-full items-center tabular-nums [grid-area:1/1]",ev?"justify-end":"justify-start"),children:ej}):(0,r.jsx)("input",{"aria-label":eB,className:"relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none",disabled:S,inputMode:"decimal",name:eP,size:1,type:"text",value:eA,onBlur:()=>{if(en.current){en.current=!1;return}et(!1),eW(J)},onChange:e=>{var t;let n;return X(N?e.currentTarget.value:""===(n=(t=e.currentTarget.value).trim())||"-"===n||"."===n?t:n.match(p)?.[0]??t)},onFocus:()=>{et(!0),X(h(Q,n,B))},onKeyDown:e=>{if("Enter"===e.key){e.preventDefault(),en.current=!0,et(!1),eW(J),e.currentTarget.blur();return}"Escape"===e.key&&(e.preventDefault(),en.current=!0,et(!1),X(h(Z,n,B)),e.currentTarget.blur())}}),eH?(0,r.jsx)("span",{"aria-hidden":!0,className:"text-token-text-secondary self-center text-xs leading-4",children:P}):null]}),e2=[];ev?(k&&e2.push("minmax(0, 1fr)"),e1&&e2.push(eq),eY&&e2.push(eK)):(k&&e2.push(eQ),e1&&e2.push(eq),eY&&e2.push(eK),e2.push("minmax(0, 1fr)"));let e3=[],e4=e$&&!!k,e5=eG&&!!k;k&&e3.push(eQ),e4&&e3.push(eq),e5&&e3.push(eK),e3.push("minmax(0, 1fr)");let e6=`${e3.length} / ${e3.length+1}`,e7=k?"2 / -1":"1 / -1",e8=Number.isFinite(e)&&Number.isFinite(t)&&Number.isFinite(n)&&n>0&&t>=e?Math.max(0,Math.round((t-e)/n)):0,e9=Math.min(e8+1,12),te="stepped"===A&&e8>0?Array.from({length:e9},(e,t)=>t):[],tt="stepped"===A?"h-6 w-6":"h-5 w-5",tn="relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]",tr=te.length>0?(0,r.jsx)("div",{"aria-hidden":!0,"data-input-selector-rendered-marker-count":te.length,className:"pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between",children:te.map(e=>(0,r.jsx)("span",{"data-input-selector-step-marker":!0,className:"h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20"},e))}):null,ta=$&&!D?(0,r.jsxs)("div",{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,className:(0,i.A)(tn,S&&"opacity-40"),children:[tr,(0,r.jsx)("input",{"aria-label":eB,"aria-valuetext":j,type:"range","data-learning-block-pan":S?void 0:"horizontal",className:(0,i.A)(u.A.inputSelector,"stepped"===A&&u.A.inputSelectorStepped,"text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center"),disabled:S,max:t,min:e,step:n,value:Z,onBlur:()=>eS("blur"),onChange:r=>{eM(),y(f(r.currentTarget.valueAsNumber,e,t,n),"slider")},onPointerDown:eE})]}):(0,r.jsxs)(a.bL,{"data-input-selector-slider":!0,"data-input-selector-slider-style":A,"data-learning-block-pan":S?void 0:"horizontal",className:(0,i.A)(tn,"touch-pan-y",S&&"opacity-40"),disabled:S,max:t,min:e,onBlurCapture:()=>eS("blur"),onPointerDownCapture:eE,step:n,value:D?D.values.map(r=>f(r,e,t,n)):[Z],onValueChange:r=>{(eM(),D)?D.onChange([f(r[0],e,t,n),f(r[1],e,t,n)]):y(f(r[0],e,t,n),"slider")},children:[(0,r.jsx)(a.CC,{className:"absolute inset-0 rounded-full",children:(0,r.jsx)(a.Q6,{className:"absolute inset-y-0 rounded-full bg-transparent"})}),tr,(0,r.jsx)(a.zi,{"aria-label":D?.ariaLabels[0]??eB,"aria-valuetext":D?.ariaValueTexts?.[0]??j,className:(0,i.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt,D?"flex items-center justify-center text-black":"block"),children:D?.thumbLabels?.[0]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:D.thumbLabels[0]})}),D&&(0,r.jsx)(a.zi,{"aria-label":D.ariaLabels[1],"aria-valuetext":D.ariaValueTexts?.[1],className:(0,i.A)("border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative flex cursor-pointer items-center justify-center rounded-full border text-black shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white",tt),children:D.thumbLabels?.[1]&&(0,r.jsx)("span",{"aria-hidden":!0,className:"text-[10px] leading-none font-medium",children:D.thumbLabels[1]})})]});return M?(0,r.jsxs)("div",{className:"grid h-full min-w-0 items-center gap-x-3",style:{gridTemplateColumns:e3.join(" ")},children:[eF,!em&&e4?(0,r.jsx)("div",{"aria-hidden":!0}):null,!em&&e5?(0,r.jsx)("div",{"aria-hidden":!0}):null,(0,r.jsx)("div",{className:"h-full min-w-0",style:{gridColumn:em?e7:e6,gridRow:1},children:e0}),(0,r.jsx)("div",{ref:ed,"aria-hidden":!0,"data-input-selector-discrete-width-measure":!0,className:"pointer-events-none h-0 min-w-0 opacity-0",style:{gridColumn:e6,gridRow:1}})]}):(0,r.jsxs)("div",{ref:ei,className:(0,i.A)("relative grid min-w-0 items-center gap-x-3",D&&"text-[11px]",ev&&"gap-y-2"),style:{gridTemplateColumns:e2.join(" ")},children:[eF,e1,eY,(0,r.jsx)("div",{className:"min-w-0",style:ev?{gridColumn:"1 / -1"}:void 0,children:ta}),k?(0,r.jsx)("div",{ref:eo,"aria-hidden":!0,"data-input-selector-label-measure":!0,className:(0,i.A)("pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]",eC&&"font-medium"),children:eN?(0,r.jsx)(l.r,{className:"katex",latex:k??""}):k}):null]})},hG:m,m_:h,xT:e=>e})}};
//# sourceMappingURL=249107.4436b13ddd.js.map