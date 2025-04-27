/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 100428
 Source Host           : localhost:3306
 Source Schema         : hall

 Target Server Type    : MySQL
 Target Server Version : 100428
 File Encoding         : 65001

 Date: 14/03/2024 20:19:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_emp
-- ----------------------------
DROP TABLE IF EXISTS `tb_emp`;
CREATE TABLE `tb_emp`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '员工详情',
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户编号',
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态',
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色',
  `job_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '工作时间',
  `join_time` datetime(0) NULL DEFAULT NULL COMMENT '入职时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_emp
-- ----------------------------
INSERT INTO `tb_emp` VALUES (6, '张三', '张三', '男', 8, '就职', 'cook', '全天', '2024-03-14 17:04:39');
INSERT INTO `tb_emp` VALUES (7, '李四', '李四', '男', 9, '就职', 'job', '全天', '2024-03-14 17:04:53');

-- ----------------------------
-- Table structure for tb_expel
-- ----------------------------
DROP TABLE IF EXISTS `tb_expel`;
CREATE TABLE `tb_expel`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户ID',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类型',
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '理由',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_expel
-- ----------------------------
INSERT INTO `tb_expel` VALUES (1, 8, '处罚', '处罚着玩', '处罚着玩', '2024-03-14 17:23:10');

-- ----------------------------
-- Table structure for tb_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_info`;
CREATE TABLE `tb_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `sort` int(1) NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_info
-- ----------------------------
INSERT INTO `tb_info` VALUES (1, '食堂档口点餐和后厨管理系统', '食堂档口点餐的处理，后厨人员的管理，客户反馈信息查询系统', '<p>系统开发中</p>', 1);

-- ----------------------------
-- Table structure for tb_item
-- ----------------------------
DROP TABLE IF EXISTS `tb_item`;
CREATE TABLE `tb_item`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜品名称',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜品详情',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '菜品价格',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_item
-- ----------------------------
INSERT INTO `tb_item` VALUES (1, '番茄炒蛋', '鸡蛋+番茄', 6.00);
INSERT INTO `tb_item` VALUES (2, '菜品2', '菜品2', 111.00);
INSERT INTO `tb_item` VALUES (3, '香菇滑鸡', '香菇滑鸡', 10.00);

-- ----------------------------
-- Table structure for tb_leave
-- ----------------------------
DROP TABLE IF EXISTS `tb_leave`;
CREATE TABLE `tb_leave`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户ID',
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '请假理由',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '请假内容',
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '审核状态',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_leave
-- ----------------------------
INSERT INTO `tb_leave` VALUES (1, 1, '身体不舒服', '2023/3/14开始后三天', '审核通过', '2024-03-14 17:53:56');
INSERT INTO `tb_leave` VALUES (2, 1, '我要请假', '一个月', '审核通过', '2024-03-14 18:05:12');
INSERT INTO `tb_leave` VALUES (3, 8, '11111', '11111', '审核通过', '2024-03-14 18:06:23');

-- ----------------------------
-- Table structure for tb_log
-- ----------------------------
DROP TABLE IF EXISTS `tb_log`;
CREATE TABLE `tb_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '日志时间',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 637 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_log
-- ----------------------------

-- ----------------------------
-- Table structure for tb_menu
-- ----------------------------
DROP TABLE IF EXISTS `tb_menu`;
CREATE TABLE `tb_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单地址',
  `parent` int(255) NULL DEFAULT NULL COMMENT '父级菜单',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单图表',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_menu
-- ----------------------------
INSERT INTO `tb_menu` VALUES (1, '首页', '/dashboard', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (2, '系统管理', '/system', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (3, '用户管理', '/system/user', 2, '');
INSERT INTO `tb_menu` VALUES (4, '权限管理', '/system/permission', 2, '');
INSERT INTO `tb_menu` VALUES (5, '角色管理', '/system/role', 2, '');
INSERT INTO `tb_menu` VALUES (6, '菜单管理', '/system/menu', 2, '');
INSERT INTO `tb_menu` VALUES (7, '系统日志', '/system/logs', 2, '');
INSERT INTO `tb_menu` VALUES (8, '信息管理', '/system/info', 2, '');
INSERT INTO `tb_menu` VALUES (9, '菜品管理', '/hall/item', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (10, '员工管理', '/hall/emp', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (11, '请假管理', '/hall/leave', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (12, '下单', '/hall/order/form', 0, 'el-icon-menu');
INSERT INTO `tb_menu` VALUES (13, '下单列表', '/hall/order/list', 0, 'el-icon-menu');

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '下单人',
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '下单人昵称',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '下单时间',
  `total_amount` decimal(10, 2) NULL DEFAULT NULL COMMENT '总金额',
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单状态',
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户评价',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_order
-- ----------------------------
INSERT INTO `tb_order` VALUES (2, 1, '张三', '2024-03-14 19:43:26', 244.00, '备材料', NULL);
INSERT INTO `tb_order` VALUES (3, 10, '客户', '2024-03-14 20:17:31', 258.00, '取餐成功', NULL);

-- ----------------------------
-- Table structure for tb_order_item
-- ----------------------------
DROP TABLE IF EXISTS `tb_order_item`;
CREATE TABLE `tb_order_item`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `order_id` int(11) NULL DEFAULT NULL COMMENT '订单ID',
  `item_id` int(11) NULL DEFAULT NULL COMMENT '菜品ID',
  `item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜品名称',
  `num` int(11) NULL DEFAULT NULL COMMENT '数量',
  `unit_price` decimal(10, 2) NULL DEFAULT NULL COMMENT '单价',
  `total_price` decimal(10, 2) NULL DEFAULT NULL COMMENT '总价',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_order_item
-- ----------------------------
INSERT INTO `tb_order_item` VALUES (4, 2, 1, '番茄炒蛋', 2, 6.00, 12.00);
INSERT INTO `tb_order_item` VALUES (5, 2, 2, '菜品2', 2, 111.00, 222.00);
INSERT INTO `tb_order_item` VALUES (6, 2, 3, '香菇滑鸡', 1, 10.00, 10.00);
INSERT INTO `tb_order_item` VALUES (7, 3, 1, '番茄炒蛋', 1, 6.00, 6.00);
INSERT INTO `tb_order_item` VALUES (8, 3, 2, '菜品2', 2, 111.00, 222.00);
INSERT INTO `tb_order_item` VALUES (9, 3, 3, '香菇滑鸡', 3, 10.00, 30.00);

-- ----------------------------
-- Table structure for tb_permission
-- ----------------------------
DROP TABLE IF EXISTS `tb_permission`;
CREATE TABLE `tb_permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限字符',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_permission
-- ----------------------------
INSERT INTO `tb_permission` VALUES (1, 'ss-login', '管理员登录');
INSERT INTO `tb_permission` VALUES (2, 'ss-logout', '管理员注销');
INSERT INTO `tb_permission` VALUES (3, 'ss-info', '管理员信息');
INSERT INTO `tb_permission` VALUES (4, 'ss-permission-save', '权限保存');
INSERT INTO `tb_permission` VALUES (5, 'ss-permission-delete', '权限删除');
INSERT INTO `tb_permission` VALUES (6, 'ss-permission-list', '权限列表');
INSERT INTO `tb_permission` VALUES (7, 'ss-role-save', '角色保存');
INSERT INTO `tb_permission` VALUES (8, 'ss-role-list', '角色列表');
INSERT INTO `tb_permission` VALUES (9, 'ss-role-delete', '角色删除');
INSERT INTO `tb_permission` VALUES (10, 'ss-role-allot', '角色分配权限');
INSERT INTO `tb_permission` VALUES (11, 'ss-user-allot', '用户分配角色');
INSERT INTO `tb_permission` VALUES (12, 'ss-user-save', '用户保存');
INSERT INTO `tb_permission` VALUES (13, 'ss-user-delete', '用户删除');
INSERT INTO `tb_permission` VALUES (14, 'ss-user-offline', '用户下线');
INSERT INTO `tb_permission` VALUES (15, 'ss-user-list', '用户列表');
INSERT INTO `tb_permission` VALUES (16, 'ss-log-list', '查看日志');
INSERT INTO `tb_permission` VALUES (17, 'ss-log-delete', '删除日志权限');
INSERT INTO `tb_permission` VALUES (18, 'ss-menu-list', '查询菜单信息');
INSERT INTO `tb_permission` VALUES (19, 'ss-menu-save', '保存菜单信息');
INSERT INTO `tb_permission` VALUES (20, 'ss-menu-delete', '删除菜单信息');
INSERT INTO `tb_permission` VALUES (21, 'ss-menu-allot', '分配角色菜单');
INSERT INTO `tb_permission` VALUES (22, 'ss-info-save', '保存系统信息');
INSERT INTO `tb_permission` VALUES (23, 'ss-info-list', '查看系统信息');
INSERT INTO `tb_permission` VALUES (24, 'ss-info-delete', '删除系统信息');

-- ----------------------------
-- Table structure for tb_role
-- ----------------------------
DROP TABLE IF EXISTS `tb_role`;
CREATE TABLE `tb_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (1, 'admin', '超级管理员');
INSERT INTO `tb_role` VALUES (2, 'customer', '客户');
INSERT INTO `tb_role` VALUES (3, 'job', '档口工作人员');
INSERT INTO `tb_role` VALUES (4, 'cook', '厨师');

-- ----------------------------
-- Table structure for tb_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `tb_role_menu`;
CREATE TABLE `tb_role_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NULL DEFAULT NULL COMMENT '角色ID',
  `menu_id` int(11) NULL DEFAULT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 117 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_role_menu
-- ----------------------------
INSERT INTO `tb_role_menu` VALUES (72, 3, 1);
INSERT INTO `tb_role_menu` VALUES (73, 3, 9);
INSERT INTO `tb_role_menu` VALUES (74, 3, 11);
INSERT INTO `tb_role_menu` VALUES (75, 4, 1);
INSERT INTO `tb_role_menu` VALUES (76, 4, 11);
INSERT INTO `tb_role_menu` VALUES (102, 2, 1);
INSERT INTO `tb_role_menu` VALUES (103, 2, 12);
INSERT INTO `tb_role_menu` VALUES (104, 2, 13);
INSERT INTO `tb_role_menu` VALUES (105, 1, 1);
INSERT INTO `tb_role_menu` VALUES (106, 1, 2);
INSERT INTO `tb_role_menu` VALUES (107, 1, 3);
INSERT INTO `tb_role_menu` VALUES (108, 1, 4);
INSERT INTO `tb_role_menu` VALUES (109, 1, 5);
INSERT INTO `tb_role_menu` VALUES (110, 1, 6);
INSERT INTO `tb_role_menu` VALUES (111, 1, 7);
INSERT INTO `tb_role_menu` VALUES (112, 1, 8);
INSERT INTO `tb_role_menu` VALUES (113, 1, 9);
INSERT INTO `tb_role_menu` VALUES (114, 1, 10);
INSERT INTO `tb_role_menu` VALUES (115, 1, 11);
INSERT INTO `tb_role_menu` VALUES (116, 1, 13);

-- ----------------------------
-- Table structure for tb_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `tb_role_permission`;
CREATE TABLE `tb_role_permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NULL DEFAULT NULL COMMENT '角色ID',
  `permission_id` int(11) NULL DEFAULT NULL COMMENT '权限ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 252 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_role_permission
-- ----------------------------
INSERT INTO `tb_role_permission` VALUES (156, 1, 1);
INSERT INTO `tb_role_permission` VALUES (157, 1, 2);
INSERT INTO `tb_role_permission` VALUES (158, 1, 3);
INSERT INTO `tb_role_permission` VALUES (159, 1, 4);
INSERT INTO `tb_role_permission` VALUES (160, 1, 5);
INSERT INTO `tb_role_permission` VALUES (161, 1, 6);
INSERT INTO `tb_role_permission` VALUES (162, 1, 7);
INSERT INTO `tb_role_permission` VALUES (163, 1, 8);
INSERT INTO `tb_role_permission` VALUES (164, 1, 9);
INSERT INTO `tb_role_permission` VALUES (165, 1, 10);
INSERT INTO `tb_role_permission` VALUES (166, 1, 11);
INSERT INTO `tb_role_permission` VALUES (167, 1, 12);
INSERT INTO `tb_role_permission` VALUES (168, 1, 13);
INSERT INTO `tb_role_permission` VALUES (169, 1, 14);
INSERT INTO `tb_role_permission` VALUES (170, 1, 15);
INSERT INTO `tb_role_permission` VALUES (171, 1, 16);
INSERT INTO `tb_role_permission` VALUES (172, 1, 17);
INSERT INTO `tb_role_permission` VALUES (173, 1, 18);
INSERT INTO `tb_role_permission` VALUES (174, 1, 19);
INSERT INTO `tb_role_permission` VALUES (175, 1, 20);
INSERT INTO `tb_role_permission` VALUES (176, 1, 21);
INSERT INTO `tb_role_permission` VALUES (177, 1, 23);
INSERT INTO `tb_role_permission` VALUES (178, 1, 22);
INSERT INTO `tb_role_permission` VALUES (179, 1, 24);
INSERT INTO `tb_role_permission` VALUES (180, 2, 1);
INSERT INTO `tb_role_permission` VALUES (181, 2, 2);
INSERT INTO `tb_role_permission` VALUES (182, 2, 3);
INSERT INTO `tb_role_permission` VALUES (183, 2, 4);
INSERT INTO `tb_role_permission` VALUES (184, 2, 5);
INSERT INTO `tb_role_permission` VALUES (185, 2, 6);
INSERT INTO `tb_role_permission` VALUES (186, 2, 7);
INSERT INTO `tb_role_permission` VALUES (187, 2, 8);
INSERT INTO `tb_role_permission` VALUES (188, 2, 9);
INSERT INTO `tb_role_permission` VALUES (189, 2, 10);
INSERT INTO `tb_role_permission` VALUES (190, 2, 11);
INSERT INTO `tb_role_permission` VALUES (191, 2, 12);
INSERT INTO `tb_role_permission` VALUES (192, 2, 13);
INSERT INTO `tb_role_permission` VALUES (193, 2, 14);
INSERT INTO `tb_role_permission` VALUES (194, 2, 15);
INSERT INTO `tb_role_permission` VALUES (195, 2, 17);
INSERT INTO `tb_role_permission` VALUES (196, 2, 16);
INSERT INTO `tb_role_permission` VALUES (197, 2, 18);
INSERT INTO `tb_role_permission` VALUES (198, 2, 19);
INSERT INTO `tb_role_permission` VALUES (199, 2, 20);
INSERT INTO `tb_role_permission` VALUES (200, 2, 21);
INSERT INTO `tb_role_permission` VALUES (201, 2, 22);
INSERT INTO `tb_role_permission` VALUES (202, 2, 24);
INSERT INTO `tb_role_permission` VALUES (203, 2, 23);
INSERT INTO `tb_role_permission` VALUES (204, 3, 1);
INSERT INTO `tb_role_permission` VALUES (205, 3, 2);
INSERT INTO `tb_role_permission` VALUES (206, 3, 3);
INSERT INTO `tb_role_permission` VALUES (207, 3, 4);
INSERT INTO `tb_role_permission` VALUES (208, 3, 5);
INSERT INTO `tb_role_permission` VALUES (209, 3, 6);
INSERT INTO `tb_role_permission` VALUES (210, 3, 7);
INSERT INTO `tb_role_permission` VALUES (211, 3, 8);
INSERT INTO `tb_role_permission` VALUES (212, 3, 9);
INSERT INTO `tb_role_permission` VALUES (213, 3, 10);
INSERT INTO `tb_role_permission` VALUES (214, 3, 11);
INSERT INTO `tb_role_permission` VALUES (215, 3, 13);
INSERT INTO `tb_role_permission` VALUES (216, 3, 12);
INSERT INTO `tb_role_permission` VALUES (217, 3, 14);
INSERT INTO `tb_role_permission` VALUES (218, 3, 15);
INSERT INTO `tb_role_permission` VALUES (219, 3, 16);
INSERT INTO `tb_role_permission` VALUES (220, 3, 17);
INSERT INTO `tb_role_permission` VALUES (221, 3, 18);
INSERT INTO `tb_role_permission` VALUES (222, 3, 19);
INSERT INTO `tb_role_permission` VALUES (223, 3, 20);
INSERT INTO `tb_role_permission` VALUES (224, 3, 21);
INSERT INTO `tb_role_permission` VALUES (225, 3, 22);
INSERT INTO `tb_role_permission` VALUES (226, 3, 23);
INSERT INTO `tb_role_permission` VALUES (227, 3, 24);
INSERT INTO `tb_role_permission` VALUES (228, 4, 1);
INSERT INTO `tb_role_permission` VALUES (229, 4, 2);
INSERT INTO `tb_role_permission` VALUES (230, 4, 3);
INSERT INTO `tb_role_permission` VALUES (231, 4, 4);
INSERT INTO `tb_role_permission` VALUES (232, 4, 5);
INSERT INTO `tb_role_permission` VALUES (233, 4, 6);
INSERT INTO `tb_role_permission` VALUES (234, 4, 7);
INSERT INTO `tb_role_permission` VALUES (235, 4, 8);
INSERT INTO `tb_role_permission` VALUES (236, 4, 9);
INSERT INTO `tb_role_permission` VALUES (237, 4, 10);
INSERT INTO `tb_role_permission` VALUES (238, 4, 11);
INSERT INTO `tb_role_permission` VALUES (239, 4, 12);
INSERT INTO `tb_role_permission` VALUES (240, 4, 13);
INSERT INTO `tb_role_permission` VALUES (241, 4, 15);
INSERT INTO `tb_role_permission` VALUES (242, 4, 14);
INSERT INTO `tb_role_permission` VALUES (243, 4, 16);
INSERT INTO `tb_role_permission` VALUES (244, 4, 17);
INSERT INTO `tb_role_permission` VALUES (245, 4, 18);
INSERT INTO `tb_role_permission` VALUES (246, 4, 19);
INSERT INTO `tb_role_permission` VALUES (247, 4, 20);
INSERT INTO `tb_role_permission` VALUES (248, 4, 21);
INSERT INTO `tb_role_permission` VALUES (249, 4, 22);
INSERT INTO `tb_role_permission` VALUES (250, 4, 23);
INSERT INTO `tb_role_permission` VALUES (251, 4, 24);

-- ----------------------------
-- Table structure for tb_token
-- ----------------------------
DROP TABLE IF EXISTS `tb_token`;
CREATE TABLE `tb_token`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'jwt token',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_token
-- ----------------------------
INSERT INTO `tb_token` VALUES (29, 'admin', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTA1MDUwNjMsInVzZXJuYW1lIjoiYWRtaW4ifQ.P5w7TnVDQGMfsoRVxv3lGauE24jiAd0uaI6dJOjCsXA', '2024-03-14 20:17:43');

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `disabled` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否禁用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES (1, 'admin', '123456', '张三', NULL, '12345678910', 0);
INSERT INTO `tb_user` VALUES (8, '12345678910', '123456', '张三', NULL, '12345678910', 0);
INSERT INTO `tb_user` VALUES (9, '123444', '123456', '李四', NULL, '123444', 0);
INSERT INTO `tb_user` VALUES (10, '客户', '123456', '客户', 'http://localhost:9090/files/get?filename=1cce90c6-4769-4604-a192-38db4f91fb95.jpg', '123456789', 0);

-- ----------------------------
-- Table structure for tb_user_role
-- ----------------------------
DROP TABLE IF EXISTS `tb_user_role`;
CREATE TABLE `tb_user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户ID',
  `role_id` int(11) NULL DEFAULT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user_role
-- ----------------------------
INSERT INTO `tb_user_role` VALUES (1, 1, 1);
INSERT INTO `tb_user_role` VALUES (8, 8, 4);
INSERT INTO `tb_user_role` VALUES (9, 9, 3);
INSERT INTO `tb_user_role` VALUES (10, 10, 2);

SET FOREIGN_KEY_CHECKS = 1;
