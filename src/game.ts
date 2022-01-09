import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script2 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script3 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script4 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script5 from "../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script6 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script7 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script8 from "../3b6be649-7ad5-4b34-b96f-9a083ae6dbef/src/item"
import Script9 from "../b853061a-bf5a-4d76-b7f1-92ed9ea4a8bf/src/item"
import Script10 from "../cca81b2b-24d6-4ef3-aa46-dad27a03d55b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const exodusBase = new Entity('exodusBase')
engine.addEntity(exodusBase)
exodusBase.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(29.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
exodusBase.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("2606c0cc18bb6184dd9cee0ed7eba7a3fa549bf08299ef20d83715be507149f3/HTC_Base/HTC_Base.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
exodusBase.addComponentOrReplace(gltfShape)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape2 = new GLTFShape("bfc932843fa883cacaa9d8ffd5fc94069b36c6facc8756ee4768097f7545c2c4/CityTile.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform4)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform5)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform6)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform7)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform8)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform9)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform10)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform11)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform12)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform13)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform14)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform15)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform16)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform17)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform18)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform19)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform20)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform21)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform22)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform23)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform24)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform25)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform26)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform27)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform28)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform29)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform30)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform31)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
  position: new Vector3(72, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity30.addComponentOrReplace(transform32)

const exodusBase2 = new Entity('exodusBase2')
engine.addEntity(exodusBase2)
exodusBase2.setParent(_scene)
exodusBase2.addComponentOrReplace(gltfShape)
const transform33 = new Transform({
  position: new Vector3(57.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
exodusBase2.addComponentOrReplace(transform33)

const capsuleApexLegend = new Entity('capsuleApexLegend')
engine.addEntity(capsuleApexLegend)
capsuleApexLegend.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(6.5, 0, 7),
  rotation: new Quaternion(-1.1175870895385742e-8, -0.9194308519363403, -0.09801700711250305, 0.3808407485485077),
  scale: new Vector3(1.0000003576278687, 0.9999998807907104, 1.000000238418579)
})
capsuleApexLegend.addComponentOrReplace(transform34)
const gltfShape3 = new GLTFShape("04a24ea8cab2ceef4f56c16f327442380307a603efdea4edd3a375d82ff50e6d/scene.gltf")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
capsuleApexLegend.addComponentOrReplace(gltfShape3)

const reutersvStairs = new Entity('reutersvStairs')
engine.addEntity(reutersvStairs)
reutersvStairs.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(60.5, 5.5, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 6.375, 4.5)
})
reutersvStairs.addComponentOrReplace(transform35)
const gltfShape4 = new GLTFShape("1c0265314ec9b1f46b2b8dfe762a452d4f8907a41fbf371559381917d8318aff/scene.gltf")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
reutersvStairs.addComponentOrReplace(gltfShape4)

const capsuleApexLegend2 = new Entity('capsuleApexLegend2')
engine.addEntity(capsuleApexLegend2)
capsuleApexLegend2.setParent(_scene)
capsuleApexLegend2.addComponentOrReplace(gltfShape3)
const transform36 = new Transform({
  position: new Vector3(20.5, 0, 3.5),
  rotation: new Quaternion(0.19509033858776093, -1.598562082672731e-15, -2.3256585990338863e-8, -0.9807853102684021),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
capsuleApexLegend2.addComponentOrReplace(transform36)

const capsuleApexLegend4 = new Entity('capsuleApexLegend4')
engine.addEntity(capsuleApexLegend4)
capsuleApexLegend4.setParent(_scene)
capsuleApexLegend4.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(51, 0, 5),
  rotation: new Quaternion(1.337820777552387e-16, 0.9238795638084412, -1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
capsuleApexLegend4.addComponentOrReplace(transform37)

const capsuleApexLegend5 = new Entity('capsuleApexLegend5')
engine.addEntity(capsuleApexLegend5)
capsuleApexLegend5.setParent(_scene)
capsuleApexLegend5.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(23.5, 0, 18),
  rotation: new Quaternion(0.10663656145334244, 0.10663656145334244, 0.08751433342695236, -0.9846819639205933),
  scale: new Vector3(0.9999999403953552, 0.9999998807907104, 0.9999998807907104)
})
capsuleApexLegend5.addComponentOrReplace(transform38)

const mysticalMushroomTree = new Entity('mysticalMushroomTree')
engine.addEntity(mysticalMushroomTree)
mysticalMushroomTree.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(3.5, 0, 92),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mysticalMushroomTree.addComponentOrReplace(transform39)
const gltfShape5 = new GLTFShape("6432ea734a89af5ed0343f831ac5393029cbb9663d219b8a152e37dcca2147b2/Tree_03/Tree_03.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
mysticalMushroomTree.addComponentOrReplace(gltfShape5)

const pinkAcaciaTree = new Entity('pinkAcaciaTree')
engine.addEntity(pinkAcaciaTree)
pinkAcaciaTree.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(29.5, 0.5, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pinkAcaciaTree.addComponentOrReplace(transform40)
const gltfShape6 = new GLTFShape("23ce3b4d89b39b3abefc38b42303d31e980aeaf97e2f1def699b3f85b8b9f37e/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
pinkAcaciaTree.addComponentOrReplace(gltfShape6)

const pinkPurpleMysticalMushroomTree = new Entity('pinkPurpleMysticalMushroomTree')
engine.addEntity(pinkPurpleMysticalMushroomTree)
pinkPurpleMysticalMushroomTree.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(70, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.687499761581421, 1, 1.9999998807907104)
})
pinkPurpleMysticalMushroomTree.addComponentOrReplace(transform41)
const gltfShape7 = new GLTFShape("0322344b346a5c26e565b5e62fa999d84e92588b706687421338dc5ef9183961/Tree_01/Tree_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
pinkPurpleMysticalMushroomTree.addComponentOrReplace(gltfShape7)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(57, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleWeepingWillowTree.addComponentOrReplace(transform42)
const gltfShape8 = new GLTFShape("68b95d6d88db1df24e124a99dddf7c8b16dadee8c29fd759feea0df41738c7ec/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape8)

const redLeafShrub = new Entity('redLeafShrub')
engine.addEntity(redLeafShrub)
redLeafShrub.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(31.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redLeafShrub.addComponentOrReplace(transform43)
const gltfShape9 = new GLTFShape("56eb562fba573ea1b31ac8b712768d9b14ddbff1c3863e0dda104cf7a14b85bb/Vegetation_08/Vegetation_08.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
redLeafShrub.addComponentOrReplace(gltfShape9)

const mysteriousMushroom = new Entity('mysteriousMushroom')
engine.addEntity(mysteriousMushroom)
mysteriousMushroom.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(30.5, 0.5, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mysteriousMushroom.addComponentOrReplace(transform44)
const gltfShape10 = new GLTFShape("6894bc3f5c85efacc5764d43f9f185d95e1d1f2a0047ed2f4772b8902d0f0ed0/Mushrooms_05/Mushrooms_05.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
mysteriousMushroom.addComponentOrReplace(gltfShape10)

const shortHallway = new Entity('shortHallway')
engine.addEntity(shortHallway)
shortHallway.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(50, 0, 41.5),
  rotation: new Quaternion(-6.199102739313611e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004291534424, 1.5, 1.000002145767212)
})
shortHallway.addComponentOrReplace(transform45)
const gltfShape11 = new GLTFShape("b048d77defb28bc176f1be540c6bf7e917471abbd57ca44a213ab6b976e06634/Hallway_Module_Straight_02/Hallway_Module_Straight_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
shortHallway.addComponentOrReplace(gltfShape11)

const emergencyPanel = new Entity('emergencyPanel')
engine.addEntity(emergencyPanel)
emergencyPanel.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(26.5, 44, 69.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.999999046325684, 2, 5.999999523162842)
})
emergencyPanel.addComponentOrReplace(transform46)
const gltfShape12 = new GLTFShape("c57cd5fbf21b4c2705f210ba1c9828c8a1504516cfabd7b89212e60f31ee840b/PanelSciFi_01/PanelSciFi_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
emergencyPanel.addComponentOrReplace(gltfShape12)

const enclosedHallJunction2 = new Entity('enclosedHallJunction2')
engine.addEntity(enclosedHallJunction2)
enclosedHallJunction2.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(50.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction2.addComponentOrReplace(transform47)
const gltfShape13 = new GLTFShape("2cc380ef2c10770ba8c846d39755e36facc2d624e9fc7906fdbbd441898b3417/Hallway_Big_Module_01/Hallway_Big_Module_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
enclosedHallJunction2.addComponentOrReplace(gltfShape13)

const cactusWand = new Entity('cactusWand')
engine.addEntity(cactusWand)
cactusWand.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(4, 0, 91.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cactusWand.addComponentOrReplace(transform48)
const gltfShape14 = new GLTFShape("2b0e7168fd92ec109611ef140a40aa5f4e48e809df209ba2be46b6f82a717e8a/PlantSF_07/PlantSF_07.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
cactusWand.addComponentOrReplace(gltfShape14)

const dirtPatch = new Entity('dirtPatch')
engine.addEntity(dirtPatch)
dirtPatch.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(13.5, 0, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 1, 3.375)
})
dirtPatch.addComponentOrReplace(transform49)
const gltfShape15 = new GLTFShape("0f18e59aa469148223db01fac5da39b9a7cfc645276b9ff51b869ac26cd5e0cd/Dirt_04/Dirt_04.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
dirtPatch.addComponentOrReplace(gltfShape15)

const electricBluePalm = new Entity('electricBluePalm')
engine.addEntity(electricBluePalm)
electricBluePalm.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(13, 0.5, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm.addComponentOrReplace(transform50)
const gltfShape16 = new GLTFShape("394b614ef52bff94922b03a9f4499905fcfca4e19d8f729a43bc7ee4cf620e84/PlantSF_08/PlantSF_08.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
electricBluePalm.addComponentOrReplace(gltfShape16)

const fernRose = new Entity('fernRose')
engine.addEntity(fernRose)
fernRose.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(3.5, 0, 93.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fernRose.addComponentOrReplace(transform51)
const gltfShape17 = new GLTFShape("fec9da6b4c5147bc05ced4e21523e42e3cc4c3147ae054a29651e9c1a7140ede/PlantSF_05/PlantSF_05.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
fernRose.addComponentOrReplace(gltfShape17)

const greenStar = new Entity('greenStar')
engine.addEntity(greenStar)
greenStar.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(22.5, 0, 74),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenStar.addComponentOrReplace(transform52)
const gltfShape18 = new GLTFShape("fa11fb3c77d234c34ed7e3959af520c6ec63bec14f9157064ae172bd3bbc77ec/Star_01/Star_01.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
greenStar.addComponentOrReplace(gltfShape18)

const streetBarrier = new Entity('streetBarrier')
engine.addEntity(streetBarrier)
streetBarrier.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(39, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(19.25, 6.75, 1)
})
streetBarrier.addComponentOrReplace(transform53)
const gltfShape19 = new GLTFShape("752163d8dabab04514aad08d754efa113b26fcaed3536b949159137730b453f7/StreetFence_01/StreetFence_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
streetBarrier.addComponentOrReplace(gltfShape19)

const exodusBase3 = new Entity('exodusBase3')
engine.addEntity(exodusBase3)
exodusBase3.setParent(_scene)
exodusBase3.addComponentOrReplace(gltfShape)
const transform54 = new Transform({
  position: new Vector3(70, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
exodusBase3.addComponentOrReplace(transform54)

const longCurvedVent = new Entity('longCurvedVent')
engine.addEntity(longCurvedVent)
longCurvedVent.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(15, 0, 50.5),
  rotation: new Quaternion(-0.7071068286895752, 0.7071068286895752, -1.4982144591613178e-7, 0),
  scale: new Vector3(1.8750114440917969, 2.2500154972076416, 1.8750250339508057)
})
longCurvedVent.addComponentOrReplace(transform55)
const gltfShape20 = new GLTFShape("21f70b856207c5743cac09bdcdbdb78114cd2fa896355dee6a34f3a6834981c2/AirVent_Curve_01/AirVent_Curve_01.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
longCurvedVent.addComponentOrReplace(gltfShape20)

const yellowBuds = new Entity('yellowBuds')
engine.addEntity(yellowBuds)
yellowBuds.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(2.5, 0, 91.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
yellowBuds.addComponentOrReplace(transform56)
const gltfShape21 = new GLTFShape("437ac0a71b875be051aefc67f41b69f3a62339afd36fa7d763fd8a0ee8cce1b4/PlantSF_02/PlantSF_02.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
yellowBuds.addComponentOrReplace(gltfShape21)

const shortHallway3 = new Entity('shortHallway3')
engine.addEntity(shortHallway3)
shortHallway3.setParent(_scene)
shortHallway3.addComponentOrReplace(gltfShape11)
const transform57 = new Transform({
  position: new Vector3(62, 0, 41.5),
  rotation: new Quaternion(-6.199102739313611e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000057220458984, 1.5, 1.0000028610229492)
})
shortHallway3.addComponentOrReplace(transform57)

const curvedHallJunction = new Entity('curvedHallJunction')
engine.addEntity(curvedHallJunction)
curvedHallJunction.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(66, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.9999998807907104)
})
curvedHallJunction.addComponentOrReplace(transform58)
const gltfShape22 = new GLTFShape("b8a822a2f8daa3614c07d89fb5a728cb903d30f604e195126b4d05f7bab6eee5/Hallway_Module_Curve_01/Hallway_Module_Curve_01.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
curvedHallJunction.addComponentOrReplace(gltfShape22)

const barrelWithLid = new Entity('barrelWithLid')
engine.addEntity(barrelWithLid)
barrelWithLid.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(17.5, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrelWithLid.addComponentOrReplace(transform59)
const gltfShape23 = new GLTFShape("39bf4479efaf125a721d737079930b685fce52ab65b8bbedcdaa5894adfcf5c4/Barrel_Lid.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
barrelWithLid.addComponentOrReplace(gltfShape23)

const barrelSpilled = new Entity('barrelSpilled')
engine.addEntity(barrelSpilled)
barrelSpilled.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(16.5, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrelSpilled.addComponentOrReplace(transform60)
const gltfShape24 = new GLTFShape("0eb90b562876ab7d3b61fc086c719ec505dbf62bb90431d97c02655fe1a2d196/Barrel_Spilled.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
barrelSpilled.addComponentOrReplace(gltfShape24)

const radioactiveContainer = new Entity('radioactiveContainer')
engine.addEntity(radioactiveContainer)
radioactiveContainer.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(15, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.5)
})
radioactiveContainer.addComponentOrReplace(transform61)
const gltfShape25 = new GLTFShape("162db5f8676027e55693aae8806c574da0807a225f954a9ce38dcf8980ef9476/Radioactive_Container.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
radioactiveContainer.addComponentOrReplace(gltfShape25)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(49.5, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(14, 22.5, 1)
})
ambientSound.addComponentOrReplace(transform62)

const enclosedHallJunction3 = new Entity('enclosedHallJunction3')
engine.addEntity(enclosedHallJunction3)
enclosedHallJunction3.setParent(_scene)
enclosedHallJunction3.addComponentOrReplace(gltfShape13)
const transform63 = new Transform({
  position: new Vector3(50.5, 0, 81),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction3.addComponentOrReplace(transform63)

const enclosedHallJunction4 = new Entity('enclosedHallJunction4')
engine.addEntity(enclosedHallJunction4)
enclosedHallJunction4.setParent(_scene)
enclosedHallJunction4.addComponentOrReplace(gltfShape13)
const transform64 = new Transform({
  position: new Vector3(66.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction4.addComponentOrReplace(transform64)

const enclosedHallJunction5 = new Entity('enclosedHallJunction5')
engine.addEntity(enclosedHallJunction5)
enclosedHallJunction5.setParent(_scene)
enclosedHallJunction5.addComponentOrReplace(gltfShape13)
const transform65 = new Transform({
  position: new Vector3(66.5, 0, 81),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction5.addComponentOrReplace(transform65)

const enclosedHallJunction6 = new Entity('enclosedHallJunction6')
engine.addEntity(enclosedHallJunction6)
enclosedHallJunction6.setParent(_scene)
enclosedHallJunction6.addComponentOrReplace(gltfShape13)
const transform66 = new Transform({
  position: new Vector3(34.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction6.addComponentOrReplace(transform66)

const enclosedHallJunction7 = new Entity('enclosedHallJunction7')
engine.addEntity(enclosedHallJunction7)
enclosedHallJunction7.setParent(_scene)
enclosedHallJunction7.addComponentOrReplace(gltfShape13)
const transform67 = new Transform({
  position: new Vector3(34.5, 0, 81),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction7.addComponentOrReplace(transform67)

const hexagonalFloorPanel = new Entity('hexagonalFloorPanel')
engine.addEntity(hexagonalFloorPanel)
hexagonalFloorPanel.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(14, 30, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 2.5, 10)
})
hexagonalFloorPanel.addComponentOrReplace(transform68)
const gltfShape26 = new GLTFShape("272952635038fdc52244e59f9989e3a457b0f3d72f699ad7d028f76b82518c89/FloorHexa_01/FloorHexa_01.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
hexagonalFloorPanel.addComponentOrReplace(gltfShape26)

const noIMAGE = new Entity('noIMAGE')
engine.addEntity(noIMAGE)
noIMAGE.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(6, 0, 63.5),
  rotation: new Quaternion(2.427593885731983e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
noIMAGE.addComponentOrReplace(transform69)
const gltfShape27 = new GLTFShape("37db3d46b1e0a1d91c62f1ef7413348e4073edc5fb33fe4d4c52602a591ebe01/GreenHouse_02/GreenHouse_02.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
noIMAGE.addComponentOrReplace(gltfShape27)

const ambientSound2 = new Entity('ambientSound2')
engine.addEntity(ambientSound2)
ambientSound2.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(25.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(14, 22.5, 1)
})
ambientSound2.addComponentOrReplace(transform70)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(45.5, 32, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform71)

const capsuleApexLegend6 = new Entity('capsuleApexLegend6')
engine.addEntity(capsuleApexLegend6)
capsuleApexLegend6.setParent(_scene)
capsuleApexLegend6.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(63, 0, 5.5),
  rotation: new Quaternion(0.09379655867815018, 0.2888869047164917, 0.028452830389142036, 0.9523324370384216),
  scale: new Vector3(1, 1, 1)
})
capsuleApexLegend6.addComponentOrReplace(transform72)

const radiatorDroid = new Entity('radiatorDroid')
engine.addEntity(radiatorDroid)
radiatorDroid.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(74.5, 6.5, 32.5),
  rotation: new Quaternion(0.05445541441440582, -0.5528950691223145, 0.08149833977222443, 0.827465832233429),
  scale: new Vector3(0.9999999403953552, 1, 1)
})
radiatorDroid.addComponentOrReplace(transform73)
const gltfShape28 = new GLTFShape("0bb0af513bf2d289586a6fcc6cc9dcb6f62a3f178fac4c28336f02ae27e118a6/Droid_02/Droid_02.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
radiatorDroid.addComponentOrReplace(gltfShape28)

const noIMAGE2 = new Entity('noIMAGE2')
engine.addEntity(noIMAGE2)
noIMAGE2.setParent(_scene)
noIMAGE2.addComponentOrReplace(gltfShape27)
const transform74 = new Transform({
  position: new Vector3(22.5, 0, 81),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
noIMAGE2.addComponentOrReplace(transform74)

const capsuleApexLegend7 = new Entity('capsuleApexLegend7')
engine.addEntity(capsuleApexLegend7)
capsuleApexLegend7.setParent(_scene)
capsuleApexLegend7.addComponentOrReplace(gltfShape3)
const transform75 = new Transform({
  position: new Vector3(5, 0, 18.5),
  rotation: new Quaternion(-1.1404853061947051e-8, 0.9238795638084412, -8.260126094228326e-8, 0.38268348574638367),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
capsuleApexLegend7.addComponentOrReplace(transform75)

const capsuleApexLegend8 = new Entity('capsuleApexLegend8')
engine.addEntity(capsuleApexLegend8)
capsuleApexLegend8.setParent(_scene)
capsuleApexLegend8.addComponentOrReplace(gltfShape3)
const transform76 = new Transform({
  position: new Vector3(18.5, 0, 30),
  rotation: new Quaternion(1.337820777552387e-16, 0.9238795638084412, -1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
capsuleApexLegend8.addComponentOrReplace(transform76)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(58.5, 0, 77),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor.addComponentOrReplace(transform77)

const cyberpunkDoor3 = new Entity('cyberpunkDoor3')
engine.addEntity(cyberpunkDoor3)
cyberpunkDoor3.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(42, 0, 77),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor3.addComponentOrReplace(transform78)

const cyberpunkDoor5 = new Entity('cyberpunkDoor5')
engine.addEntity(cyberpunkDoor5)
cyberpunkDoor5.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(63, 0, 57),
  rotation: new Quaternion(4.964726495719366e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(3.7496297359466553, 0.9900000095367432, 0.9900014400482178)
})
cyberpunkDoor5.addComponentOrReplace(transform79)

const enclosedHallJunction = new Entity('enclosedHallJunction')
engine.addEntity(enclosedHallJunction)
enclosedHallJunction.setParent(_scene)
enclosedHallJunction.addComponentOrReplace(gltfShape13)
const transform80 = new Transform({
  position: new Vector3(34.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction.addComponentOrReplace(transform80)

const enclosedHallJunction8 = new Entity('enclosedHallJunction8')
engine.addEntity(enclosedHallJunction8)
enclosedHallJunction8.setParent(_scene)
enclosedHallJunction8.addComponentOrReplace(gltfShape13)
const transform81 = new Transform({
  position: new Vector3(34.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction8.addComponentOrReplace(transform81)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(13, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalBluePad.addComponentOrReplace(transform82)

const hallwayDoorClosed2 = new Entity('hallwayDoorClosed2')
engine.addEntity(hallwayDoorClosed2)
hallwayDoorClosed2.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(34.5, 0, 89),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallwayDoorClosed2.addComponentOrReplace(transform83)
const gltfShape29 = new GLTFShape("70f9b4e28c4dd72e61ac6482688d82817e17e2ac540759959624e92d78c1e177/Hallway_Module_Door_01/Hallway_Module_Door_01.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
hallwayDoorClosed2.addComponentOrReplace(gltfShape29)

const hallwayDoorClosed3 = new Entity('hallwayDoorClosed3')
engine.addEntity(hallwayDoorClosed3)
hallwayDoorClosed3.setParent(_scene)
hallwayDoorClosed3.addComponentOrReplace(gltfShape29)
const transform84 = new Transform({
  position: new Vector3(50.5, 0, 89),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallwayDoorClosed3.addComponentOrReplace(transform84)

const hallwayDoorClosed4 = new Entity('hallwayDoorClosed4')
engine.addEntity(hallwayDoorClosed4)
hallwayDoorClosed4.setParent(_scene)
hallwayDoorClosed4.addComponentOrReplace(gltfShape29)
const transform85 = new Transform({
  position: new Vector3(66.5, 0, 89),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallwayDoorClosed4.addComponentOrReplace(transform85)

const hallwayDoorClosed5 = new Entity('hallwayDoorClosed5')
engine.addEntity(hallwayDoorClosed5)
hallwayDoorClosed5.setParent(_scene)
hallwayDoorClosed5.addComponentOrReplace(gltfShape29)
const transform86 = new Transform({
  position: new Vector3(74.5, 0, 81),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
hallwayDoorClosed5.addComponentOrReplace(transform86)

const hallwayDoorClosed6 = new Entity('hallwayDoorClosed6')
engine.addEntity(hallwayDoorClosed6)
hallwayDoorClosed6.setParent(_scene)
hallwayDoorClosed6.addComponentOrReplace(gltfShape29)
const transform87 = new Transform({
  position: new Vector3(74.5, 0, 65),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
hallwayDoorClosed6.addComponentOrReplace(transform87)

const hallwayDoorClosed7 = new Entity('hallwayDoorClosed7')
engine.addEntity(hallwayDoorClosed7)
hallwayDoorClosed7.setParent(_scene)
hallwayDoorClosed7.addComponentOrReplace(gltfShape29)
const transform88 = new Transform({
  position: new Vector3(50.5, 0, 57),
  rotation: new Quaternion(-2.177062080483132e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
hallwayDoorClosed7.addComponentOrReplace(transform88)

const hallwayDoorClosed8 = new Entity('hallwayDoorClosed8')
engine.addEntity(hallwayDoorClosed8)
hallwayDoorClosed8.setParent(_scene)
hallwayDoorClosed8.addComponentOrReplace(gltfShape29)
const transform89 = new Transform({
  position: new Vector3(34.5, 0, 57),
  rotation: new Quaternion(-2.177062080483132e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
hallwayDoorClosed8.addComponentOrReplace(transform89)

const hallwayDoorClosed = new Entity('hallwayDoorClosed')
engine.addEntity(hallwayDoorClosed)
hallwayDoorClosed.setParent(_scene)
hallwayDoorClosed.addComponentOrReplace(gltfShape29)
const transform90 = new Transform({
  position: new Vector3(50, 0, 41),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2500228881835938, 1.5, 1.0000088214874268)
})
hallwayDoorClosed.addComponentOrReplace(transform90)

const shortHallway2 = new Entity('shortHallway2')
engine.addEntity(shortHallway2)
shortHallway2.setParent(_scene)
shortHallway2.addComponentOrReplace(gltfShape11)
const transform91 = new Transform({
  position: new Vector3(56, 0, 41.5),
  rotation: new Quaternion(-6.199102739313611e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 1.5, 1.000002384185791)
})
shortHallway2.addComponentOrReplace(transform91)

const capsuleApexLegend3 = new Entity('capsuleApexLegend3')
engine.addEntity(capsuleApexLegend3)
capsuleApexLegend3.setParent(_scene)
capsuleApexLegend3.addComponentOrReplace(gltfShape3)
const transform92 = new Transform({
  position: new Vector3(5.5, 0, 29.5),
  rotation: new Quaternion(-0.08149827271699905, 0.827465832233429, 0.054455310106277466, 0.5528950095176697),
  scale: new Vector3(1.0000015497207642, 0.9999999403953552, 1.0000015497207642)
})
capsuleApexLegend3.addComponentOrReplace(transform92)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(59.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.5, 1.5, 3.0000007152557373)
})
concreteWall.addComponentOrReplace(transform93)
const gltfShape30 = new GLTFShape("faeff6a0a9602216afdf01dd208293747c1c4534dca9a2c9918c5b7a316829ad/Concrete_Wall.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
concreteWall.addComponentOrReplace(gltfShape30)

const cyberpunkDoor2 = new Entity('cyberpunkDoor2')
engine.addEntity(cyberpunkDoor2)
cyberpunkDoor2.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(27, 0, 77),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor2.addComponentOrReplace(transform94)

const cyberpunkDoor4 = new Entity('cyberpunkDoor4')
engine.addEntity(cyberpunkDoor4)
cyberpunkDoor4.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(59, 0, 35),
  rotation: new Quaternion(4.073815547731398e-15, -1, 1.1920927533992653e-7, 7.450580596923828e-8),
  scale: new Vector3(5.624443054199219, 1.4850000143051147, 0.9900013208389282)
})
cyberpunkDoor4.addComponentOrReplace(transform95)

const cyberpunkDoor6 = new Entity('cyberpunkDoor6')
engine.addEntity(cyberpunkDoor6)
cyberpunkDoor6.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(26.5, 0, 61.5),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor6.addComponentOrReplace(transform96)

const exodusBase4 = new Entity('exodusBase4')
engine.addEntity(exodusBase4)
exodusBase4.setParent(_scene)
exodusBase4.addComponentOrReplace(gltfShape)
const transform97 = new Transform({
  position: new Vector3(75.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
exodusBase4.addComponentOrReplace(transform97)

const mysticalMushroomTree2 = new Entity('mysticalMushroomTree2')
engine.addEntity(mysticalMushroomTree2)
mysticalMushroomTree2.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(75.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mysticalMushroomTree2.addComponentOrReplace(transform98)
mysticalMushroomTree2.addComponentOrReplace(gltfShape5)

const verticalConsole = new Entity('verticalConsole')
engine.addEntity(verticalConsole)
verticalConsole.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(65.5, 0, 43),
  rotation: new Quaternion(-4.586705008722191e-15, 0.9807853102684021, -1.1691870582808406e-7, -0.1950903832912445),
  scale: new Vector3(2.9783682823181152, 2, 1.6173239946365356)
})
verticalConsole.addComponentOrReplace(transform99)
const gltfShape31 = new GLTFShape("ea17bead5ff8228eeaf13b6018b368ed39b5ba66affb31f0fa08271b2d49faf9/KeyboardSciFi_01/KeyboardSciFi_01.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
verticalConsole.addComponentOrReplace(gltfShape31)

const cyberpunkDoor7 = new Entity('cyberpunkDoor7')
engine.addEntity(cyberpunkDoor7)
cyberpunkDoor7.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(63, 0, 73),
  rotation: new Quaternion(4.964726495719366e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(3.7496297359466553, 0.9900000095367432, 0.9900014400482178)
})
cyberpunkDoor7.addComponentOrReplace(transform100)

const indicatorArrow = new Entity('indicatorArrow')
engine.addEntity(indicatorArrow)
indicatorArrow.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(13, 3, 77),
  rotation: new Quaternion(0, 0, -1, -5.960464477539063e-8),
  scale: new Vector3(1.5, 2, 1)
})
indicatorArrow.addComponentOrReplace(transform101)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(30.5, 40.5, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall2.addComponentOrReplace(transform102)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(45.5, 38.5, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall3.addComponentOrReplace(transform103)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(46, 36, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall4.addComponentOrReplace(transform104)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(44.5, 34, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall5.addComponentOrReplace(transform105)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(45.5, 32.5, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall6.addComponentOrReplace(transform106)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(47, 30.5, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall7.addComponentOrReplace(transform107)

const invisibleWall8 = new Entity('invisibleWall8')
engine.addEntity(invisibleWall8)
invisibleWall8.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(31, 25.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall8.addComponentOrReplace(transform108)

const invisibleWall9 = new Entity('invisibleWall9')
engine.addEntity(invisibleWall9)
invisibleWall9.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(16, 21.5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall9.addComponentOrReplace(transform109)

const invisibleWall10 = new Entity('invisibleWall10')
engine.addEntity(invisibleWall10)
invisibleWall10.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(16, 18.5, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall10.addComponentOrReplace(transform110)

const invisibleWall11 = new Entity('invisibleWall11')
engine.addEntity(invisibleWall11)
invisibleWall11.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(17.5, 12.5, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall11.addComponentOrReplace(transform111)

const invisibleWall13 = new Entity('invisibleWall13')
engine.addEntity(invisibleWall13)
invisibleWall13.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(28.5, 28.5, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall13.addComponentOrReplace(transform112)

const shortHallway4 = new Entity('shortHallway4')
engine.addEntity(shortHallway4)
shortHallway4.setParent(_scene)
shortHallway4.addComponentOrReplace(gltfShape11)
const transform113 = new Transform({
  position: new Vector3(44, 0, 41.5),
  rotation: new Quaternion(-6.199102739313611e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 1.5, 1.000002384185791)
})
shortHallway4.addComponentOrReplace(transform113)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape30)
const transform114 = new Transform({
  position: new Vector3(37.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.5, 1.5, 3.0000007152557373)
})
concreteWall2.addComponentOrReplace(transform114)

const hexagonalFloorPanel2 = new Entity('hexagonalFloorPanel2')
engine.addEntity(hexagonalFloorPanel2)
hexagonalFloorPanel2.setParent(_scene)
hexagonalFloorPanel2.addComponentOrReplace(gltfShape26)
const transform115 = new Transform({
  position: new Vector3(14, 30, 63.5),
  rotation: new Quaternion(-1, 1.3764690274631168e-14, 1.1920928244535389e-7, -8.94069742685133e-8),
  scale: new Vector3(8, 2.500000476837158, 10.000001907348633)
})
hexagonalFloorPanel2.addComponentOrReplace(transform115)

const invisibleWall12 = new Entity('invisibleWall12')
engine.addEntity(invisibleWall12)
invisibleWall12.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(45.5, 28.5, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall12.addComponentOrReplace(transform116)

const invisibleWall14 = new Entity('invisibleWall14')
engine.addEntity(invisibleWall14)
invisibleWall14.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(45.5, 28.5, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15, 1, 9.499999046325684)
})
invisibleWall14.addComponentOrReplace(transform117)

const capsuleApexLegend9 = new Entity('capsuleApexLegend9')
engine.addEntity(capsuleApexLegend9)
capsuleApexLegend9.setParent(_scene)
capsuleApexLegend9.addComponentOrReplace(gltfShape3)
const transform118 = new Transform({
  position: new Vector3(4, 0, 82),
  rotation: new Quaternion(-0.08644340187311172, 0.769288182258606, 0.04620487242937088, 0.6313384771347046),
  scale: new Vector3(1.0000011920928955, 0.9999999403953552, 1.0000014305114746)
})
capsuleApexLegend9.addComponentOrReplace(transform118)

const solidYellow = new Entity('solidYellow')
engine.addEntity(solidYellow)
solidYellow.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(20.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow.addComponentOrReplace(transform119)
const gltfShape32 = new GLTFShape("ef3785496629e6ec2d0c5264a5d2c08dbd16c672901bbcae37991db06ada120e/solid_yellow.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
solidYellow.addComponentOrReplace(gltfShape32)

const solidYellow2 = new Entity('solidYellow2')
engine.addEntity(solidYellow2)
solidYellow2.setParent(_scene)
solidYellow2.addComponentOrReplace(gltfShape32)
const transform120 = new Transform({
  position: new Vector3(19.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow2.addComponentOrReplace(transform120)

const beanbagCream = new Entity('beanbagCream')
engine.addEntity(beanbagCream)
beanbagCream.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(55.5, 0, 78),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
beanbagCream.addComponentOrReplace(transform121)
const gltfShape33 = new GLTFShape("f811e3b56195a4e8319e23da398f955940b0b0efd5b7723a114d459f56cab04b/Beanbag_Cream.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
beanbagCream.addComponentOrReplace(gltfShape33)

const ringGreenLight = new Entity('ringGreenLight')
engine.addEntity(ringGreenLight)
ringGreenLight.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(13, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ringGreenLight.addComponentOrReplace(transform122)
const gltfShape34 = new GLTFShape("df3883c9b595615e44d5a4ac65f4a047cd662f5c249639910366eafe5fb716ac/Ring_Green_Light.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
ringGreenLight.addComponentOrReplace(gltfShape34)

const invisibleWall16 = new Entity('invisibleWall16')
engine.addEntity(invisibleWall16)
invisibleWall16.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(7, 0.5, 7.5),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(7.499997138977051, 2, 1.875)
})
invisibleWall16.addComponentOrReplace(transform123)

const invisibleWall18 = new Entity('invisibleWall18')
engine.addEntity(invisibleWall18)
invisibleWall18.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(24, 0, 17.5),
  rotation: new Quaternion(-0.009607359766960144, -0.09754516184329987, -0.09754514694213867, 0.9903926253318787),
  scale: new Vector3(9.354702949523926, 2.999999761581421, 4.442906856536865)
})
invisibleWall18.addComponentOrReplace(transform124)

const invisibleWall19 = new Entity('invisibleWall19')
engine.addEntity(invisibleWall19)
invisibleWall19.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(63, 1, 6),
  rotation: new Quaternion(-1.0692070423411431e-18, 0.2902847230434418, -3.4604632048740314e-8, 0.9569403529167175),
  scale: new Vector3(9.171571731567383, 2, 3.707106590270996)
})
invisibleWall19.addComponentOrReplace(transform125)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(20.5, 0, 2.5),
  rotation: new Quaternion(-3.532693915175855e-9, 1.4901161193847656e-8, -2.6366411276512736e-8, 1),
  scale: new Vector3(9.180002212524414, 2.999999761581421, 4.499997138977051)
})
invisibleWall.addComponentOrReplace(transform126)

const invisibleWall22 = new Entity('invisibleWall22')
engine.addEntity(invisibleWall22)
invisibleWall22.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(5, 0.5, 8),
  rotation: new Quaternion(-1.3353772310154e-8, 0.3826834559440613, -6.862690327125165e-8, 0.9238796234130859),
  scale: new Vector3(9.180002212524414, 2.999999761581421, 4.499997138977051)
})
invisibleWall22.addComponentOrReplace(transform127)

const invisibleWall17 = new Entity('invisibleWall17')
engine.addEntity(invisibleWall17)
invisibleWall17.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(51.5, 0, 5),
  rotation: new Quaternion(0.09055601805448532, -0.3808406889438629, 0.03750953823328018, 0.9194308519363403),
  scale: new Vector3(9.180004119873047, 2.999999761581421, 4.499998092651367)
})
invisibleWall17.addComponentOrReplace(transform128)

const invisibleWall15 = new Entity('invisibleWall15')
engine.addEntity(invisibleWall15)
invisibleWall15.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(18.5, 0, 30),
  rotation: new Quaternion(6.82622003367328e-9, -0.38268357515335083, 1.990815334806939e-8, 0.9238795042037964),
  scale: new Vector3(9.180002212524414, 2.999999761581421, 4.499997138977051)
})
invisibleWall15.addComponentOrReplace(transform129)

const invisibleWall20 = new Entity('invisibleWall20')
engine.addEntity(invisibleWall20)
invisibleWall20.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(5.5, 0, 18.5),
  rotation: new Quaternion(6.82622003367328e-9, -0.38268357515335083, 1.990815334806939e-8, 0.9238795042037964),
  scale: new Vector3(9.180002212524414, 2.999999761581421, 4.499997138977051)
})
invisibleWall20.addComponentOrReplace(transform130)

const invisibleWall23 = new Entity('invisibleWall23')
engine.addEntity(invisibleWall23)
invisibleWall23.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(5.5, 0, 29.5),
  rotation: new Quaternion(1.171107832931284e-8, -0.5555703639984131, 4.2343629047536524e-8, 0.8314695954322815),
  scale: new Vector3(9.18000316619873, 2.999999761581421, 4.499997615814209)
})
invisibleWall23.addComponentOrReplace(transform131)

const invisibleWall21 = new Entity('invisibleWall21')
engine.addEntity(invisibleWall21)
invisibleWall21.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(4, 0, 82),
  rotation: new Quaternion(1.3995873793248848e-8, -0.6343933939933777, 5.3002963795734104e-8, 0.7730103731155396),
  scale: new Vector3(9.180009841918945, 2.999999761581421, 4.5)
})
invisibleWall21.addComponentOrReplace(transform132)

const cyberpunkDoor8 = new Entity('cyberpunkDoor8')
engine.addEntity(cyberpunkDoor8)
cyberpunkDoor8.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(30.5, 0, 73),
  rotation: new Quaternion(4.964726495719366e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(3.7496297359466553, 0.9900000095367432, 0.9900014400482178)
})
cyberpunkDoor8.addComponentOrReplace(transform133)

const cyberpunkDoor9 = new Entity('cyberpunkDoor9')
engine.addEntity(cyberpunkDoor9)
cyberpunkDoor9.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(46.5, 0, 72.5),
  rotation: new Quaternion(4.964726495719366e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(3.7496297359466553, 0.9900000095367432, 0.9900014400482178)
})
cyberpunkDoor9.addComponentOrReplace(transform134)

const cyberpunkDoor10 = new Entity('cyberpunkDoor10')
engine.addEntity(cyberpunkDoor10)
cyberpunkDoor10.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(58.5, 0, 61.5),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor10.addComponentOrReplace(transform135)

const cyberpunkDoor11 = new Entity('cyberpunkDoor11')
engine.addEntity(cyberpunkDoor11)
cyberpunkDoor11.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(42.5, 0, 61),
  rotation: new Quaternion(1.0506063046985571e-14, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.749629259109497, 0.9900000095367432, 0.9900013208389282)
})
cyberpunkDoor11.addComponentOrReplace(transform136)

const tripleCartridgeRespirator = new Entity('tripleCartridgeRespirator')
engine.addEntity(tripleCartridgeRespirator)
tripleCartridgeRespirator.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(29, 1.5, 84.5),
  rotation: new Quaternion(0.09055592864751816, -0.3808407187461853, 0.03750956058502197, 0.9194307923316956),
  scale: new Vector3(0.5759044885635376, 0.5060054659843445, -0.27289828658103943)
})
tripleCartridgeRespirator.addComponentOrReplace(transform137)
const gltfShape35 = new GLTFShape("98d55ab47f0a72de3a388005a74a971d848ea47328fdc16855710ab0da376361/scene.gltf")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
tripleCartridgeRespirator.addComponentOrReplace(gltfShape35)

const hallwayDoorClosed9 = new Entity('hallwayDoorClosed9')
engine.addEntity(hallwayDoorClosed9)
hallwayDoorClosed9.setParent(_scene)
hallwayDoorClosed9.addComponentOrReplace(gltfShape29)
const transform138 = new Transform({
  position: new Vector3(50.5, 0, 57),
  rotation: new Quaternion(-2.177062080483132e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
hallwayDoorClosed9.addComponentOrReplace(transform138)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(31.5, 0, 87.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform139)

const imageURLNSFW = new Entity('imageURLNSFW')
engine.addEntity(imageURLNSFW)
imageURLNSFW.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(30, 0, 86),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1.749999761581421, 2.5, 1.75)
})
imageURLNSFW.addComponentOrReplace(transform140)

const solidYellow3 = new Entity('solidYellow3')
engine.addEntity(solidYellow3)
solidYellow3.setParent(_scene)
solidYellow3.addComponentOrReplace(gltfShape32)
const transform141 = new Transform({
  position: new Vector3(21.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow3.addComponentOrReplace(transform141)

const solidYellow4 = new Entity('solidYellow4')
engine.addEntity(solidYellow4)
solidYellow4.setParent(_scene)
solidYellow4.addComponentOrReplace(gltfShape32)
const transform142 = new Transform({
  position: new Vector3(22.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow4.addComponentOrReplace(transform142)

const solidYellow5 = new Entity('solidYellow5')
engine.addEntity(solidYellow5)
solidYellow5.setParent(_scene)
solidYellow5.addComponentOrReplace(gltfShape32)
const transform143 = new Transform({
  position: new Vector3(23.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow5.addComponentOrReplace(transform143)

const solidYellow6 = new Entity('solidYellow6')
engine.addEntity(solidYellow6)
solidYellow6.setParent(_scene)
solidYellow6.addComponentOrReplace(gltfShape32)
const transform144 = new Transform({
  position: new Vector3(24.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow6.addComponentOrReplace(transform144)

const solidYellow7 = new Entity('solidYellow7')
engine.addEntity(solidYellow7)
solidYellow7.setParent(_scene)
solidYellow7.addComponentOrReplace(gltfShape32)
const transform145 = new Transform({
  position: new Vector3(25.5, 0, 77),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow7.addComponentOrReplace(transform145)

const solidYellow8 = new Entity('solidYellow8')
engine.addEntity(solidYellow8)
solidYellow8.setParent(_scene)
solidYellow8.addComponentOrReplace(gltfShape32)
const transform146 = new Transform({
  position: new Vector3(22.5, 0, 78),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow8.addComponentOrReplace(transform146)

const solidYellow9 = new Entity('solidYellow9')
engine.addEntity(solidYellow9)
solidYellow9.setParent(_scene)
solidYellow9.addComponentOrReplace(gltfShape32)
const transform147 = new Transform({
  position: new Vector3(22.5, 0, 79),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow9.addComponentOrReplace(transform147)

const solidYellow10 = new Entity('solidYellow10')
engine.addEntity(solidYellow10)
solidYellow10.setParent(_scene)
solidYellow10.addComponentOrReplace(gltfShape32)
const transform148 = new Transform({
  position: new Vector3(22.5, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow10.addComponentOrReplace(transform148)

const solidYellow11 = new Entity('solidYellow11')
engine.addEntity(solidYellow11)
solidYellow11.setParent(_scene)
solidYellow11.addComponentOrReplace(gltfShape32)
const transform149 = new Transform({
  position: new Vector3(22.5, 0, 81),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow11.addComponentOrReplace(transform149)

const solidYellow12 = new Entity('solidYellow12')
engine.addEntity(solidYellow12)
solidYellow12.setParent(_scene)
solidYellow12.addComponentOrReplace(gltfShape32)
const transform150 = new Transform({
  position: new Vector3(22.5, 0, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow12.addComponentOrReplace(transform150)

const solidYellow13 = new Entity('solidYellow13')
engine.addEntity(solidYellow13)
solidYellow13.setParent(_scene)
solidYellow13.addComponentOrReplace(gltfShape32)
const transform151 = new Transform({
  position: new Vector3(22.5, 0, 83),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow13.addComponentOrReplace(transform151)

const solidYellow14 = new Entity('solidYellow14')
engine.addEntity(solidYellow14)
solidYellow14.setParent(_scene)
solidYellow14.addComponentOrReplace(gltfShape32)
const transform152 = new Transform({
  position: new Vector3(22.5, 0, 84),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
solidYellow14.addComponentOrReplace(transform152)

const xyzDetaildraftCapsule = new Entity('xyzDetaildraftCapsule')
engine.addEntity(xyzDetaildraftCapsule)
xyzDetaildraftCapsule.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(52.5, 0, 85),
  rotation: new Quaternion(1.6223006892393012e-14, 0.7730104327201843, -9.21500173944878e-8, -0.6343933939933777),
  scale: new Vector3(-0.5044291019439697, 0.25999999046325684, 0.43287816643714905)
})
xyzDetaildraftCapsule.addComponentOrReplace(transform153)
const gltfShape36 = new GLTFShape("6f17bfc0f19de445b8e78fd918fa26471e08c56be7294548f32b9feea0b2ea06/scene.gltf")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
xyzDetaildraftCapsule.addComponentOrReplace(gltfShape36)

const xyzDetaildraftCapsule2 = new Entity('xyzDetaildraftCapsule2')
engine.addEntity(xyzDetaildraftCapsule2)
xyzDetaildraftCapsule2.setParent(_scene)
xyzDetaildraftCapsule2.addComponentOrReplace(gltfShape36)
const transform154 = new Transform({
  position: new Vector3(48.5, 0, 85),
  rotation: new Quaternion(3.0024137371448007e-15, 0.9807853102684021, -1.169186987226567e-7, 0.19509026408195496),
  scale: new Vector3(-0.5044285655021667, 0.25999999046325684, 0.43287721276283264)
})
xyzDetaildraftCapsule2.addComponentOrReplace(transform154)

const beanbagCream2 = new Entity('beanbagCream2')
engine.addEntity(beanbagCream2)
beanbagCream2.setParent(_scene)
beanbagCream2.addComponentOrReplace(gltfShape33)
const transform155 = new Transform({
  position: new Vector3(53.5, 0, 76),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
beanbagCream2.addComponentOrReplace(transform155)

const invisibleCylinder2 = new Entity('invisibleCylinder2')
engine.addEntity(invisibleCylinder2)
invisibleCylinder2.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(50.5, 0, 85),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.875, 5, 3.499999523162842)
})
invisibleCylinder2.addComponentOrReplace(transform156)

const spaceshipHorizontalPlatform = new Entity('spaceshipHorizontalPlatform')
engine.addEntity(spaceshipHorizontalPlatform)
spaceshipHorizontalPlatform.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(11, 31, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spaceshipHorizontalPlatform.addComponentOrReplace(transform157)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(41, 1.5, 71.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft.addComponentOrReplace(transform158)
const nftShape = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/98514848495632100653274688758654724537902614156566475025827613691460878073857")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const enclosedHallJunction9 = new Entity('enclosedHallJunction9')
engine.addEntity(enclosedHallJunction9)
enclosedHallJunction9.setParent(_scene)
enclosedHallJunction9.addComponentOrReplace(gltfShape13)
const transform159 = new Transform({
  position: new Vector3(50.5, 0, 81),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction9.addComponentOrReplace(transform159)

const enclosedHallJunction10 = new Entity('enclosedHallJunction10')
engine.addEntity(enclosedHallJunction10)
enclosedHallJunction10.setParent(_scene)
enclosedHallJunction10.addComponentOrReplace(gltfShape13)
const transform160 = new Transform({
  position: new Vector3(50.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction10.addComponentOrReplace(transform160)

const enclosedHallJunction11 = new Entity('enclosedHallJunction11')
engine.addEntity(enclosedHallJunction11)
enclosedHallJunction11.setParent(_scene)
enclosedHallJunction11.addComponentOrReplace(gltfShape13)
const transform161 = new Transform({
  position: new Vector3(50.5, 0, 65),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enclosedHallJunction11.addComponentOrReplace(transform161)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script1.spawn(ambientSound, {"sound":"Factory","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script1.spawn(ambientSound2, {"sound":"Factory","active":true,"loop":true}, createChannel(channelId, ambientSound2, channelBus))
script2.spawn(teleport, {"x":"0","y":"0"}, createChannel(channelId, teleport, channelBus))
script3.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))
script3.spawn(cyberpunkDoor3, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor3","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor3","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor3, channelBus))
script3.spawn(cyberpunkDoor5, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor5","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor5","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor5, channelBus))
script4.spawn(verticalBluePad, {"distance":60,"speed":2,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script3.spawn(cyberpunkDoor2, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor2","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor2","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor2, channelBus))
script3.spawn(cyberpunkDoor4, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor4","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor4","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor4, channelBus))
script3.spawn(cyberpunkDoor6, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor6","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor6","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor6, channelBus))
script3.spawn(cyberpunkDoor7, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor7","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor7","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor7, channelBus))
script5.spawn(indicatorArrow, {"active":true}, createChannel(channelId, indicatorArrow, channelBus))
script6.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script6.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script6.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script6.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script6.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script6.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))
script6.spawn(invisibleWall8, {"enabled":true}, createChannel(channelId, invisibleWall8, channelBus))
script6.spawn(invisibleWall9, {"enabled":true}, createChannel(channelId, invisibleWall9, channelBus))
script6.spawn(invisibleWall10, {"enabled":true}, createChannel(channelId, invisibleWall10, channelBus))
script6.spawn(invisibleWall11, {"enabled":true}, createChannel(channelId, invisibleWall11, channelBus))
script6.spawn(invisibleWall13, {"enabled":true}, createChannel(channelId, invisibleWall13, channelBus))
script6.spawn(invisibleWall12, {"enabled":true}, createChannel(channelId, invisibleWall12, channelBus))
script6.spawn(invisibleWall14, {"enabled":true}, createChannel(channelId, invisibleWall14, channelBus))
script6.spawn(invisibleWall16, {"enabled":true}, createChannel(channelId, invisibleWall16, channelBus))
script6.spawn(invisibleWall18, {"enabled":true}, createChannel(channelId, invisibleWall18, channelBus))
script6.spawn(invisibleWall19, {"enabled":true}, createChannel(channelId, invisibleWall19, channelBus))
script6.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script6.spawn(invisibleWall22, {"enabled":true}, createChannel(channelId, invisibleWall22, channelBus))
script6.spawn(invisibleWall17, {"enabled":true}, createChannel(channelId, invisibleWall17, channelBus))
script6.spawn(invisibleWall15, {"enabled":true}, createChannel(channelId, invisibleWall15, channelBus))
script6.spawn(invisibleWall20, {"enabled":true}, createChannel(channelId, invisibleWall20, channelBus))
script6.spawn(invisibleWall23, {"enabled":true}, createChannel(channelId, invisibleWall23, channelBus))
script6.spawn(invisibleWall21, {"enabled":true}, createChannel(channelId, invisibleWall21, channelBus))
script3.spawn(cyberpunkDoor8, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor8","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor8","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor8, channelBus))
script3.spawn(cyberpunkDoor9, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor9","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor9","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor9, channelBus))
script3.spawn(cyberpunkDoor10, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor10","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor10","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor10, channelBus))
script3.spawn(cyberpunkDoor11, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor11","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"cyberpunkDoor11","actionId":"open","values":{}}]}, createChannel(channelId, cyberpunkDoor11, channelBus))
script7.spawn(radio, {"startOn":false,"volume":0.17,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"station":"https://cdn.instream.audio/:9069/stream?_=171cd6c2b6e"}, createChannel(channelId, radio, channelBus))
script8.spawn(imageURLNSFW, {"image":"https://imgur.com/a/ZMIxXWO","nsfw":true}, createChannel(channelId, imageURLNSFW, channelBus))
script9.spawn(invisibleCylinder2, {"enabled":true}, createChannel(channelId, invisibleCylinder2, channelBus))
script10.spawn(spaceshipHorizontalPlatform, {"distance":60,"speed":1,"autoStart":true,"onReachEnd":[{"entityName":"spaceshipHorizontalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"spaceshipHorizontalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, spaceshipHorizontalPlatform, channelBus))